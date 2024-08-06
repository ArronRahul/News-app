// utils/fetchData.js
import { userDetails } from '../api/api'; 

export const fetchData = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const response = await userDetails(token);
      return { data: response, error: null };
    } catch (error) {
      console.error('Error fetching user details:', error);
      return { data: null, error: 'Failed to fetch user details' };
    }
  } else {
    return { data: null, error: 'No token found' };
  }
};
