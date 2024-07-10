import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { searchSong } from '../../services/songService';
import { addSongToPlaylist } from '../../services/playlistService';

const AddSongModal = ({ show, handleClose, playlistId }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await searchSong(searchTerm);
            setSearchResults(response.data);
            console.log(response);
        } catch (error) {
            console.error('Error searching songs:', error);
        }
    };

    const handleAddSong = async (songId) => {
        try {
            await addSongToPlaylist(playlistId, songId);
            handleClose();
        } catch (error) {
            console.error('Error adding song to playlist:', error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Song to Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Search for a song</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter song title"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Form>
                <div className="mt-3">
                    {searchResults.map((song) => (
                        <div key={song._id} onClick={() => handleAddSong(song._id)} style={{ cursor: 'pointer' }}>
                            {song.title} - {song.artist}
                        </div>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddSongModal;
