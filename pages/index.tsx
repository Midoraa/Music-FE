import { IHomePage, IHomePageProps } from '@interfaces/pages/home';
import { images } from '../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Rank from '../components/layouts/sidebars/Rank';
import Topic from '../components/layouts/sidebars/Topic';
const HomePage: IHomePage<IHomePageProps> = () => {
    return (
        <div className="pages__home container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={images.BANNER_1} alt="Logo" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.BANNER_2} alt="Logo" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.BANNER_3} alt="Logo" className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={images.BANNER_4} alt="Logo" className="" />
                </SwiperSlide>
            </Swiper>
            <div className="row pages__home__contents">
                <div className="col-lg-9 left-contents">
                    <div className="contents">
                        <div className="nhacviet">
                            <a className="title-box-key text-uppercase" href="/">
                                Bài hát việt nam
                            </a>
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
                        <div className="nhacviet">
                            <a className="title-box-key text-uppercase" href="/">
                                Quốc tế nổi bật
                            </a>
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
                        <div className="nhacviet">
                            <a className="title-box-key text-uppercase" href="/">
                                Tâm trạng hôm nay
                            </a>
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
                        <div className="nhacviet">
                            <a className="title-box-key text-uppercase" href="/">
                                Mới phát hành
                            </a>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
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
                                                    Tên bài hát
                                                </a>
                                            </h3>
                                            <p>
                                                <a href="">Tên ca sĩ</a>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="nhacviet">
                            <a className="title-box-key text-uppercase" href="/">
                                bài hát
                            </a>
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

                <div className="right-sidebar col-lg-3">
                    <Rank></Rank>
                    <Topic></Topic>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
