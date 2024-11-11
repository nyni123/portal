import React, { useEffect, useState } from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import axios from 'axios'
function Home() {
  const [gridData, setGridData] = useState([]);
  const [gridDataCount, setGridDataCount] = useState([]);
  const [aptsCount, setAptsCount] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try{
        const url='http://18.224.5.169:5000/getvendors/vendorlatest'
        const response = await axios.get(url);
        setGridData(response.data);
      }
      catch (error){
        console.log(error);
      }
    }

    const getVendorCount = async () => {

      try{
        const url='http://18.224.5.169:5000/getvendors/vendorlatestCount'
        const response = await axios.get(url);
        setGridDataCount(response.data);
      }
      catch (error){
        console.log(error);
      }
    }

    async function aptsCount() {
      try {
        const response = await axios.get(`http://18.224.5.169:5000/getapt/aptscount`);
        setAptsCount(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
    getVendorCount();
    aptsCount();
  },[])

  return (
    <div>
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Hero />
      </div>
      <div>
        <div className='w-full -z-50 pattern-bg h-full'/>
        <Cards />
      </div>
      <Analytics gridData = {gridData} gridDataCount={gridDataCount} aptsCount={aptsCount} />
      <div className='relative'>
        <div className='w-full -z-50 pattern-bg h-full'/>
      </div>
    </div>
  );
}

export default Home;
