import { IAdminAccountPage, IAdminAccountPageProps } from '@interfaces/pages/adminAccount';
import Pagination from 'react-bootstrap/Pagination';
import Sidebar from '@components/commons/Sidebar';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/userService';


interface User {
    _id: string;
    name: string;
    username: string;
    email: string;
}

const AccountManagePage: IAdminAccountPage<IAdminAccountPageProps> = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [limit] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [keyword, setKeyword] = useState<string>('');

    const fetchUsers = async (keyword: string, offset: number, limit: number) => {
        try {
            const { users, total } = await getAllUsers(keyword, offset, limit);
            console.log(users);
            setUsers(users);
            setTotal(total);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers(keyword, offset, limit);
    }, [keyword, offset, limit]);



    return (
        <div className="account-manage-container container-fluid d-flex justify-content-between">

            <Sidebar></Sidebar>

            {/* Main Content Start */}
            <div className="content w-100">
                <div className="pt-4 px-4">
                    <div className="rounded h-100 p-4">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h6 className="mb-0">User Table</h6>
                            <div>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    placeholder="Search users..."
                                />
                            </div>
                            <button className="btn btn-primary btn-sm">Add User</button>
                        </div>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-success btn-sm me-2">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            {/* Implement pagination items dynamically based on total */}
                            {/* Example: */}
                            {Array.from(Array(Math.ceil(total / limit)).keys()).map((page) => (
                                <Pagination.Item key={page + 1} active={page === offset / limit}
                                                 onClick={() => setOffset(page * limit)}>
                                    {page + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AccountManagePage;
