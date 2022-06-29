import { API_URL } from './consts.js';

export const getUserData = () => {
  return fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('Bearer')}`
    }
  }).then(response => response.json());
};