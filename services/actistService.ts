import axios from 'axios';
const API_URL = 'http://localhost:3010/actists';

export const getAllActist = async (page = 1, limit = 10) => {
    const response = await axios.get(API_URL, {
        params: { page, limit }
    });
    return response.data;
};

export const getArtistById = async (id) => {
    const response = await axios.get(`${API_URL}/getById/${id}`);
    return response.data;
};

