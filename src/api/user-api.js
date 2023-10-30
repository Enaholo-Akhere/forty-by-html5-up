import axios from 'axios';

export const api = process.env.REACT_APP_API_DEV;
const baseUrl = process.env.REACT_APP_BASE_URL_DEV;

export const REGISTER_USER = async (userData) => {
  console.log('userData', userData);
  try {
    const { data } = await axios.post(`${baseUrl}/register`, userData);
    console.log('data', data);
    return { data };
  } catch (error) {
    console.log('error', error);
    return { error };
  }
};

export const LOGIN_USER = async (userData) => {
  console.log('userData', userData);
  try {
    const { data } = await axios.post(`${baseUrl}/login`, userData);
    console.log('data', data);
    return { data };
  } catch (error) {
    console.log('error', error);
    return { error };
  }
};
