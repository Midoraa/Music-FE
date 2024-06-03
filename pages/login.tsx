// import { LoginForm } from '@components/index';

import { ILoginPageProps, ILoginPage } from '@interfaces/pages/login';
import { images } from '@utils/constants';

const LoginPage: ILoginPage<ILoginPageProps> = () => {
    return (
        <div className="pages__login">
            {/*<LoginForm />*/}
            <div className="wrap-login100 position-relative">
                <div className="position-absolute back">
                    <a href="/">
                        <img src={images.ICON_LEFT_ARROW} alt="Logo" />
                    </a>
                </div>
                <form action="" className="login100-form validate-form mb-4">
                    <div className="d-flex justify-content-center">
                        <img src={images.MAIN_LOGO} alt="Logo" className="logo" />
                    </div>
                    <div className="login100-form-title py-3">Log in</div>
                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100" type="text" name="username" placeholder="Username"
                               autoComplete="off" />
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100" type="text" name="password" placeholder="Password" />
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>
                    <div className="container-login100-form-btn">
                        <button>LOGIN</button>
                    </div>
                </form>
                <div className="text-center register">
                    <p>Chưa có tài khoản? <a className="link" href="/register">Đăng ký</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
