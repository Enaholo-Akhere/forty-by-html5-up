import axios from 'axios';

export const api = process.env.REACT_APP_API_DEV;
const baseUrl = process.env.REACT_APP_BASE_URL_DEV;

export const REGISTER_USER = async (userData) => {
  try {
    const { data } = await axios.post(`${baseUrl}/register`, userData);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const LOGIN_USER = async (userData) => {
  try {
    const { data } = await axios.post(`${baseUrl}/login`, userData);
    return { data };
  } catch (error) {
    return { error };
  }
};
