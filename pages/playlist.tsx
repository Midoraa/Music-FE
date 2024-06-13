import { IPlayListPageProps, IPlayListPage } from '@interfaces/pages/playlist';
import Rank from '@components/layouts/sidebars/Rank';
import { images } from '@utils/constants';

const PlayList: IPlayListPage<IPlayListPageProps> = () => {
    return (
        <div className="playlist-container">
            <div className="row playlist-contents container mt-3">
                <div className="col-lg-9 left-contents">
                    <div className="list-playlist">
                        <div className="playlist mb-3">
                            <h3 className="title-box-key text-uppercase">Playlist của bạn</h3>
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
    )
}

export default PlayList
