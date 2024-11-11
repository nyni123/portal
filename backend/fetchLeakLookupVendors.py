import aiohttp
import asyncio
from bs4 import BeautifulSoup
import nest_asyncio
import json
import pymongo
from datetime import datetime
import random
import string

# Nest asyncio to allow running in Jupyter or other event loops
nest_asyncio.apply()

# MongoDB connection details
MONGODB_URI = "mongodb://thecloudguru:thecloudguru@18.224.5.169:27017/"
DB_NAME = "admin"
VENDORS_COLLECTION = "vendors"
VENDOR_DETAILS_COLLECTION = "vendordetails"

# Helper functions
def random_string(length=12):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join(random.choice(letters_and_digits) for i in range(length))

def random_int(min_value=100000, max_value=1000000):
    return random.randint(min_value, min_value)

def clean_description(description_html):
    """
    Clean the description HTML and extract URLs if any are present.
    
    Args:
        description_html (str): The HTML content containing the description.
        
    Returns:
        tuple: A cleaned text description and a list of extracted URLs.
    """
    soup = BeautifulSoup(description_html, 'html.parser')
    
    # Cleaned text description
    cleaned_description = soup.get_text()

    # Extract URLs from the description
    urls = [a['href'] for a in soup.find_all('a', href=True)]
    
    return cleaned_description, urls

def clean_columns(columns_html):
    soup = BeautifulSoup(columns_html, 'html.parser')
    return [span.text for span in soup.find_all('span')]

def map_data_to_vendors(item):
    """Map API data to the vendors collection format."""
    compromised_data = item.get("Columns", ["Unknown"])
    date_indexed = datetime.strptime(item.get("Date Indexed"), "%Y-%m-%d").isoformat()
    
    return {
        "vendorName": item.get("Breach Name", random_string()),
        "breachDate": datetime.strptime(item["BreachDate"], "%Y-%m-%d").isoformat() if "BreachDate" in item else datetime.now().isoformat(),
        "dateAdded": date_indexed,
        "compromisedAccounts": item.get("Total Records", random_int()),
        "compromisedData": compromised_data,  
        "riskScore": "Low",  
        "companyId": item.get("Breach Name", random_string()),
        "__v": 0
    }

def map_data_to_vendor_details(item):
    """Map API data to the vendordetails collection format."""
    description, urls = clean_description(item.get("Description", "No description available."))
    formatted_urls = urls
    
    reference_links = formatted_urls if formatted_urls else []
    if item.get("LogoPath"):
        reference_links.append(item["LogoPath"])

    return {
        "vendorName": item.get("Breach Name", random_string()),
        "vendorDesc": description,
        "vendorCountry": "USA",
        "vendorCity": "New York",
        "vendorOrg": item.get("Breach Name", random_string()),
        "vendorDateOfBreach": datetime.strptime(item["BreachDate"], "%Y-%m-%d").isoformat() if "BreachDate" in item else datetime.now().isoformat(),
        "vendorBreachDetails": description,
        "vendorIdentifyScore": random_int(50, 100),
        "vendorProtectScore": random_int(50, 100),
        "vendorDetectScore": random_int(50, 100),
        "vendorRespondScore": random_int(50, 100),
        "vendorRecoverScore": random_int(50, 100),
        "dns": item.get("Domain", random_string() + ".com"),
        "averageTotalRiskScore": random_int(50, 100),
        "vendorVulnerabilities": ["Unknown Vulnerabilities"],
        "vendorReferenceLinks": reference_links,
        "companyId": item.get("Breach Name", random_string()),
        "totalRecords": item.get("Total Records", "N/A"),
        "breachSize": item.get("Breach Size", "N/A"),
        "__v": 0
    }

# Async function to get breach details
async def get_breach_details(session, breach_id):
    url = 'https://leak-lookup.com/breaches/stats'
    payload = {'id': breach_id}
    async with session.post(url, data=payload) as response:
        content = await response.text()
        try:
            return json.loads(content)
        except json.JSONDecodeError:
            return {}

# Function to scrape data
async def scrape_breach_data():
    url = 'https://leak-lookup.com/breaches'
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            soup = BeautifulSoup(await response.text(), 'html.parser')

        table = soup.find('table', {'id': 'datatables-indexed-breaches'})
        rows = table.find('tbody').find_all('tr')

        data = []
        tasks = []
        breach_ids = []

        for row in rows:
            columns = row.find_all('td')
            database_name = columns[0].find('a').text.strip()
            breach_id = columns[0].find('a')['data-id']
            record_count = columns[1].text.strip()

            tasks.append(get_breach_details(session, breach_id))
            breach_ids.append(breach_id)

        breach_details_list = await asyncio.gather(*tasks)
        breach_details_dict = {breach_ids[i]: breach_details_list[i] for i in range(len(breach_ids))}

        for row in rows:
            columns = row.find_all('td')
            database_name = columns[0].find('a').text.strip()
            breach_id = columns[0].find('a')['data-id']

            breach_details = breach_details_dict.get(breach_id, {})
            columns_text = clean_columns(breach_details.get("columns", ""))
            data.append({
                'Database Name': database_name,
                'Record Count': columns[1].text.strip(),
                'Breach Name': breach_details.get("name", "N/A"),
                'Date Indexed': breach_details.get("indexed", "N/A"),
                'Total Records': breach_details.get("records", "N/A"),
                'Breach Size': breach_details.get("size", "N/A"),
                'Columns': columns_text
            })

        return data

# Function to insert data into MongoDB
def push_to_db(data):
    mongoclient = pymongo.MongoClient(MONGODB_URI)
    db = mongoclient[DB_NAME]
    vendors_col = db[VENDORS_COLLECTION]
    vendor_details_col = db[VENDOR_DETAILS_COLLECTION]
    skip_count = 0
    
    
    for item in data:
       
        
        # Check if the vendorName already exists in the vendors collection
        if vendors_col.find_one({"vendorName": item["Breach Name"]}):
            skip_count += 1
            print(f"Skipping duplicate vendor: {item['Breach Name']}")
            continue
        
        vendors_data = map_data_to_vendors(item)
        vendor_details_data = map_data_to_vendor_details(item)
        
        vendors_col.insert_one(vendors_data)
        vendor_details_col.insert_one(vendor_details_data)

    print(f"Total skipped entries: {skip_count}")

# Main function
async def main():
    breach_data = await scrape_breach_data()
    push_to_db(breach_data)

# Run the main function inside an event loop
if __name__ == "__main__":
    asyncio.run(main())
