import { ITopicComponent, ITopicComponentProps } from '@interfaces/components/topic';
import { images } from '@utils/constants';

const Topic: ITopicComponent<ITopicComponentProps> = () => {
    return (
        <div className="topic-container">
            <h3 className="title-box text-uppercase">
                <a href="/">Chủ Đề</a>
            </h3>
            <div className="zm-featured-item mb-3">
                <a href="">
                    <div className="zm-card-image cover">
                        <figure className="image is-48x48">
                            <img src={images.TOPIC_1} alt="Logo" className="w-100 album-image" />
                        </figure>
                    </div>
                    <div className="body">
                        <div className="content mar-t-10">
                            <h3 className="title">BXH nhạc mới</h3>
                        </div>
                    </div>
                </a>
            </div>
            <div className="zm-featured-item mb-3">
                <a href="">
                    <div className="zm-card-image cover">
                        <figure className="image is-48x48">
                            <img src={images.TOPIC_2} alt="Logo" className="w-100 album-image" />
                        </figure>
                    </div>
                    <div className="body">
                        <div className="content mar-t-10">
                            <h3 className="title">Top 100</h3>
                        </div>
                    </div>
                </a>
            </div>
            <div className="zm-featured-item mb-3">
                <a href="">
                    <div className="zm-card-image cover">
                        <figure className="image is-48x48">
                            <img src={images.TOPIC_3} alt="Logo" className="w-100 album-image" />
                        </figure>
                    </div>
                    <div className="body">
                        <div className="content mar-t-10">
                            <h3 className="title">Nhạc trẻ</h3>
                        </div>
                    </div>
                </a>
            </div>
            <div className="zm-featured-item mb-3">
                <a href="">
                    <div className="zm-card-image cover">
                        <figure className="image is-48x48">
                            <img src={images.TOPIC_4} alt="Logo" className="w-100 album-image" />
                        </figure>
                    </div>
                    <div className="body">
                        <div className="content mar-t-10">
                            <h3 className="title">Những chuyến đi</h3>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Topic;
