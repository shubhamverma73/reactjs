import React, { useState } from 'react';
//import axios from 'axios';
import {useHistory} from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const[user, setUser] = useState({
        name: "",
        username: "",
        email: "",  
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const inputChange = (event) => {
        //setName(event.target.value);
        /*if(event.target.name === 'fname') {
            alert(event.target.value.length);
        }*/
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = JSON.stringify(user); 
        await fetch("http://shubhverma.tech/api/create.php", {
            method: "POST",
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === "1") {
                alert('Record added');
                history.push('/');
            } else {
                alert('Record not added');
                history.push('/');
            }
        });
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Name" name="name" value={name} onChange={inputChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Username" name="username" value={username} onChange={inputChange} required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-lg" placeholder="Your E-mail Address" name="email" value={email} onChange={inputChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Phone Number" name="phone" value={phone} onChange={inputChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your Website Name" name="website" value={website} onChange={inputChange} required />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                    <button className="btn btn-warning btn-block" onClick={() => history.push('/')}>Back</button>
                </form>
            </div>
        </div>
    );
}
export default AddUser;