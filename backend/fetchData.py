import requests
import pymongo
import random
import string
import re
from datetime import datetime
from bson import ObjectId
from requests.exceptions import HTTPError


# MongoDB connection
MONGODB_URI = "mongodb://thecloudguru:thecloudguru@18.224.5.169:27017/"
DB_NAME = "admin"
VENDORS_COLLECTION = "vendors"
VENDOR_DETAILS_COLLECTION = "vendordetails"

def random_string(length=12):
    """Generate a random string of letters and digits."""
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join(random.choice(letters_and_digits) for i in range(length))

def random_int(min_value=100000, max_value=1000000):
    """Generate a random integer between min_value and max_value."""
    return random.randint(min_value, max_value)

def extract_urls_from_html(html):
    """Extract URLs from href attributes using regular expressions."""
    url_pattern = re.compile(r'href=["\'](https?://[^"\']+)["\']', re.IGNORECASE)
    urls = url_pattern.findall(html)
    return urls

def clean_description(description):
    """Remove HTML tags from the description and extract URLs."""

    urls = extract_urls_from_html(description)
    # Remove HTML tags
    clean_text = re.sub(r'<[^>]+>', '', description)
    # Extract URLs
   # urls = re.findall(r'http[s]?://[^\s<>"]+|www\.[^\s<>"]+', clean_text)

    #print(f"Cleaned Description: {clean_text}")
    #print(f"Extracted URLs: {urls}")
    # Return cleaned description and extracted URLs
    return clean_text, urls

def format_urls_as_html(urls):
    """Format URLs as HTML clickable links."""
    if not urls:
        return []
    return [f'<a href="{url}" target="_blank" rel="noopener noreferrer">{url}</a>' for url in urls]

def map_data_to_vendors(item):
    """Map API data to the vendors collection format."""
    return {
        "vendorName": item.get("Title", random_string()),
        "breachDate": datetime.strptime(item["BreachDate"], "%Y-%m-%d").isoformat() if "BreachDate" in item else datetime.now().isoformat(),
        "dateAdded": datetime.strptime(item["AddedDate"], "%Y-%m-%dT%H:%M:%SZ").isoformat() if "AddedDate" in item else datetime.now().isoformat(),
        "compromisedAccounts": item.get("PwnCount", random_int()),
        "compromisedData": item.get("DataClasses", ["Unknown"]),
        "riskScore": "Low",  # Random or default risk score
        "companyId": item.get("Title", random_string()),
        "__v": 0
    }

def map_data_to_vendor_details(item):
    """Map API data to the vendordetails collection format."""
    description, urls = clean_description(item.get("Description", "No description available."))
    formatted_urls = (urls)
    
    # Ensure `LogoPath` is included if present
    reference_links = formatted_urls if formatted_urls else []
    if item.get("LogoPath"):
        reference_links.append(item["LogoPath"])

    return {
        "vendorName": item.get("Title", random_string()),
        "vendorDesc": description,
        "vendorCountry": "USA",  # Default or random country
        "vendorCity": "New York",  # Default or random city
        "vendorOrg": item.get("Title", random_string()),
        "vendorDateOfBreach": datetime.strptime(item["BreachDate"], "%Y-%m-%d").isoformat() if "BreachDate" in item else datetime.now().isoformat(),
        "vendorBreachDetails": description,
        "vendorIdentifyScore": random_int(50, 100),
        "vendorProtectScore": random_int(50, 100),
        "vendorDetectScore": random_int(50, 100),
        "vendorRespondScore": random_int(50, 100),
        "vendorRecoverScore": random_int(50, 100),
        "dns": item.get("Domain", random_string() + ".com"),
        "averageTotalRiskScore": random_int(50, 100),
        "vendorVulnerabilities": ["Unknown Vulnerabilities"],  # Default vulnerabilities
        "vendorReferenceLinks": reference_links,
        "companyId": item.get("Title", random_string()),
        "__v": 0
    }

def read_data():
    URL = "https://haveibeenpwned.com/api/v3/breaches"
    headers = {"Content-Type": "application/json"}
    response = requests.get(URL, headers=headers, verify=False)
    if response.status_code == 200:
        return response.json()
    else:
        print("Something went wrong. HTTP STATUS CODE Returned: %s" % response.status_code)
        return []

def push_to_db(data):
    mongoclient = pymongo.MongoClient(MONGODB_URI)
    db = mongoclient[DB_NAME]
    vendors_col = db[VENDORS_COLLECTION]
    vendor_details_col = db[VENDOR_DETAILS_COLLECTION]

    vendor_inserted_count = 0
    vendor_details_inserted_count = 0

    for item in data:
        
        vendors_data = map_data_to_vendors(item)
        vendor_details_data = map_data_to_vendor_details(item)

        existing_vendor = vendors_col.find_one({"vendorName": vendors_data["vendorName"]})
        if not existing_vendor:
            # Insert new vendor data
            vendors_col.insert_one(vendors_data)
            vendor_inserted_count += 1
            print(f"Inserted new vendor: {vendors_data['vendorName']}")
        else:
            print(f"Duplicate vendor found: {vendors_data['vendorName']}")

        # Check if vendor details already exist
        existing_vendor_details = vendor_details_col.find_one({"vendorName": vendor_details_data["vendorName"]})
        if not existing_vendor_details:
            # Insert new vendor details
            vendor_details_col.insert_one(vendor_details_data)
            vendor_details_inserted_count += 1
            print(f"Inserted new vendor details: {vendor_details_data['vendorName']}")
        else:
            print(f"Duplicate vendor found: {vendors_data['vendorName']}")
        # vendors_col.insert_one(vendors_data)

    print(f"Total vendors inserted: {vendor_inserted_count}")
    print(f"Total vendor details inserted: {vendor_details_inserted_count}")    # vendor_details_col.insert_one(vendor_details_data)

data = read_data()
if data:
    push_to_db(data)
else:
    print("No data to insert")