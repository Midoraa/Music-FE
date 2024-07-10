import axios from 'axios';
const API_URL = 'http://localhost:3010/playlists';
export const getPlaylistById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const getAllPlaylist = async (keyword: string = '', offset: number = 0, limit: number = 10) => {
    try {
        const response = await axios.get(`${API_URL}/getAll`, {
            params: {
                keyword,
                offset,
                limit,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching all playlists:', error);
        throw error;
    }
};


export const savePlaylist = async (playlistData) => {
    const response = await axios.post(`${API_URL}/`, playlistData);
    return response;
};

export const addSongToPlaylist = async (playlistId, songId) => {
    const response = await axios.post(`${API_URL}/${playlistId}/songs`, { songId });
    return response;
};

export const getSongByPlaylistId = async (playlistId) => {
    const response = await axios.get(`${API_URL}/getSongsById/?playlistId=${playlistId}`);
    return response;
};

export const getPlaylistsByUserId = async (userId) => {
    const response = await axios.get(`${API_URL}/getPlaylistsByUserId/${userId}`);
    return response;
};


export const getSongsByPlaylistId = async (playlistId) => {
    const response = await axios.get(`${API_URL}/getSongsById?playlistId=${playlistId}`);
    return response.data;
};
