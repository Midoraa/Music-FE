import { IBxhPageProps, IBxhPage } from '@interfaces/pages/bxh';
import { images } from '@utils/constants';
import Topic from '@components/layouts/sidebars/Topic';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useState } from 'react';
import { getTop10 } from '../services/songService';

const Bxh: IBxhPage<IBxhPageProps> = () => {
    const [topSongs, setTopSongs] = useState<any[]>([]);

    useEffect(() => {
        // Fetch top 10 songs sorted by playedNumber
        const fetchTopSongs = async () => {
            try {
                const response = await getTop10();
                if (response.status === 500) {
                    throw new Error('Failed to fetch top songs');
                }
                const data = await response.data;
                console.log(data);
                setTopSongs(data);
            } catch (error) {
                console.error('Error fetching top songs:', error);
            }
        };

        fetchTopSongs();
    }, []);
    return (
        <div className="pages__bxh container">
            <div className="row pages__bxh__contents">
                <div className="col-lg-9 left-contents">
                    <div className="contents">
                        <div className="nhacviet mt-3">
                            <a className="title-box-key text-uppercase" href="/">Bảng xếp hạng trending music</a>
                            <Tabs
                                defaultActiveKey="vn"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="vn" title="Việt Nam">
                                    <div className="list-media">
                                        {topSongs.map((song, index) => (
                                            <div className="media" key={song._id}>
                                                <div className="media-left">
                                                    <div className="song-prefix mar-r-15">
                                                        <span
                                                            className="number is-top-1 is-center mar-r-5">{index + 1}</span>
                                                        <div className="sort"> -</div>
                                                    </div>
                                                    <div className="song-thumb">
                                                        <img src={song.coverImg || images.AVATAR_4} alt="Logo"
                                                             className="w-100 album-image is-50x50" />
                                                    </div>
                                                    <div className="card-info">
                                                        <a className="title item-title" href="/">
                                                            <h5>{song.title}</h5>
                                                        </a>
                                                        <a className="is-ghost" href="">
                                                            <h6>{song.artist}</h6>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="media-right">
                                                    <a href="" className="d-flex">
                                                        <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                             className="song-img me-3" />
                                                        <img src={images.ICON_PLAY_DARK} alt="Logo"
                                                             className="song-img" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Tab>
                                <Tab eventKey="am" title="Âu Mỹ">
                                    <div className="list-media">
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">1</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_2} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                        <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">2</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_2} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">3</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_2} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">4</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_2} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">5</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_2} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="hq" title="Hàn Quốc">
                                    <div className="list-media">
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">1</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_3} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">2</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_3} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">3</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_3} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">4</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_3} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="media-left">
                                                <div className="song-prefix mar-r-15">
                                                    <span className="number is-top-1 is-center mar-r-5">5</span>
                                                    <div className="sort"> -</div>
                                                </div>
                                                <div className="song-thumb">
                                                    <img src={images.AVATAR_3} alt="Logo"
                                                         className="w-100 album-image is-50x50" />
                                                </div>
                                                <div className="card-info">
                                                    <a className="title item-title" href="/">
                                                        <h5>Tên bài hát</h5>
                                                    </a>
                                                    <a className="is-ghost" href="">
                                                        <h6>Tên ca sĩ</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="media-right">
                                                <a href="" className="d-flex">
                                                    <img src={images.ICON_ADD_PLAYLIST} alt="Logo"
                                                         className="song-img me-3" />
                                                    <img src={images.ICON_PLAY_DARK} alt="Logo" className="song-img" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-3">
                    <Topic></Topic>
                </div>
            </div>
        </div>
    );
};

export default Bxh;
