import { ISongDetailPageProps, ISongDetailPage } from '@interfaces/pages/songDetail';
import { images } from '@utils/constants';
import {closestCenter, DndContext} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import {CSS} from "@dnd-kit/utilities"
import Pagination from 'react-bootstrap/Pagination';
import { getFirstTenSongs } from '../../services/songService';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

const SongDetailPage: ISongDetailPage<ISongDetailPageProps> = () => {

    // @ts-ignore
    const [firstTenSongs, setFirstTenSongs] = useState([]);
    const [playListUrl, setPlayListUrl] = useState([""]);
    const [tasks, setTasks] = useState([]);
    const [curSongDetail, setCurSongDetail] = useState();

    useEffect(() => {
        const fetchFirstTenSongs = async () => {
            try {
                const songs = await getFirstTenSongs();
                setFirstTenSongs(songs);
                const newTasks = songs.map((song:any) => ({
                    id: song._id, // Sử dụng index của mảng songs làm id
                    url: "https://img.icons8.com/?size=60&id=Lodz6ohohSjZ&format=png", // Giả sử imageUrl là trường chứa đường dẫn hình ảnh
                    title: song.title,
                    artist: song.artist,
                    coverImg: song.coverImg
                }));
                const songUrls = songs.map((song:any)=> song.audioLink);
                setTasks(newTasks);
                setPlayListUrl(songUrls)
            } catch (error) {
                console.error('Error fetching first ten songs:', error);
            }
        };

        fetchFirstTenSongs();
    }, []);

    const [currentSong,setCurentSong] = useState(0);
    var PREVIOUS_SONG=-1;
    const handleNextSong=()=>{
        console.log("NEXT_SONG_FUNCTION")
        PREVIOUS_SONG=currentSong;
        var index=0;
        if(currentSong<playListUrl.length-1){
            index=currentSong+1;
        }
        else index=0;
        console.log("Current song:"+playListUrl[index]);
        setCurentSong(index);
    };
    const handlePerviousSong=()=>{
        var index=0;
        if(currentSong>0){
            index=currentSong-1;
        }
        else index=0;
        console.log("Current song:"+playListUrl[index]);

        console.log("PREVIOUS_SONG_FUNCTION");
        setCurentSong(index);
    };
    const hanldeOnEnd = () => {
        console.log("ENDSONG_FUNCTION")
        handleNextSong();
    }
    const hanldeOnPause = () => {
        console.log("ON_PAUSE_FUNCTION")
    }
    const hanldeOnPlay = () => {
        console.log(playListUrl);
        console.log("index",currentSong);
        setCurSongDetail(tasks[currentSong])
        console.log("ON_PLAY_FUNCTION")
    }
    const hanldeOnError = () => {
        console.log("ON_ERROR_FUNCTION")
    }



    // @ts-ignore
    const getTaskPos = id => tasks.findIndex(task =>
        task.id === id)
    // @ts-ignore
    const handleDragEnd = (event) => {
        const {over, active} = event;

        if (active.id === over.id) return;
        setTasks(tasks => {
            const originalPos = getTaskPos(active.id);
            const newPos=getTaskPos(over.id);
            return arrayMove(tasks,originalPos,newPos);
        })
    }
    return (
        <div className="song-detail__container container">
            <div className="row mt-3">
                <div className="col-lg-9 left-contents">
                    <div className="song-container">
                        <div>
                            <div className="d-flex">
                                <div className="title-actions">
                                    <h3 className="title-box"><a href="/">{curSongDetail?.title}</a></h3>
                                    <h6 className="title-box"><a href="">{curSongDetail?.artist}</a></h6>
                                    <div className="icon-box">
                                        <a href="">
                                            <img src={images.ICON_LOVE} alt="Logo" className="icon" />
                                        </a>
                                        <a href="">
                                            <img src={images.ICON_ADD_PLAYLIST_DARK} alt="Logo" className="icon" />
                                        </a>
                                    </div>
                                    <p className="played">2000 lượt phát</p>
                                </div>
                                <img src={curSongDetail?.coverImg} alt="songImage" className="song-image" />
                            </div>
                        </div>
                        <AudioPlayer
                            src={playListUrl[currentSong]}
                            onCanPlay={hanldeOnPlay}
                            onLoadedMetaData={hanldeOnPlay}
                            preload="auto"

                            autoPlay={true}
                            onPlayError={hanldeOnError}
                            onLoadStart={hanldeOnPlay}
                            onPlay={hanldeOnPlay}
                            onPause={hanldeOnPause}
                            onClickNext={handleNextSong}
                            onClickPrevious={handlePerviousSong}
                            onEnded={hanldeOnEnd}
                            volume={1}
                            onError={hanldeOnError}
                            showSkipControls
                            progressUpdateInterval={100}
                        />
                    </div>
                    <div className="relative mt-5">
                        <h3 className="text-uppercase title-box-key">có thể bạn quan tâm</h3>
                        <ul className="list-unstyled row row-cols-5">
                            <li className="col recomment">
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
                            <li className="col recomment">
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
                            <li className="col recomment">
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
                            <li className="col recomment">
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
                            <li className="col recomment">
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

                    {/*---------------------------------BÌNH LUẬN--------------------------------------*/}

                    <div className="mt-5 cmt-container">
                        <h3 className="text-uppercase title-box-key"><span>2</span> BÌNH LOẠN</h3>
                        <div className="cmt-contents">
                            <div className="d-flex cmt-content">
                                <a href="/user/detail">
                                    <img src={images.AVATAR_2} alt="" className="avatar-cmt" />
                                </a>
                                <div className="user-cmt">
                                    <p className="user-name">Công Tần Tôn Nữ</p>
                                    <p className="cmt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                        aspernatur, aut
                                        error eveniet exercitationem nam nihil odit placeat quaerat quod recusandae
                                        sapiente sed vitae. Dolorem libero quo quod. Autem, debitis?</p>
                                </div>
                            </div>
                            <div className="d-flex cmt-content">
                                <a href="/user/detail">
                                    <img src={images.AVATAR_ACTIST} alt="" className="avatar-cmt" />
                                </a>
                                <div className="user-cmt">
                                    <p className="user-name">Chân Mệnh Thiên Tử</p>
                                    <p className="cmt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                        aspernatur, aut
                                        error eveniet exercitationem nam nihil odit placeat quaerat quod recusandae
                                        sapiente sed vitae. Dolorem libero quo quod. Autem, debitis?</p>
                                </div>
                            </div>
                        </div>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </div>

                {/*--------------------------------------TIẾP THEO---------------------------------------*/}

                <div className="col-lg-3 right-contents">
                    <div className="head-part d-flex justify-content-between">
                        <h3 className="title-next text-uppercase">Tiếp theo</h3>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch"
                                   id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Autoplay</label>
                        </div>
                    </div>
                    <div className="list-song-container">
                        <ul className="list-song list-unstyled">
                            <li className="list_chart_music">
                                <div className="info_data">
                                    <DndContext
                                        onDragEnd={handleDragEnd}
                                        collisionDetection={closestCenter}>
                                        <div className="">
                                            <div className={""}>
                                                <div className="">
                                                    <SortableContext items={tasks}
                                                                     strategy={verticalListSortingStrategy}>
                                                        {tasks.map((task) => {
                                                                return (
                                                                    <Task key={task.id} task={task} id={task.id}></Task>
                                                                )
                                                            }
                                                        )}
                                                    </SortableContext>
                                                </div>

                                            </div>

                                        </div>
                                    </DndContext>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
// @ts-ignore
const Task = ({ task, id }) => {
    //
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    // toString(transform: Transform | null): string |
    // undefined
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    return (
        <div key={task.id} className="py-2 task-music"
             ref={setNodeRef}
             {...attributes}
             {...listeners}
             style={style}
        >
            <div className="d-flex">
                <div className="align-self-center me-3">
                    <img src={images.ICON_LIST} alt="..." className="icon-list" />
                </div>
                <div className="">
                    <div className="">
                        <h6 className="m-0 song-title">{task.title}</h6>
                        <p className="m-0"><small className="text-muted">Tên nghệ sĩ</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SongDetailPage;
