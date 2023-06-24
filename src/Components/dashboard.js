import React, { useEffect, useState } from 'react';
import { fetchDataById, filterDataByFilters } from '../Services/data';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data by ID
    fetchDataById(1)
      .then(data => {
        setData(data);
      });

    // Filter data
    const filters = {
      endYear: 2018
    //   topics: ['topic1', 'topic2'],
    //   sector: 'sector1',
    //   region: 'region1',
    //   pest: 'pest1',
    //   source: 'source1',
    //   swot: 'swot1',
    //   country: 'country1',
    //   city: 'city1'
    };

    filterDataByFilters(filters)
      .then(filteredData => {
        console.log('Filtered data:', filteredData);
      });
  }, []);

  // Render your dashboard components using the fetched data
  return (
    <div>
      data is loading..
    </div>
  );
};

export default Dashboard;
