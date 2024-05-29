import { ISongDetailPageProps, ISongDetailPage } from '@interfaces/pages/songDetail';
import CustomAudioPlayer from '@components/layouts/CustomAudioPlayer'
import { images } from '@utils/constants';
import {closestCenter, DndContext} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable } from '@dnd-kit/sortable';
import {useState} from "react";
import {CSS} from "@dnd-kit/utilities"

const SongDetailPage: ISongDetailPage<ISongDetailPageProps> = () => {

    const [tasks, setTasks] = useState([
        {id: "1", url: "https://img.icons8.com/?size=60&id=Lodz6ohohSjZ&format=png", title: "Tên bài hát 1"},
        {id: "2", url: "https://img.icons8.com/?size=60&id=ED2NwVcOM2F6&format=png", title: "Tên bài hát 2"},
        {id: "3", url: "https://img.icons8.com/?size=60&id=61576&format=png", title: "Tên bài hát 3"},
        {id: "4", url: "https://img.icons8.com/?size=60&id=61576&format=png", title: "Tên bài hát 4"},
        {id: "5", url: "https://img.icons8.com/?size=60&id=61576&format=png", title: "Tên bài hát 5"}
    ]);
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
                                    <h3 className="title-box"><a href="/">Tên bài hát</a></h3>
                                    <h6 className="title-box"><a href="">Tên nghệ sĩ</a></h6>
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
                                <img src={images.AVATAR_1} alt="songImage" className="song-image" />
                            </div>
                        </div>
                        <CustomAudioPlayer src={'http://example.com/audio.mp3'}></CustomAudioPlayer>
                    </div>
                </div>
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
                                                    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
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
const Task = ({task, id}) => {
    //
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});
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
