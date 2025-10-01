import axios from 'axios'

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

//signup fnxn 
export const signup = async (formData)=>{
    try {
        const { data } = await API.post("/auth/signup", formData );
        return data;
    } catch (error) {
        console.error("Signup error: ", error.response?.data || error.message);
        throw error;
    }
};

//login fnxn
export const login = async ({ email, password })=>{
    try {
        console.log("Login request for ",{ email, password });
        const { data }  = await API.post("/auth/login", { email, password });
        console.log("login data:",data);
        return data;    
    } catch (error) {
        console.error("Login error: ",error.response?.data || error.message);
        throw error;
    }
}

