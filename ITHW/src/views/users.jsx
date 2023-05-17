import {useEffect, useState} from "react";
import axios from "axios";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const onDelete = user => {
        if(!window.confirm('Are you sure you want to delete this user?')) {
            return
        }
        axios.delete(`http://localhost/api/users.php?id=${user.id}`)
            .then(() => {
                getUsers()
            })
    }

    const getUsers = () => {
        axios.get('http://localhost/api/users.php')
            .then(response => {
                setUsers(response.data);
            });
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <h1>Users</h1>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Delete Account</th>
                    </tr>
                    </thead>
                        <tbody>
                        {users.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>
                                    <button className="btn-delete" onClick={ev => onDelete(u)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                </table>
            </div>
        </div>
    )
}