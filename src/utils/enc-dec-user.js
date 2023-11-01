import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_SECRETE_KEY;

export const encryptData = async (name, data) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();
    localStorage.setItem(name, encrypted);
  } catch (error) {
    console.log('error from encode', error.message);
  }
};

export const decryptData = async (name) => {
  try {
    const encrypted = await localStorage.getItem(name);
    const decrypted = await CryptoJS.AES.decrypt(
      encrypted,
      SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  } catch (error) {
    console.log('error from dec', error.message);
    return error;
  }
};

export const logoutEnc = (name) => {
  localStorage.removeItem(name);
};
