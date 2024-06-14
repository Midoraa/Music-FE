// import { LoginForm } from '@components/index';

import { ILoginPageProps, ILoginPage } from '@interfaces/pages/login';
import { images } from '@utils/constants';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';

const LoginPage: ILoginPage<ILoginPageProps> = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3010/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('curUser', JSON.stringify(data));
            router.push('/');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Invalid username or password",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };



    return (
        <div className="pages__login">
            <div className="wrap-login100 position-relative">
                <div className="position-absolute back">
                    <a href="/">
                        <img src={images.ICON_LEFT_ARROW} alt="Logo" />
                    </a>
                </div>
                <form onSubmit={handleSubmit} className="login100-form validate-form mb-4">
                    <div className="d-flex justify-content-center">
                        <img src={images.MAIN_LOGO} alt="Logo" className="logo" />
                    </div>
                    <div className="login100-form-title py-3">Log in</div>
                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100" type="text" name="username" placeholder="Username"
                               autoComplete="off" value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100" type="text" name="password" placeholder="Password"
                                autoComplete="off" value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>
                    <div className="container-login100-form-btn">
                        <button type={'submit'}>LOGIN</button>
                    </div>
                </form>
                <div className="text-center register">
                    <p>New to Midora? <a className="link" href="/register"> Register</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
