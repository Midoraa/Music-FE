import { IActistPageProps, IActistPage } from '@interfaces/pages/actist';
import { images } from '@utils/constants';
import Pagination from 'react-bootstrap/Pagination';

const Actist: IActistPage<IActistPageProps> = () => {
    return(
        <div className="actist-container">
            <div className="container actist-contents mt-3">
                <h3 className="title-box-key text-uppercase mb-2">Nghệ sĩ</h3>
                <div className="row row-cols-5 list-actist mb-3">
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                    <div className="col p-0 actist-item">
                        <img src={images.AVATAR_ACTIST} alt="Logo" className="actist-image mb-1" />
                        <h5 className="actist-name">Tên nghệ sĩ</h5>
                    </div>
                </div>
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
    )
}

export default Actist
