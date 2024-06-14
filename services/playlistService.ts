import axios from 'axios';
const API_URL = 'http://localhost:3010/playlists';
export const getPlaylistById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
