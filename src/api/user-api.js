import axios from 'axios';
import fileDownload from 'js-file-download';
import { decryptData } from '../utils/enc-dec-user';
import { Toaster } from '../providers/toast-provider';

export const api = process.env.REACT_APP_API_DEV;
export const apiProd = process.env.REACT_APP_API_PROD;

const baseUrl =
  process.env.NODE_ENV !== 'development'
    ? process.env.REACT_APP_API_PROD
    : process.env.REACT_APP_API_DEV;

console.log('api dev', api, 'api prod', apiProd, 'baseUrl', baseUrl);

export const REGISTER_USER = async (userData) => {
  try {
    const { data } = await axios.post(`${baseUrl}/register`, userData);
    return { data };
  } catch (error) {
    return { error };
  }
};

export const MESSAGE_ME = async (userData) => {
  try {
    const { data } = await axios.post(`${baseUrl}/send-message`, userData);
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
  } finally {
    console.log('i got here finally block');
  }
};

export const FORGOT_PASSWORD = async (email) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/request-reset-password`,
      email
    );
    return { data };
  } catch (error) {
    return { error };
  }
};

export const RESET_PASSWORD = async (password, passwordToken) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/set-new-password/${passwordToken}`,
      password
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
  const { user_id } = userData;

  try {
    const { data } = await axios.put(`${baseUrl}/logout/${user_id}`, {});

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

export const DOWNLOAD_RESUME = async () => {
  const { data: userData } = await decryptData(process.env.REACT_APP_DEC_ENT);

  try {
    if (userData) {
      const { token, refreshed_token } = userData;
      const file = await axios.get(`${baseUrl}/download-resume`, {
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${token}`,
          'x-refresh-token': refreshed_token,
        },
      });

      fileDownload(file.data, 'Resume-Enaholo-Akhere');
    } else {
      Toaster.warning('Please Login to download Resume');
    }
  } catch (error) {
    const message =
      error.response.statusText === 'Unauthorized'
        ? 'Please login to download CV'
        : error.response.statusText;
    Toaster.warning(message);
  }
};
