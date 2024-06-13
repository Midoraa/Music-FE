import axios from 'axios';

const API_URL = 'http://localhost:3010/songs';

export const getFirstTenSongs = async () => {
    const response = await axios.get(`${API_URL}/find/firstTenSongs`);
    return response.data;
};

// Hàm gọi API lấy bài hát theo ID
export const getSongById = async ({id}:{id:string}) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching song with id ${id}:`, error);
        throw error;
    }
};
