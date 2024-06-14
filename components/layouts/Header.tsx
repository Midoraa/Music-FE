import Head from 'next/head';
import { images } from '../../utils/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Dropdown } from 'react-bootstrap';


interface User {
    name: string;
    avatar: string;
}
const Header: IHeaderComponent<IHeaderComponentProps> = (props) => {

    const {isShow} = props

    const [curUser, setCurUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('curUser');
        if (user) {
            setCurUser(JSON.parse(user));
        }
    }, [router.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('curUser');
        setCurUser(null);
        router.push('/'); // Redirect to login page or homepage
    };

    if (isShow){
        return (
            <>
                <Head>
                    <title>Midora Music</title>
                    <link rel="icon" type="image/png" href="/favicon.ico" />
                </Head>
                <div>
                    <header className="main-header">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <img src={images.WEB_LOGO} alt="Logo" className="logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarNav"
                                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/">Khám phá</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/song/detail">Bài hát</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/playlist">Playlist</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/bxh">BXH</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/actist">Nghệ sĩ</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control" type="search" placeholder="Search"
                                               aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                    <div className="list-button">
                                        {curUser ? (
                                            <div className="user-info d-flex">
                                                <img src={curUser.message.avatar} alt="" className="avatar" />
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <span>{curUser.message.name}</span>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Trang cá nhân</Dropdown.Item>
                                                        <Dropdown.Item>Đổi mật khẩu</Dropdown.Item>
                                                        <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="btn btn-login">
                                                    <Link href="/login">Đăng nhập</Link>
                                                </div>
                                                <div className="cta">
                                                <span className="hover-underline-animation">
                                                    <Link href="/register">Đăng ký</Link>
                                                </span>
                                                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg"
                                                         width="30" height="10" viewBox="0 0 46 16">
                                                        <path id="Path_10" fill="#00704a" data-name="Path 10"
                                                              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                              transform="translate(30)"></path>
                                                    </svg>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </>
        );
    }
    return (
        <div></div>
    )


};

export default Header;
