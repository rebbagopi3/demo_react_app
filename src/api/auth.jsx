import axios from "axios";

// Register API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error("Register API error:", error.response || error.message);
    return error.response?.data || { message: "Something went wrong during registration" };
  }
};

// Login API
export const loginUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/login', userData);
    return response.data;
  } catch (error) {
    console.error("Login API error:", error.response || error.message);
    return error.response?.data || { message: "Something went wrong during login" };
  }
};
