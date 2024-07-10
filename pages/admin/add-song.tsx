import { IAddSongPage, IAddSongPageProps } from '@interfaces/pages/addSong';
import UploadPage from '@components/layouts/UploadPage';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { saveSong } from "../../services/songService";


const AddSongPage: IAddSongPage<IAddSongPageProps> = () => {

    const [title, setTitle] = useState<string>('');
    const [artist, setArtist] = useState<string>('');
    const [genres, setGenres] = useState<string>('');
    // @ts-ignore
    const [releaseDate, setReleaseDate] = useState<string>('');
    const [audioLink, setAudioLink] = useState<string>('');
    const [coverImg, setCoverImg] = useState<string>('');
    const [vipDownload, setVipDownload] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const songData = {
            title,
            artist,
            genres,
            audioLink,
            coverImg,
            vipDownload,
            releaseDate: getCurrentDate(),
        };

        try {
            const response = await saveSong(songData);
            if (response.status === 200) {
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
    const handleChangeVipDownload = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVipDownload(event.target.value === '1');
        console.log(vipDownload);
    };
    const getCurrentDate = (): string => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    useEffect(() => {
        setReleaseDate(getCurrentDate());
    }, []);

    return(
        <div className="add-song-container d-flex container justify-content-around">
            <UploadPage></UploadPage>
            <div>
                <h2>Lấy link audio và thêm mới</h2>
                <form onSubmit={handleSubmit} className="validate-form mb-4">

                    <div className="">
                        <div className="form-floating" data-validate="Enter Title">
                            <input className="form-control mb-2"
                                   id="floatingInput"
                                   type="text"
                                   name="title"
                                   placeholder="Tên bài hát"
                                   autoComplete="off"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="floatingInput">Tên bài hát</label>
                        </div>
                    </div>
                    <div className="form-floating" data-validate="Enter username">
                        <input className="form-control mb-2"
                               id="floatingAc"
                               type="text"
                               name="username"
                               placeholder="Nghệ sĩ"
                               autoComplete="off"
                               value={artist}
                               onChange={(e) => setArtist(e.target.value)} />
                        <label htmlFor="floatingAc">Nghệ sĩ</label>
                    </div>
                    <div className="form-floating" data-validate="Enter genres">
                        <input className="form-control mb-2"
                               id="floatingGe"
                               type="text"
                               name="genres"
                               placeholder="Thể loại"
                               autoComplete="off"
                               value={genres}
                               onChange={(e) => setGenres(e.target.value)} />
                        <label htmlFor="floatingGe">Thể loại</label>
                    </div>
                    <div className="form-floating" data-validate="Enter username">
                        <input className="form-control mb-2"
                               id="floatingAu"
                               type="text"
                               name="audioLink"
                               placeholder="Link audio"
                               autoComplete="off"
                               value={audioLink}
                               onChange={(e) => setAudioLink(e.target.value)} />
                        <label htmlFor="floatingAu">Link audio</label>
                    </div>
                    <div className="form-floating" data-validate="Enter username">
                        <input className="form-control mb-2"
                               id="floatingCo"
                               type="text"
                               name="coverImg"
                               placeholder="Link hình ảnh hiển thị"
                               autoComplete="off"
                               value={coverImg}
                               onChange={(e) => setCoverImg(e.target.value)} />
                        <label htmlFor="floatingCo">Link hình ảnh hiển thị</label>
                    </div>
                    <div className="mb-2" data-validate="Enter username">
                        <h6>Nạp để tải</h6>
                        <input
                            type="radio"
                            name="topping"
                            value="1"
                            id="regular"
                            onChange={handleChangeVipDownload}
                        />
                        <label className="me-3" htmlFor="regular">Không</label>

                        <input
                            type="radio"
                            name="topping"
                            value="0"
                            id="medium"
                            onChange={handleChangeVipDownload}
                        />
                        <label htmlFor="medium">Có</label>
                    </div>
                    <div className="w-100 text-center">
                        <button className="btn">Thêm mới</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddSongPage;
