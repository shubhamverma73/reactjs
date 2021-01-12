import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const ViewUser = () => {
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

    const loadUsers = async (event) => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    } 

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={name} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={username} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control form-control-lg" value={email} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={phone} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" value={website} />
                </div>
                <button className="btn btn-warning btn-block" onClick={() => history.push('/')}>Back</button>
            </div>
        </div>
    );
}
export default ViewUser;