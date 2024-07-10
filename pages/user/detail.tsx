import { IUserDetailPageProps, IUserDetailPage } from '@interfaces/pages/userDetail';
import { images } from '@utils/constants';
import { useEffect, useState } from 'react';


interface IUser {
    name: string;
    username: string;
    email: string;
    avatar: string;
}
const UserDetailPage: IUserDetailPage<IUserDetailPageProps> = () => {

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        // Lấy dữ liệu người dùng từ localStorage
        const userData = localStorage.getItem('curUser');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    if (!user) {
        return <p>No user data available.</p>;
    }
    return (
        <div className="user__detail-container">
            <div className="top-contents position-relative">
                <div className="background left-info">
                    <img src={images.BACKGROUND} alt="Logo" className="background_img" />
                    <div className="container position-absolute detail">
                        <div className="d-flex main-info align-items-center">
                            <img
                                className="avatar"
                                src={user.avatar}
                                alt="Avatar"
                            />
                            <div className="user-details">
                                <h3 className="name">{user.name}</h3>
                                <div className="box_detail_user">
                                    <p className="detail-item">Email: {user.email}</p>
                                    <p className="detail-item">Country: Việt Nam</p>
                                </div>
                            </div>
                            <div className="button">
                                <button className="styled-button">following</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 actist-details__contents">
                <div className="album">
                    <h3 className="title-box-key text-uppercase mb-3">Playlist</h3>
                    <ul className="list-unstyled row row-cols-5">
                        <li className="col">
                            <a href="">
                                <div className="box-left-album">
                                    <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    <div className="play-icon">
                                        <img src={images.ICON_PLAY} alt="Play Icon" className="w-100 play-icon-image" />
                                    </div>
                                </div>
                                <div className="info_album">
                                    <h3 className="h3seo">
                                        <a href="" className="name_song" title="Nhạc Việt Live">
                                            Ballad Việt
                                        </a>
                                    </h3>
                                </div>
                            </a>
                        </li>
                        <li className="col">
                            <a href="">
                                <div className="box-left-album">
                                    <img src={images.AVATAR_2} alt="Logo" className="w-100 album-image" />
                                    <div className="play-icon">
                                        <img src={images.ICON_PLAY} alt="Play Icon" className="w-100 play-icon-image" />
                                    </div>
                                </div>
                                <div className="info_album">
                                    <h3 className="h3seo">
                                        <a href="" className="name_song" title="Nhạc Việt Live">
                                            Acoustic Việt
                                        </a>
                                    </h3>
                                </div>
                            </a>
                        </li>
                        <li className="col">
                            <a href="">
                                <div className="box-left-album">
                                    <img src={images.AVATAR_3} alt="Logo" className="w-100 album-image" />
                                    <div className="play-icon">
                                        <img src={images.ICON_PLAY} alt="Play Icon" className="w-100 play-icon-image" />
                                    </div>
                                </div>
                                <div className="info_album">
                                    <h3 className="h3seo">
                                        <a href="" className="name_song" title="Nhạc Việt Live">
                                            Indie Việt
                                        </a>
                                    </h3>
                                </div>
                            </a>
                        </li>
                        <li className="col">
                            <a href="">
                                <div className="box-left-album">
                                    <img src={images.AVATAR_4} alt="Logo" className="w-100 album-image" />
                                    <div className="play-icon">
                                        <img src={images.ICON_PLAY} alt="Play Icon" className="w-100 play-icon-image" />
                                    </div>
                                </div>
                                <div className="info_album">
                                    <h3 className="h3seo">
                                        <a href="" className="name_song" title="Nhạc Việt Live">
                                            Remix Việt
                                        </a>
                                    </h3>
                                </div>
                            </a>
                        </li>
                        <li className="col">
                            <a href="">
                                <div className="box-left-album">
                                    <img src={images.AVATAR_5} alt="Logo" className="w-100 album-image" />
                                    <div className="play-icon">
                                        <img src={images.ICON_PLAY} alt="Play Icon" className="w-100 play-icon-image" />
                                    </div>
                                </div>
                                <div className="info_album">
                                    <h3 className="h3seo">
                                        <a href="" className="name_song" title="Nhạc Việt Live">
                                            The New VietNam
                                        </a>
                                    </h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="songs mt-5">
                    <h3 className="title-box-key text-uppercase mb-3">bài hát yêu thích</h3>
                    <ul className="row row-cols-2 list-unstyled listbaihat">
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className="d-flex">
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo">
                                            <a href="" className="name_song" title="Nhạc Việt Live">
                                                Tên bài hát
                                            </a>
                                        </h3>
                                        <p>
                                            <a href="">Tên ca sĩ</a>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className="d-flex">
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo">
                                            <a href="" className="name_song" title="Nhạc Việt Live">
                                                Tên bài hát
                                            </a>
                                        </h3>
                                        <p>
                                            <a href="">Tên ca sĩ</a>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className="d-flex">
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo">
                                            <a href="" className="name_song" title="Nhạc Việt Live">
                                                Tên bài hát
                                            </a>
                                        </h3>
                                        <p>
                                            <a href="">Tên ca sĩ</a>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className="d-flex">
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo">
                                            <a href="" className="name_song" title="Nhạc Việt Live">
                                                Tên bài hát
                                            </a>
                                        </h3>
                                        <p>
                                            <a href="">Tên ca sĩ</a>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className="d-flex">
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo">
                                            <a href="" className="name_song" title="Nhạc Việt Live">
                                                Tên bài hát
                                            </a>
                                        </h3>
                                        <p>
                                            <a href="">Tên ca sĩ</a>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="col baihat">
                            <div className="baihat-chitiet">
                                <a href="" className="d-flex">
                                    <div className="box-left-album2">
                                        <img src={images.AVATAR_1} alt="Logo" className="w-100 album-image" />
                                    </div>
                                    <div className="info_album">
                                        <h3 className="h3seo">
                                            <a href="" className="name_song" title="Nhạc Việt Live">
                                                Tên bài hát
                                            </a>
                                        </h3>
                                        <p>
                                            <a href="">Tên ca sĩ</a>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDetailPage;
