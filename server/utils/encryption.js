import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.ENCRYPTION_KEY;

// Encrypt data before saving to database
export const encryptData = (data) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    return encrypted;
}

// Decrypt data when retrieving from database
export const decryptData = (cipherText) => {
    const decrypted = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}