import { IAdminMusicPage, IAdminMusicPageProps } from '@interfaces/pages/adminMusic';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';
import { getAllSongs } from '../../services/songService';

import Sidebar from '@components/commons/Sidebar';
import Link from 'next/link';

interface Song {
    _id: string;
    title: string;
    artist: string;
    genres: string;
    releaseDate: string;
    coverImg: string;
    audioLink: string;
    vipDownload: boolean;
    playedNumber: number;
    likedNumber: number;
}

const MusicManagePage: IAdminMusicPage<IAdminMusicPageProps> = () => {

    const [songs, setSongs] = useState<Song[]>([]);
    const [keyword, setKeyword] = useState<string>('');
    const [offset, setOffset] = useState<number>(0);
    const [limit] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);

    const fetchSongs = async (keyword: string, offset: number, limit: number) => {
        try {
            const { songs, total } = await getAllSongs(keyword, offset, limit);
            setSongs(songs);
            setTotal(total);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };

    useEffect(() => {
        fetchSongs(keyword, offset, limit);
    }, [keyword, offset, limit]);

    return (
        <div className="music-manage-container container-fluid d-flex justify-content-between">

            <Sidebar></Sidebar>


            {/* Main Content Start */}
            <div className="content w-100">

                {/* Main Content */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="artist-table">
                            <div className="rounded h-100 p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="mb-0">Song Table</h6>
                                    <div className="search-form">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={keyword}
                                            onChange={(e) => setKeyword(e.target.value)}
                                            placeholder="Search songs..."
                                        />
                                    </div>
                                    <div className="btn btn-primary btn-sm">
                                        <Link href="/admin/add-song">Add Song</Link>
                                    </div>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr className="text-center">
                                        <th scope="col">#</th>
                                        <th scope="col">Tiêu đề</th>
                                        <th scope="col">Nghệ sĩ</th>
                                        <th scope="col">Avatar</th>
                                        <th scope="col">Link Audio</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {songs && songs.length > 0 ? (
                                        songs.map((song, index) => (
                                            <tr key={song._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{song.title}</td>
                                                <td>{song.artist}</td>
                                                <td><img className="image-manage-small" src={song.coverImg}
                                                         alt={song.title} /></td>
                                                <td>{song.audioLink}</td>
                                                <td className="button">
                                                    <button className="btn btn-success btn-sm me-2">Edit</button>
                                                    <button className="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">No songs found.</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                                <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    {Array.from(Array(Math.ceil(total / limit)).keys()).map((page) => (
                                        <Pagination.Item key={page + 1} active={page === offset / limit}
                                                         onClick={() => setOffset(page * limit)}>
                                            {page + 1}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicManagePage;
