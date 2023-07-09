import axios from "axios";

const BASE_URL = "http://localhost:4000/user";

export const logInUser = async (name, email, username, phone, password, address, age, role) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            name,
            email,
            username,
            phone,
            password,
            address,
            age,
            role
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${userId}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (updatedData, userId) => {
    try {
        const response = await axios.put(`${BASE_URL}/${userId}`, updatedData);
        console.log(updatedData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
