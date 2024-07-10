import { IPlayListPageProps, IPlayListPage } from '@interfaces/pages/playlist';
import Rank from '@components/layouts/sidebars/Rank';
import { images } from '@utils/constants';
import { useEffect, useState } from 'react';
import { getPlaylistsByUserId } from '../services/playlistService';
import Link from 'next/link';

const PlayList: IPlayListPage<IPlayListPageProps> = () => {

    const [playlists, setPlaylists] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const currUser = JSON.parse(localStorage.getItem('curUser'));
            if (currUser && currUser._id) {
                setUserId(currUser._id);
            }
            try {
                const res = await getPlaylistsByUserId(userId);
                setPlaylists(res.data);
                console.log(res);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, [userId]);

    return (
        <div className="playlist-container">
            <div className="row playlist-contents container mt-3">
                <div className="col-lg-9 left-contents">
                    <div className="list-playlist">
                        <div className="playlist mb-3">
                            <h3 className="title-box-key text-uppercase">Playlist của bạn</h3>
                            <ul className="list-unstyled row row-cols-5">
                                {playlists.map((playlist) => (
                                    <li className="col" key={playlist._id}>

                                        <Link href={`/playlist/${playlist._id}`} passHref>
                                            <a>
                                                <div className="box-left-album">
                                                    <img
                                                        src={playlist.image || images.DEFAULT_AVATAR}
                                                        alt={playlist.name}
                                                        className="w-100 album-image"
                                                    />
                                                    <div className="play-icon">
                                                        <img
                                                            src={images.ICON_PLAY}
                                                            alt="Play Icon"
                                                            className="w-100 play-icon-image"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="info_album">
                                                    <h3 className="h3seo">
                            <span className="name_song" title={playlist.name}>
                              {playlist.name}
                            </span>
                                                    </h3>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="playlist mb-3">
                            <h3 className="title-box-key text-uppercase">Khám phá</h3>
                            <ul className="list-unstyled row row-cols-5">
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Ballad Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_2} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Acoustic Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_3} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Indie Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_4} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Remix Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_5} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">The New VietNam</a></h3>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <ul className="list-unstyled row row-cols-5">
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Ballad Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_2} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Acoustic Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_3} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Indie Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_4} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">Remix Việt</a></h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="col">
                                    <a href="">
                                        <div className="box-left-album">
                                            <img src={images.AVATAR_5} alt="Logo" className="w-100 album-image" />
                                            <div className="play-icon">
                                                <img src={images.ICON_PLAY} alt="Play Icon"
                                                     className="w-100 play-icon-image" />
                                            </div>
                                        </div>
                                        <div className="info_album">
                                            <h3 className="h3seo"><a
                                                href=""
                                                className="name_song" title="Nhạc Việt Live">The New VietNam</a></h3>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 right-contents">
                    <Rank></Rank>
                </div>
            </div>
        </div>
    );
};

export default PlayList;
