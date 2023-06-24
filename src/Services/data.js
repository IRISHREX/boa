import { getDataById, filterData } from './api';

// Get data by ID
export const fetchDataById = (id) => {
  return getDataById(id)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data by ID:', error);
      throw error;
    });
};

// Filter data
export const filterDataByFilters = (filters) => {
  return filterData(filters)
    .then(response => response.data)
    .catch(error => {
      console.error('Error filtering data:', error);
      throw error;
    });
};
