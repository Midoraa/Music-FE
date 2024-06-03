import { IUserDetailPageProps, IUserDetailPage } from '@interfaces/pages/userDetail';
import { images } from '@utils/constants';

const UserDetailPage: IUserDetailPage<IUserDetailPageProps> = () => {
    return (
        <div className="user__detail-container">
            <div className="top-contents">
                <div className="background">
                    <img src={images.BACKGROUND} alt="Logo" className="background_img" />
                </div>
            </div>
        </div>
    )
};

export default UserDetailPage;
