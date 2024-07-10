// import { LoginForm } from '@components/index';

import { ILoginPageProps, ILoginPage } from '@interfaces/pages/login';
import { images } from '@utils/constants';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth } from '@utils/configs/firebase';

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

    function googleLogin(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) =>{
            const user = result._tokenResponse;
            console.log(user);

            const userInfo = {
                name: user.displayName,
                username: user.email,
                email: user.email,
                avatar: user.photoUrl,
            };

            const saveResponse = await fetch('http://localhost:3010/users/google-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            });
            if (saveResponse.ok) {
                const data = await saveResponse.json();
                localStorage.setItem('curUser', JSON.stringify(data));
                router.push('/');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Google login failed',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }).catch((error) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Google login failed',
                showConfirmButton: false,
                timer: 1500,
            });
        });
    }

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
                <div onClick={googleLogin} className="mb-3">
                    <button className="button google-login">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                            <path fill="#4285F4"
                                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                            <path fill="#34A853"
                                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                            <path fill="#FBBC05"
                                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                            <path fill="#EB4335"
                                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                        </svg>
                        Continue with Google
                    </button>
                </div>
                <div className="text-center register">
                    <p>New to Midora? <a className="link" href="/register"> Register</a></p>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;
