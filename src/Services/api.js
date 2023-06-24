import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/data';

// Fetch data by ID
export const getDataById = (id) => {
  const url = `${BASE_URL}/${id}`;
  return axios.get(url);
};

// Filter data
export const filterData = (filters) => {
  const url = `${BASE_URL}/filter`;
  return axios.get(url, { params: filters });
};
