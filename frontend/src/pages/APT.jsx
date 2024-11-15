
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function APT() {
  const [gridData, setGridData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [originalGridData, setOriginalGridData] = useState([]);
  const [threatActorName, setThreatActorName] = useState('');
  const [targetCountry, setTargetCountry] = useState("0");
  const [targetSector, setTargetSector] = useState("0");
  const [aptOfTheMonthImage, setAptOfTheMonthImage] = useState('');
  const [aptOfTheMonthId, setAptOfTheMonthId] = useState('');
  const allSectors = [
    { "sectorId": 0, "sectorName": "All" },
    { "sectorId": 1, "sectorName": "Agriculture" },
    { "sectorId": 2, "sectorName": "Aerospace" },
    { "sectorId": 3, "sectorName": "Banking" },
    { "sectorId": 4, "sectorName": "Chemicals" },
    { "sectorId": 5, "sectorName": "Construction" },
    { "sectorId": 6, "sectorName": "Consumer Goods" },
    { "sectorId": 7, "sectorName": "Defense" },
    { "sectorId": 8, "sectorName": "Education" },
    { "sectorId": 9, "sectorName": "Energy" },
    { "sectorId": 10, "sectorName": "Entertainment" },
    { "sectorId": 11, "sectorName": "Financial Services" },
    { "sectorId": 12, "sectorName": "Food & Beverage" },
    { "sectorId": 13, "sectorName": "Government" },
    { "sectorId": 14, "sectorName": "Healthcare" },
    { "sectorId": 15, "sectorName": "Hospitality" },
    { "sectorId": 16, "sectorName": "Information Technology" },
    { "sectorId": 17, "sectorName": "Insurance" },
    { "sectorId": 18, "sectorName": "Legal" },
    { "sectorId": 19, "sectorName": "Logistics" },
    { "sectorId": 20, "sectorName": "Manufacturing" },
    { "sectorId": 21, "sectorName": "Marine" },
    { "sectorId": 22, "sectorName": "Media" },
    { "sectorId": 23, "sectorName": "Mining" },
    { "sectorId": 24, "sectorName": "Non-Profit" },
    { "sectorId": 25, "sectorName": "Oil & Gas" },
    { "sectorId": 26, "sectorName": "Pharmaceuticals" },
    { "sectorId": 27, "sectorName": "Professional Services" },
    { "sectorId": 28, "sectorName": "Public Sector" },
    { "sectorId": 29, "sectorName": "Real Estate" },
    { "sectorId": 30, "sectorName": "Retail" },
    { "sectorId": 31, "sectorName": "Shipping" },
    { "sectorId": 32, "sectorName": "Telecommunications" },
    { "sectorId": 33, "sectorName": "Textiles" },
    { "sectorId": 34, "sectorName": "Tourism" },
    { "sectorId": 35, "sectorName": "Transportation" },
    { "sectorId": 36, "sectorName": "Utilities" },
    { "sectorId": 37, "sectorName": "Waste Management" },
    { "sectorId": 38, "sectorName": "Water" },
    { "sectorId": 39, "sectorName": "Automotive" },
    { "sectorId": 40, "sectorName": "Aviation" },
    { "sectorId": 41, "sectorName": "Biotechnology" },
    { "sectorId": 42, "sectorName": "Cement" },
    { "sectorId": 43, "sectorName": "Commercial Banking" },
    { "sectorId": 44, "sectorName": "Cybersecurity" },
    { "sectorId": 45, "sectorName": "Electronics" },
    { "sectorId": 46, "sectorName": "Forestry" },
    { "sectorId": 47, "sectorName": "Gambling" },
    { "sectorId": 48, "sectorName": "Glass" },
    { "sectorId": 49, "sectorName": "Insurance Brokers" },
    { "sectorId": 50, "sectorName": "Investment Banking" },
    { "sectorId": 51, "sectorName": "Metals" },
    { "sectorId": 52, "sectorName": "Pension Funds" },
    { "sectorId": 53, "sectorName": "Petroleum" },
    { "sectorId": 54, "sectorName": "Railways" },
    { "sectorId": 55, "sectorName": "Recycling" },
    { "sectorId": 56, "sectorName": "Semiconductors" },
    { "sectorId": 57, "sectorName": "Software" },
    { "sectorId": 58, "sectorName": "Venture Capital" }
  ]
  const allCountries = [
    { "countryId": 0, "countryName": "All" },
    { "countryId": 1, "countryName": "Afghanistan" },
    { "countryId": 2, "countryName": "Albania" },
    { "countryId": 3, "countryName": "Algeria" },
    { "countryId": 4, "countryName": "Andorra" },
    { "countryId": 5, "countryName": "Angola" },
    { "countryId": 6, "countryName": "Antigua and Barbuda" },
    { "countryId": 7, "countryName": "Argentina" },
    { "countryId": 8, "countryName": "Armenia" },
    { "countryId": 9, "countryName": "Australia" },
    { "countryId": 10, "countryName": "Austria" },
    { "countryId": 11, "countryName": "Azerbaijan" },
    { "countryId": 12, "countryName": "Bahamas" },
    { "countryId": 13, "countryName": "Bahrain" },
    { "countryId": 14, "countryName": "Bangladesh" },
    { "countryId": 15, "countryName": "Barbados" },
    { "countryId": 16, "countryName": "Belarus" },
    { "countryId": 17, "countryName": "Belgium" },
    { "countryId": 18, "countryName": "Belize" },
    { "countryId": 19, "countryName": "Benin" },
    { "countryId": 20, "countryName": "Bhutan" },
    { "countryId": 21, "countryName": "Bolivia" },
    { "countryId": 22, "countryName": "Bosnia and Herzegovina" },
    { "countryId": 23, "countryName": "Botswana" },
    { "countryId": 24, "countryName": "Brazil" },
    { "countryId": 25, "countryName": "Brunei" },
    { "countryId": 26, "countryName": "Bulgaria" },
    { "countryId": 27, "countryName": "Burkina Faso" },
    { "countryId": 28, "countryName": "Burundi" },
    { "countryId": 29, "countryName": "Cabo Verde" },
    { "countryId": 30, "countryName": "Cambodia" },
    { "countryId": 31, "countryName": "Cameroon" },
    { "countryId": 32, "countryName": "Canada" },
    { "countryId": 33, "countryName": "Central African Republic" },
    { "countryId": 34, "countryName": "Chad" },
    { "countryId": 35, "countryName": "Chile" },
    { "countryId": 36, "countryName": "China" },
    { "countryId": 37, "countryName": "Colombia" },
    { "countryId": 38, "countryName": "Comoros" },
    { "countryId": 39, "countryName": "Congo, Democratic Republic of the" },
    { "countryId": 40, "countryName": "Congo, Republic of the" },
    { "countryId": 41, "countryName": "Costa Rica" },
    { "countryId": 42, "countryName": "Croatia" },
    { "countryId": 43, "countryName": "Cuba" },
    { "countryId": 44, "countryName": "Cyprus" },
    { "countryId": 45, "countryName": "Czech Republic" },
    { "countryId": 46, "countryName": "Denmark" },
    { "countryId": 47, "countryName": "Djibouti" },
    { "countryId": 48, "countryName": "Dominica" },
    { "countryId": 49, "countryName": "Dominican Republic" },
    { "countryId": 50, "countryName": "Ecuador" },
    { "countryId": 51, "countryName": "Egypt" },
    { "countryId": 52, "countryName": "El Salvador" },
    { "countryId": 53, "countryName": "Equatorial Guinea" },
    { "countryId": 54, "countryName": "Eritrea" },
    { "countryId": 55, "countryName": "Estonia" },
    { "countryId": 56, "countryName": "Eswatini" },
    { "countryId": 57, "countryName": "Ethiopia" },
    { "countryId": 58, "countryName": "Fiji" },
    { "countryId": 59, "countryName": "Finland" },
    { "countryId": 60, "countryName": "France" },
    { "countryId": 61, "countryName": "Gabon" },
    { "countryId": 62, "countryName": "Gambia" },
    { "countryId": 63, "countryName": "Georgia" },
    { "countryId": 64, "countryName": "Germany" },
    { "countryId": 65, "countryName": "Ghana" },
    { "countryId": 66, "countryName": "Greece" },
    { "countryId": 67, "countryName": "Grenada" },
    { "countryId": 68, "countryName": "Guatemala" },
    { "countryId": 69, "countryName": "Guinea" },
    { "countryId": 70, "countryName": "Guinea-Bissau" },
    { "countryId": 71, "countryName": "Guyana" },
    { "countryId": 72, "countryName": "Haiti" },
    { "countryId": 73, "countryName": "Honduras" },
    { "countryId": 74, "countryName": "Hungary" },
    { "countryId": 75, "countryName": "Iceland" },
    { "countryId": 76, "countryName": "India" },
    { "countryId": 77, "countryName": "Indonesia" },
    { "countryId": 78, "countryName": "Iran" },
    { "countryId": 79, "countryName": "Iraq" },
    { "countryId": 80, "countryName": "Ireland" },
    { "countryId": 81, "countryName": "Israel" },
    { "countryId": 82, "countryName": "Italy" },
    { "countryId": 83, "countryName": "Jamaica" },
    { "countryId": 84, "countryName": "Japan" },
    { "countryId": 85, "countryName": "Jordan" },
    { "countryId": 86, "countryName": "Kazakhstan" },
    { "countryId": 87, "countryName": "Kenya" },
    { "countryId": 88, "countryName": "Kiribati" },
    { "countryId": 89, "countryName": "Korea, North" },
    { "countryId": 90, "countryName": "Korea, South" },
    { "countryId": 91, "countryName": "Kuwait" },
    { "countryId": 92, "countryName": "Kyrgyzstan" },
    { "countryId": 93, "countryName": "Laos" },
    { "countryId": 94, "countryName": "Latvia" },
    { "countryId": 95, "countryName": "Lebanon" },
    { "countryId": 96, "countryName": "Lesotho" },
    { "countryId": 97, "countryName": "Liberia" },
    { "countryId": 98, "countryName": "Libya" },
    { "countryId": 99, "countryName": "Liechtenstein" },
    { "countryId": 100, "countryName": "Lithuania" },
    { "countryId": 101, "countryName": "Luxembourg" },
    { "countryId": 102, "countryName": "Madagascar" },
    { "countryId": 103, "countryName": "Malawi" },
    { "countryId": 104, "countryName": "Malaysia" },
    { "countryId": 105, "countryName": "Maldives" },
    { "countryId": 106, "countryName": "Mali" },
    { "countryId": 107, "countryName": "Malta" },
    { "countryId": 108, "countryName": "Marshall Islands" },
    { "countryId": 109, "countryName": "Mauritania" },
    { "countryId": 110, "countryName": "Mauritius" },
    { "countryId": 111, "countryName": "Mexico" },
    { "countryId": 112, "countryName": "Micronesia" },
    { "countryId": 113, "countryName": "Moldova" },
    { "countryId": 114, "countryName": "Monaco" },
    { "countryId": 115, "countryName": "Mongolia" },
    { "countryId": 116, "countryName": "Montenegro" },
    { "countryId": 117, "countryName": "Morocco" },
    { "countryId": 118, "countryName": "Mozambique" },
    { "countryId": 119, "countryName": "Myanmar" },
    { "countryId": 120, "countryName": "Namibia" },
    { "countryId": 121, "countryName": "Nauru" },
    { "countryId": 122, "countryName": "Nepal" },
    { "countryId": 123, "countryName": "Netherlands" },
    { "countryId": 124, "countryName": "New Zealand" },
    { "countryId": 125, "countryName": "Nicaragua" },
    { "countryId": 126, "countryName": "Niger" },
    { "countryId": 127, "countryName": "Nigeria" },
    { "countryId": 128, "countryName": "North Macedonia" },
    { "countryId": 129, "countryName": "Norway" },
    { "countryId": 130, "countryName": "Oman" },
    { "countryId": 131, "countryName": "Pakistan" },
    { "countryId": 132, "countryName": "Palau" },
    { "countryId": 133, "countryName": "Panama" },
    { "countryId": 134, "countryName": "Papua New Guinea" },
    { "countryId": 135, "countryName": "Paraguay" },
    { "countryId": 136, "countryName": "Peru" },
    { "countryId": 137, "countryName": "Philippines" },
    { "countryId": 138, "countryName": "Poland" },
    { "countryId": 139, "countryName": "Portugal" },
    { "countryId": 140, "countryName": "Qatar" },
    { "countryId": 141, "countryName": "Romania" },
    { "countryId": 142, "countryName": "Russia" },
    { "countryId": 143, "countryName": "Rwanda" },
    { "countryId": 144, "countryName": "Saint Kitts and Nevis" },
    { "countryId": 145, "countryName": "Saint Lucia" },
    { "countryId": 146, "countryName": "Saint Vincent and the Grenadines" },
    { "countryId": 147, "countryName": "Samoa" },
    { "countryId": 148, "countryName": "San Marino" },
    { "countryId": 149, "countryName": "Sao Tome and Principe" },
    { "countryId": 150, "countryName": "Saudi Arabia" },
    { "countryId": 151, "countryName": "Senegal" },
    { "countryId": 152, "countryName": "Serbia" },
    { "countryId": 153, "countryName": "Seychelles" },
    { "countryId": 154, "countryName": "Sierra Leone" },
    { "countryId": 155, "countryName": "Singapore" },
    { "countryId": 156, "countryName": "Slovakia" },
    { "countryId": 157, "countryName": "Slovenia" },
    { "countryId": 158, "countryName": "Solomon Islands" },
    { "countryId": 159, "countryName": "Somalia" },
    { "countryId": 160, "countryName": "South Africa" },
    { "countryId": 161, "countryName": "South Sudan" },
    { "countryId": 162, "countryName": "Spain" },
    { "countryId": 163, "countryName": "Sri Lanka" },
    { "countryId": 164, "countryName": "Sudan" },
    { "countryId": 165, "countryName": "Suriname" },
    { "countryId": 166, "countryName": "Sweden" },
    { "countryId": 167, "countryName": "Switzerland" },
    { "countryId": 168, "countryName": "Syria" },
    { "countryId": 169, "countryName": "Taiwan" },
    { "countryId": 170, "countryName": "Tajikistan" },
    { "countryId": 171, "countryName": "Tanzania" }
  ]
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://18.224.5.169:5000/getapt');
        setGridData(response.data);
        setOriginalGridData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    async function fetchAptImageUrl() {
      try {
        const response = await axios.get('http://18.224.5.169:5000/getparams/APT_OF_THE_MONTH_IMAGE');
        setAptOfTheMonthImage(response.data.paramValue);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    async function fetchAptId() {
      try {
        const response = await axios.get('http://18.224.5.169:5000/getparams/APT_OF_THE_MONTH');
        setAptOfTheMonthId(response.data.paramValue);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    fetchAptImageUrl();
    fetchAptId();
  }, []);

  const handleSearch = () => {
    setIsSearched(true);
    const filteredData = originalGridData.filter((actor) => {
      const nameMatch = threatActorName
        ? actor.aptName.toLowerCase().includes(threatActorName.toLowerCase())
        : true;
      const countryMatch =
        targetCountry !== "0" ? actor.targetedCountriesIds.includes(Number(targetCountry)) : true;
      const sectorMatch =
        targetSector !== "0" ? actor.sectorIds.includes(Number(targetSector)) : true;

      return nameMatch && countryMatch && sectorMatch;
    });
    setGridData(filteredData);
  };

  return (
    <>
      <div className="relative flex-col lg:justify-between lg:px-20 lg:min-h-96 lg:flex-row threat-actor-card bg-gray-100">
        <div className="md:content w-1/2 flex-col">
          <h2 className="title text-center lg:text-left">THREAT ACTOR INTELLIGENCE</h2>
          <h3 className="subtitle text-center lg:text-left">KNOW YOUR ENEMY</h3>
          <p className="description text-center lg:text-left mb-10 lg:mb-0">
            Identify active threat actors targeting your industry or region right now. Analyze their Tactics, Techniques,
            and Procedures (TTPs) to predict their next moves. Focus your defenses on the most pressing risks. Take
            control of your cybersecurity and stay one step ahead of attackers.
          </p>
        </div>
        <div className='card-cta-section flex'>
          <Link to={`/apt/details/${aptOfTheMonthId}`} className="cta-link">
            <div className="card">
              {aptOfTheMonthImage !== '' && <img alt='apt' className='card-image' src={aptOfTheMonthImage} />}
              {aptOfTheMonthImage === '' &&
                <div>
                  <div className='flex justify-center items-center min-h-full' role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }
            </div>
          </Link>
        </div>
      </div>
      <div className="apt-filter lg:flex-row flex-col flex justify-around items-center">
        <div className="filter-item mb-5">
          <label htmlFor="threatActorName">
            Filter By Name:
          </label>
          <input
            type="text"
            id="threatActorName"
            value={threatActorName}
            onChange={(e) => setThreatActorName(e.target.value)}
            placeholder="Enter threat actor name"
          />
        </div>

        <div className="filter-item mb-5">
          <label htmlFor="targetCountry">Target Country:</label>
          <select
            id="targetCountry"
            value={targetCountry}
            onChange={(e) => setTargetCountry(e.target.value)}
          >
            {allCountries.map((country) => {
              return (
                <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
              )
            })}
          </select>
        </div>

        <div className="filter-item mb-5">
          <label htmlFor="targetSectors">Target Sectors:</label>
          <select
            id="targetSector"
            value={targetSector}
            onChange={(e) => setTargetSector(e.target.value)}
          >
            {allSectors.map((sector) => {
              return (
                <option key={sector.sectorId} value={sector.sectorId}>{sector.sectorName}</option>
              )
            })}
          </select>
        </div>

        <button onClick={handleSearch} className="search-button">
          <span>Search</span>
        </button>
      </div>
      <h1 className='text-2xl underline font-semibold bg-gray-100 py-4 px-5 text-center'>Lists of groups</h1>
      <div className='bg-gray-100 flex min-h-96 flex-col p-5 items-center'>
        {gridData.length > 0 &&
          <table className="min-w-full table-wrapper divide-y divide-gray-300">
            <tbody className="divide-y divide-gray-200">
              {gridData.length > 0 && (() => {
                const rows = [];
                for (let index = 0; index < gridData.length; index += 3) {
                  rows.push(
                    <tr key={gridData[index].aptId}>
                      {gridData[index] && (
                        <td className="whitespace-nowrap text-center py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          <Link className='font-semibold link-text' to={`/apt/details/${gridData[index].aptId}`}>{gridData[index].aptName}</Link>
                        </td>
                      )}
                      {gridData[index + 1] && (
                        <td className="whitespace-nowrap text-center py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          <Link className='font-semibold link-text' to={`/apt/details/${gridData[index + 1].aptId}`}>{gridData[index + 1].aptName}</Link>
                        </td>
                      )}
                      {gridData[index + 2] && (
                        <td className="whitespace-nowrap text-center py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          <Link className='font-semibold link-text' to={`/apt/details/${gridData[index + 2].aptId}`}>{gridData[index + 2].aptName}</Link>
                        </td>
                      )}
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody>

          </table>}
        {!gridData.length > 0 && !isSearched &&
          <div className='flex items-center' role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        }
        {!gridData.length > 0 && isSearched &&
          <tr>
            <td />
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">No records found</td>
            <td />
          </tr>}
      </div>
    </>
  )
}