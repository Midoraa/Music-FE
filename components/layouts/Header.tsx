import Head from 'next/head';
import { images } from '../../utils/constants';
const Header: IHeaderComponent<IHeaderComponentProps> = (props) => {

    const {isShow} = props
    if (isShow){
        return (
            <>
                <Head>
                    <title>Training Web</title>
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
