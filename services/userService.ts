import axios from 'axios';

const API_URL = 'http://localhost:3010/users';


export const getAllUsers = async (keyword: string = '', offset: number = 0, limit: number = 10) => {
    try {
        const response = await axios.get(`${API_URL}/getAll`, {
            params: {
                keyword,
                offset,
                limit
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
};
