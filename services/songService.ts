import axios from 'axios';

const API_URL = 'http://localhost:3010/songs';

export const getFirstTenSongs = async () => {
    const response = await axios.get(`${API_URL}/find/firstTenSongs`);
    return response.data;
};

// Hàm gọi API lấy bài hát theo ID
export const getSongById = async ({ id }: { id: string }) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching song with id ${id}:`, error);
        throw error;
    }
};


export const getAllSongs = async (keyword: string = '', offset: number = 0, limit: number = 10) => {
    try {
        const response = await axios.get(`${API_URL}/all`, {
            params: {
                keyword,
                offset,
                limit,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching all songs:', error);
        throw error;
    }
};

export const saveSong = async (songData) => {
    const response = await axios.post(`${API_URL}/`, songData);
    return response;
};

export const searchSong = async (keyword) => {
    const response = await axios.get(`${API_URL}/search?search=${keyword}`);
    return response;
};

export const getTop10 = async () => {
    const response = await axios.get(`${API_URL}/top10Played`);
    return response;
};
