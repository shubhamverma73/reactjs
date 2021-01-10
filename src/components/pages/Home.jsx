import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
    const[users, setUser] = useState([]);
    
    /* ===================== Loader effect before page load ======================== */
    useEffect(() => {
        loadUsers();
    }, []); //[] used for stop infinite loop, only for 0 time

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users');
        setUser(result.data.reverse());
    }

    const deleteUser = async (id) => {
        //confirm("Are you sure, you want do delete?");
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }

    return (
        <>
            <div className="container">
                <div className="py-4">
                    <h1>Home Page</h1>
                    <table className="table table-striped table-light border shadow">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td><Link className="btn btn-primary" to={`/users/view/${user.id}`}>View</Link>&nbsp;&nbsp;
                                        <Link className="btn btn-success" to={`/users/edit/${user.id}`}>Edit</Link>&nbsp;&nbsp;
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link></td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;