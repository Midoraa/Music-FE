import Link from 'next/link'

const Sidebar = () => (
    <div className="sidebar pe-2 pb-3" style={{ width: '200px' }}>
        <nav className="navbar navbar-light d-block">
            <h3 className="text-primary navbar-brand">
                <i className="fa fa-hashtag me-2"></i>Quản lý
            </h3>
            <div className="navbar-nav w-100">
                <div className="nav-item nav-link">
                    <i className="fa fa-th me-2"></i>
                    <Link href="/admin/playlist-manage">Playlist</Link>
                </div>
                <div className="nav-item nav-link">
                    <i className="fa fa-keyboard me-2"></i>
                    <Link href="/admin/music-manage">Bài hát</Link>
                </div>
                <div className="nav-item nav-link">
                    <i className="fa fa-keyboard me-2"></i>
                    <Link href="/admin/account-manage">Tài khoản</Link>
                </div>
            </div>
        </nav>
    </div>
)

export default Sidebar
