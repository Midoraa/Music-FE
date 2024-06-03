import { IActistDetailPageProps, IActistDetailPage } from '@interfaces/pages/actistDetail';
import { images } from '@utils/constants';
import Pagination from 'react-bootstrap/Pagination';

const IActistDetailPage: IActistDetailPage<IActistDetailPageProps> = () => {
    return (
        <div className="actist__detail-container">
            <div className="singer-top-cover">
                <div className="bg-singer-cover"
                     style={{ backgroundImage: 'url("https://avatar-ex-swe.nixcdn.com/singer/cover/2021/05/12/1/1/1/7/1620802627568.jpg")' }}>
                    <div className="container">
                        <div className="d-flex main-info justify-content-between">
                            <div className="left-info">
                                <img className="avatar" src={images.AVATAR_ACTIST} alt="" />
                                <h3 className="name">Sơn tùng MTP</h3>
                            </div>
                            <div className="right-image">
                                <img
                                    src="https://avatar-ex-swe.nixcdn.com/singer/cover/2021/05/12/1/1/1/7/1620802627568.jpg"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3 actist-details__contents">
                <div className="album">
                    <h3 className="title-box-key text-uppercase mb-2">album</h3>
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
                <div className="songs">
                    <h3 className="title-box-key text-uppercase">bài hát</h3>
                    <ul className="row row-cols-2 list-unstyled listbaihat">
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className='d-flex'>
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo"><a
                                            href=""
                                            className="name_song" title="Nhạc Việt Live">Tên bài hát</a></h3>
                                        <p><a href="">Tên ca sĩ</a></p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className='d-flex'>
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo"><a
                                            href=""
                                            className="name_song" title="Nhạc Việt Live">Tên bài hát</a></h3>
                                        <p><a href="">Tên ca sĩ</a></p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className='d-flex'>
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo"><a
                                            href=""
                                            className="name_song" title="Nhạc Việt Live">Tên bài hát</a></h3>
                                        <p><a href="">Tên ca sĩ</a></p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className='d-flex'>
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo"><a
                                            href=""
                                            className="name_song" title="Nhạc Việt Live">Tên bài hát</a></h3>
                                        <p><a href="">Tên ca sĩ</a></p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className='d-flex'>
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo"><a
                                            href=""
                                            className="name_song" title="Nhạc Việt Live">Tên bài hát</a></h3>
                                        <p><a href="">Tên ca sĩ</a></p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className='d-flex'>
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo"><a
                                            href=""
                                            className="name_song" title="Nhạc Việt Live">Tên bài hát</a></h3>
                                        <p><a href="">Tên ca sĩ</a></p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default IActistDetailPage;
