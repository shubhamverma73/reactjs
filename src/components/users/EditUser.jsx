import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams(); //Here id is that value which is passed from home component edit link and defined in Routing App.js
    
    useEffect(() => {
        loadUsers();
    }, []);

    const[user, setUser] = useState({
        name: "",
        username: "",
        email: "",  
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const inputChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push('/');
    }

    const loadUsers = async (event) => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    } 

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Name" name="name" value={name} onChange={inputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Username" name="username" value={username} onChange={inputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-lg" placeholder="Your E-mail Address" name="email" value={email} onChange={inputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Phone Number" name="phone" value={phone} onChange={inputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Website Name" name="website" value={website} onChange={inputChange}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                    <button className="btn btn-warning btn-block" onClick={() => history.push('/')}>Back</button>
                </form>
            </div>
        </div>
    );
}
export default EditUser;