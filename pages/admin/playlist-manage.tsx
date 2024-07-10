import Pagination from 'react-bootstrap/Pagination';
import { IAdminPlaylistPage, IAdminPlaylistPageProps } from '@interfaces/pages/adminPlaylist';
import { useEffect, useState } from 'react';

import Sidebar from '@components/commons/Sidebar';
import Link from 'next/link';
import { getAllPlaylist, getSongByPlaylistId, savePlaylist } from '../../services/playlistService';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import AddSongModal from '@components/layouts/AddSongModal';


interface Song{
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
export interface IUser {
    _id: string;
    name: string;
    username: string;
    email: string;
}
interface Playlist{
    _id: string;
    name: string;
    user: IUser;
    songs: Song[];
    image: string;
    genres: string;
    region: string;
}
const PlaylistManagePage: IAdminPlaylistPage<IAdminPlaylistPageProps> = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [show, setShow] = useState(false);

    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [showSongsModal, setShowSongsModal] = useState(false)

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [genres, setGenres] = useState('');
    const [region, setRegion] = useState('');

    const [showAddSongModal, setShowAddSongModal] = useState(false);

    const handleShowAddSongModal = () => setShowAddSongModal(true);
    const handleCloseAddSongModal = () => setShowAddSongModal(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fetchPlaylists = async (keyword: string, offset: number, limit: number) => {
        try {
            const { playlists, total } = await getAllPlaylist(keyword, offset, limit);
            setPlaylists(playlists);
            setTotal(total);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };

    useEffect(() => {
        fetchPlaylists(keyword, offset, limit);
    }, [keyword, offset, limit]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const curUser = JSON.parse(localStorage.getItem('curUser'));
        const user = curUser ? curUser._id : null;
        const playlistData = {
            name,
            genres,
            image,
            region,
            user
        };
        console.log('Genres:', genres); // Log giá trị genres
        console.log('Region:', region); // Log giá trị region
        try {
            const response = await savePlaylist(playlistData);
            fetchPlaylists();
            handleClose();
            if (response.status === 201) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Add successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Add fail",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Add fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handlePlaylistClick = async (playlistId) => {
        setShowSongsModal(true);
        try {
            const response = await getSongByPlaylistId(playlistId);
            setSongs(response.data);
            setSelectedPlaylist(playlistId);
            setShowSongsModal(true);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };

    const handleCloseSongsModal = () => {
        setShowSongsModal(false);
        setSelectedPlaylist(null); // Reset selected playlist khi đóng modal
        setSongs([]); // Reset danh sách bài hát khi đóng modal
    };

    return (
        <div className="playlist-manage-container container-fluid d-flex justify-content-between">

            <Sidebar></Sidebar>


            {/* Main Content Start */}
            <div className="content w-100">

                {/*them playlist modal*/}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} className="validate-form mb-4">
                            <div className="">
                                <div className="form-floating" data-validate="Enter Title">
                                    <input
                                        className="form-control mb-2"
                                        id="floatingInput"
                                        type="text"
                                        name="title"
                                        placeholder="Tên Playlist"
                                        autoComplete="off"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Tên Playlist</label>
                                </div>
                            </div>
                            <div className="form-floating" data-validate="Enter genres">
                                <select
                                    className="form-control mb-2"
                                    id="floatingGe"
                                    name="genres"
                                    value={genres}
                                    onChange={(e) => setGenres(e.target.value)}
                                >
                                    <option value="">Chọn thể loại</option>
                                    {getGenresOptions().map((genre) => (
                                        <option key={genre.value} value={genre.value}>
                                            {genre.label}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="floatingGe">Thể loại</label>
                            </div>
                            <div className="form-floating" data-validate="Enter username">
                                <input
                                    className="form-control mb-2"
                                    id="floatingCo"
                                    type="text"
                                    name="coverImg"
                                    placeholder="Link hình ảnh hiển thị"
                                    autoComplete="off"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                                <label htmlFor="floatingCo">Link hình ảnh hiển thị</label>
                            </div>
                            <div className="form-floating" data-validate="Enter username">
                                <select
                                    className="form-control mb-2"
                                    id="floatingCo"
                                    name="region"
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                >
                                    <option value="">Chọn vùng</option>
                                    <option value="Việt Nam">Việt Nam</option>
                                    <option value="Hàn Quốc">Hàn Quốc</option>
                                    <option value="USUK">USUK</option>
                                </select>
                                <label htmlFor="floatingCo">Chọn vùng</label>
                            </div>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/*show songs modal*/}
                <Modal show={showSongsModal} onHide={handleCloseSongsModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{playlists.find(playlist => playlist._id === selectedPlaylist)?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {songs.map((song) => (
                                <li key={song._id}>{song.title} - {song.artist}</li>
                            ))}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSongsModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Main Content */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="artist-table">
                            <div className="rounded h-100 p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="mb-0">Playlist Table</h6>
                                    <div className="search-form">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={keyword}
                                            onChange={(e) => setKeyword(e.target.value)}
                                            placeholder="Search playlists..."
                                        />
                                    </div>
                                    <div className="">
                                        <Button variant="success" onClick={handleShow}>
                                            Thêm mới playlist
                                        </Button>
                                    </div>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tiêu đề</th>
                                        <th scope="col">CoverImg</th>
                                        <th scope="col">Thể loại</th>
                                        <th scope="col">Vùng</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {playlists && playlists.length > 0 ? (
                                        playlists.map((playlist, index) => (
                                            <tr key={playlist._id} onClick={() => handlePlaylistClick(playlist._id)} style={{ cursor: 'pointer' }}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{playlist.name}</td>
                                                <td><img className="image-manage-small" src={playlist.image}
                                                         alt={playlist.name} /></td>
                                                <td>{playlist.genres}</td>
                                                <td>{playlist.region}</td>
                                                <td className="button">
                                                    <button className="btn btn-success btn-sm me-2">Sửa</button>
                                                    <button className="btn btn-danger btn-sm  me-2">Xóa</button>
                                                    <Button variant="primary" onClick={handleShowAddSongModal}>
                                                        Thêm bài hát
                                                    </Button>
                                                    <AddSongModal
                                                        show={showAddSongModal}
                                                        handleClose={handleCloseAddSongModal}
                                                        playlistId={playlist._id}
                                                    />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">No playlists found.</td>
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

export default PlaylistManagePage;


const getGenresOptions = () => {
    return [
        { value: 'Pop', label: 'Pop' },
        { value: 'Rock', label: 'Rock' },
        { value: 'Jazz', label: 'Jazz' },
        { value: 'Indie', label: 'Indie' },
        { value: 'R&B/Rap', label: 'R&B/Rap' },
        { value: 'Nhạc Trịnh', label: 'Nhạc Trịnh' },
        { value: 'Tình Yêu', label: 'Tình Yêu' },
        { value: 'Chill Out', label: 'Chill Out' },
    ];
};
