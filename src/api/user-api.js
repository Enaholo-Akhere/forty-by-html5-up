import axios from 'axios';
import { decryptData } from '../utils/enc-dec-user';
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

export const FORGOT_PASSWORD = async (email) => {
  const { data: userData } = await decryptData(process.env.REACT_APP_DEC_ENT);
  const { token, refreshed_token } = userData;
  try {
    const { data } = await axios.post(
      `${baseUrl}/request-reset-password`,
      email,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'x-refresh-token': refreshed_token,
        },
      }
    );
    return { data };
  } catch (error) {
    return { error };
  }
};

export const RESET_PASSWORD = async (password, passwordToken) => {
  const { data: userData } = await decryptData(process.env.REACT_APP_DEC_ENT);
  const { token, refreshed_token } = userData;
  try {
    const { data } = await axios.post(
      `${baseUrl}/set-new-password/${passwordToken}`,
      password,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'x-refresh-token': refreshed_token,
        },
      }
    );
    return { data };
  } catch (error) {
    return { error };
  }
};

export const EDIT_ACCOUNT = async (name, userId) => {
  const { data: userData } = await decryptData(process.env.REACT_APP_DEC_ENT);
  const { token, refreshed_token } = userData;
  try {
    const { data } = await axios.put(`${baseUrl}/edit/${userId}`, name, {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-refresh-token': refreshed_token,
      },
    });
    return { data };
  } catch (error) {
    return { error };
  }
};

export const LOGOUT = async () => {
  const { data: userData } = await decryptData(process.env.REACT_APP_DEC_ENT);
  const { token, refreshed_token } = userData;
  // console.log('logout data token', token, userData);

  try {
    const { data } = await axios.put(
      `${baseUrl}/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'x-refresh-token': refreshed_token,
        },
      }
    );
    console.log('data from log out', data);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const DELETE_ACCOUNT = async (userId) => {
  const { data: userData } = await decryptData(process.env.REACT_APP_DEC_ENT);
  const { token, refreshed_token } = userData;
  console.log('data fro delete', token);
  try {
    const { data } = await axios.delete(
      `${baseUrl}/delete-user-account/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'x-refresh-token': refreshed_token,
        },
      }
    );
    console.log('data from log out', data);
    return { data };
  } catch (error) {
    return { error };
  }
};
