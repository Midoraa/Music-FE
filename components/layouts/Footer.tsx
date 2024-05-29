import { images } from '@utils/constants';

const Footer: IFooterComponent<IFooterComponentProps> = () => {
    return <div>
        <footer className="footer-07 mt-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <img src={images.WEB_LOGO} alt="Logo" className="logo mb-4" />
                        <ul className="ftco-footer-social p-0 d-flex justify-content-center">
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top"
                                                            title="Twitter"><img src={images.ICON_TWITTER} alt="Logo"
                                                                                 className="logo" /></a></li>
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top"
                                                            title="Facebook"><img src={images.ICON_FACEBOOK} alt="Logo"
                                                                                  className="logo" /></a></li>
                            <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top"
                                                            title="Instagram"><img src={images.ICON_INSTA} alt="Logo"
                                                                                   className="logo" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row license">
                    <div className="col-md-12 text-center">
                        <p className="text-dark m-0">
                            Liên hệ về bản quyền | <a
                            href="" target="_blank">midora.music@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    </div>;
};

export default Footer;
