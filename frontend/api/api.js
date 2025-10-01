import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Backend server URL
})

export const analyzeCode = async (code, language) => {
    try {
        //because we r returning a json object 
        const { data } = await API. post('/analyze', { code, language });
        return data; // Expecting { timeComplexity, spaceComplexity, reasoning }
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};

// get user details
export const getUserApi = async (id) => {
  const res = await API.get(`/user/${id}`);
  return res.data;
};

// update user profile
export const updateUserApi = async (id, data) => {
  const res = await API.put(`/user/${id}`, data);
  return res.data;
};