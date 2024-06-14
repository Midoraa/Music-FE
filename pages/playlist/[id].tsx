import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPlaylistById } from '../../services/playlistService'; // Make sure to implement this service

interface Song {
    _id: string;
    title: string;
    // Add other fields as necessary
}

interface Playlist {
    _id: string;
    name: string;
    songs: Song[];
    // Add other fields as necessary
}

const PlaylistDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [playlist, setPlaylist] = useState<Playlist | null>(null);

    useEffect(() => {
        if (id) {
            const fetchPlaylist = async () => {
                const data = await getPlaylistById(id as string);
                setPlaylist(data);
            };

            fetchPlaylist();
        }
    }, [id]);

    if (!playlist) return <div>Loading...</div>;

    return (
        <div>
            <h1>{playlist.name}</h1>
            <ul>
                {playlist.songs.map(song => (
                    <li key={song._id}>{song.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlaylistDetailPage;
