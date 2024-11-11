import requests
from bs4 import BeautifulSoup
import pymongo

# MongoDB details
MongoDB = "mongodb://thecloudguru:thecloudguru@18.224.5.169:27017/"
DBname = "admin"
apts_collection = "apts"
aptdetails_collection = "aptdetails"

# Static data for the `aptdetails` collection
static_data = {
    "APTRank": 1,
    "targetsectors": [5, 7, 12, 21],
    "targetcountryids": [44, 102, 11],
    "relatedCVEs": ["CVE-2018-4878", "CVE-2020-0601"],
    "imgurl": "https://i.imgur.com/fZTjL3m.png",
    "otherKnownNames": ["Cozy Bear", "The Dukes"],
    "__v": 0
}

# Function to get the group URLs
def getGroups():
    try:
        url = 'https://attack.mitre.org/groups/'
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses
    except requests.RequestException as e:
        print(f"Error fetching groups: {e}")
        return []

    soup = BeautifulSoup(response.content, 'html.parser')
    data = []
    datax = soup.find("table", {"class": "table table-bordered table-alternate mt-2"})
    
    if datax:
        for link in datax.find_all('tr')[1:]:
            data.append(link.find('td').find('a').get('href'))

    return data

# Function to extract technique IDs from table rows
def gettechniqueIDs(datax):
    data = []
    rows = datax.find_all('tr')

    if rows:
        for link in rows[1:]:
            cells = link.findAll("td")
            tid = cells[1].text.strip()  # Strip whitespace
            
            if tid:  # Only append if tid is not empty
                data.append(tid)

    return data

# Function to extract group information
def getGroupinfos(path):
    url = f"https://attack.mitre.org{path}"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses
    except requests.RequestException as e:
        print(f"Error fetching group info from {url}: {e}")
        return None

    soup = BeautifulSoup(response.content, 'html.parser')
    print(f"Calling URL {url}")
    
    datax = soup.find("h1")
    data = {
        "name": datax.text.strip(),
        "id": path.replace("/groups/", ""),
        "description": soup.find("div", {"class": "description-body"}).find("p").text
    }
    tidtable = soup.find("table", {"class": "table techniques-used background table-bordered"})
    if tidtable:
        data["techniqueIDs"] = gettechniqueIDs(tidtable)
    else:
        data["techniqueIDs"] = []

    return data

# Function to generate an aptId in the format APT001, APT002, ...
def generateAptId(index):
    return f"APT{index:03d}"

# Function to push data to MongoDB
def PushToDB(data, db):
    apts_col = db[apts_collection]
    apt_details_col = db[aptdetails_collection]
    skip_count = 0

    for index, group in enumerate(data, start=1):
        apt_id = generateAptId(index)
        # Prepare data for apts_collection
        apt_data = {
            "aptName": group["name"],
            "aptId": group["name"],
            "targetedCountriesIds": [44, 102, 11],  # Static for now
            "targetsectors": [5, 7, 12, 21],  # Static for now
            "__v": 0
        }

        # Prepare data for aptdetails_collection
        apt_details = {
            "APTName": group["name"],
            "APTDescription": group["description"],
            "attackids": group.get("techniqueIDs", []),
            "APTID": group["name"],  # Same aptId as in apts collection
            **static_data  # Add the static fields here
        }

        # Check if the aptName already exists in either collection
        if (apts_col.find_one({"aptName": group["name"]}) or apt_details_col.find_one({"APTName": group["name"]})):

            skip_count += 1
            print(f"Skipping duplicate APT: {group['name']}")
            continue

        # Insert into apts_collection
        apts_col.insert_one(apt_data)

        # Insert into aptdetails_collection
        apt_details_col.insert_one(apt_details)
        
        print(f"Inserted {group['name']} into both apts and aptdetails with aptId {group['name']}")
    
    print(f"Skipped {skip_count} duplicate entries.")

# Main script
if __name__ == "__main__":
    mongoclient = pymongo.MongoClient(MongoDB)
    db = mongoclient[DBname]
    groups = getGroups()
    data = []
    for i in groups:

        groupinfo = getGroupinfos(i)
        if groupinfo: 
            data.append(groupinfo)
           

    PushToDB(data, db)
