import { IAdminAccountPage, IAdminAccountPageProps } from '@interfaces/pages/adminAccount';
import Pagination from 'react-bootstrap/Pagination';

const AccountManagePage: IAdminAccountPage<IAdminAccountPageProps> = () => {
    return (
        <div className="account-manage-container container-fluid d-flex justify-content-between">
            {/* Sidebar Start */}
            <div className="sidebar pe-2 pb-3" style={{ width: "200px" }}>
                <nav className="navbar navbar-light d-block">
                    <h3 className="text-primary navbar-brand">
                        <i className="fa fa-hashtag me-2"></i>Account Management
                    </h3>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img className="rounded-circle" src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">John Doe</h6>
                            <span>Admin</span>
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <a className="nav-item nav-link" href="#">
                            <i className="fa fa-tachometer-alt me-2"></i>Dashboard
                        </a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">
                                <i className="fa fa-laptop me-2"></i>Manage Artists
                            </a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="#" className="dropdown-item">Artist List</a>
                                <a href="#" className="dropdown-item">Add New Artist</a>
                            </div>
                        </div>
                        <a href="#" className="nav-item nav-link">
                            <i className="fa fa-th me-2"></i>Manage Albums
                        </a>
                        <a href="#" className="nav-item nav-link">
                            <i className="fa fa-keyboard me-2"></i>Manage Songs
                        </a>
                        <a href="#" className="nav-item nav-link">
                            <i className="fa fa-table me-2"></i>User Management
                        </a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="far fa-file-alt me-2"></i>Pages
                            </a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="#" className="dropdown-item">Sign In</a>
                                <a href="#" className="dropdown-item">Sign Up</a>
                                <a href="#" className="dropdown-item">404 Error</a>
                                <a href="#" className="dropdown-item">Blank Page</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Sidebar End */}

            {/* Main Content Start */}
            <div className="content">
                {/* Navbar Start */}
                <nav className="navbar navbar-expand navbar-light sticky-top px-4 py-0">
                    <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                        <h2 className="text-primary mb-0">
                            <i className="fa fa-hashtag"></i>
                        </h2>
                    </a>
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars"></i>
                    </a>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fa fa-envelope me-lg-2"></i>
                                <span className="d-none d-lg-inline-flex">Messages</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                        <div className="ms-2">
                                            <h6 className="fw-normal mb-0">John sent you a message</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">See all messages</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fa fa-bell me-lg-2"></i>
                                <span className="d-none d-lg-inline-flex">Notifications</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">
                                    <h6 className="fw-normal mb-0">Profile updated</h6>
                                    <small>15 minutes ago</small>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item text-center">See all notifications</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img className="rounded-circle me-lg-2" src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                <span className="d-none d-lg-inline-flex">John Doe</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">My Profile</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <a href="#" className="dropdown-item">Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}

                {/* Main Content */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="artist-table">
                            <div className="rounded h-100 p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="mb-0">Artist Table</h6>
                                    <button className="btn btn-primary btn-sm">Add Artist</button>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Sơn Tùng MTP</td>
                                            <td>Vietnam</td>
                                            <td>Doe</td>
                                            <td>Doe</td>
                                            <td className="button">
                                                <button className="btn btn-success btn-sm me-2">Edit</button>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mark@email.com</td>
                                            <td>*******</td>
                                            <td>
                                                <button className="btn btn-success btn-sm me-2">Edit</button>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>jacob@email.com</td>
                                            <td>*******</td>
                                            <td>
                                                <button className="btn btn-success btn-sm me-2">Edit</button>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="">
                            <div className="rounded h-100 p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="mb-0">User Table</h6>
                                    <button className="btn btn-primary btn-sm">Add User</button>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Sara</td>
                                            <td>Smith</td>
                                            <td>sara@email.com</td>
                                            <td>*******</td>
                                            <td>
                                                <button className="btn btn-success btn-sm me-2">Edit</button>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Luke</td>
                                            <td>Skywalker</td>
                                            <td>luke@email.com</td>
                                            <td>*******</td>
                                            <td>
                                                <button className="btn btn-success btn-sm me-2">Edit</button>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Han</td>
                                            <td>Solo</td>
                                            <td>han@email.com</td>
                                            <td>*******</td>
                                            <td>
                                                <button className="btn btn-success btn-sm me-2">Edit</button>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content End */}
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
            {/* Main Content End */}
        </div>
    );
};


export default AccountManagePage
