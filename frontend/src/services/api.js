import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Backend server URL
})

// Add an interceptor to include the auth token in all requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Note: Your ensureAuthenticated middleware expects 'authorization', not 'Authorization'
    // but HTTP headers are case-insensitive. 'Authorization' is standard.
    req.headers.Authorization = token;
  }
  return req;
});

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

// update user profile
export const updateUserApi = async (userData) => {
  try {
    const { data } = await API.put("/user/profile", userData);
    return data;
  } catch (error) {
    console.error("API Error updating user:", error.response?.data || error.message);
    throw error;
  }
};

export const getHistoryApi = async () => {
  try {
    const res = await API.get("/user/history");
    return res.data;
  } catch (error) {
    console.log("Error in getting history:",error);
    throw error;
  }
}

export const saveHistoryApi = async (history)=>{
  try {
    const { res } = await API.post("/user/history",history);
    return res;
  } catch (error) {
    console.log("Error in saving history:",error);
    throw error;
  }
}