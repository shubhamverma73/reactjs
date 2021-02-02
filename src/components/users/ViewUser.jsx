import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const ViewUser = () => {
    let history = useHistory(); //history.goBack() for go back page not for specific page
    //const { id, prdname } = useParams();
    const { id } = useParams(); //Here id is that value which is passed from home component edit link and defined in Routing App.js
    
    //console.log(id);
    //console.log(prdname);

    useEffect(() => {
        loadUsers();
    });

    const[user, setUser] = useState({
        name: "",
        username: "",
        email: "",  
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;

    const loadUsers = async (event) => {
        const formData = JSON.stringify({ "id": id }); 
        await fetch("http://shubhverma.tech/api/read.php", {
            method: "POST",
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === "1") {
                setUser(data.data);
            } else {
                alert('Record not found');
            }
        });        
    } 

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" defaultValue={name} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" defaultValue={username} />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control form-control-lg" defaultValue={email} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" defaultValue={phone} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" defaultValue={website} />
                </div>
                <button className="btn btn-warning btn-block" onClick={() => history.push('/')}>Back</button>
            </div>
        </div>
    );
}
export default ViewUser;