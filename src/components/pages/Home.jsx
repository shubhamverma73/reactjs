import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
    const[users, setUser] = useState([]);
    
    /* ===================== Loader effect before page load ======================== */
    useEffect(() => {
        loadUsers();
        //fetchApi();
    }, []); //[] used for stop infinite loop, only for 0 time. only first time page will render than it will ren
    // and also if we have 2 button than if we want only first button action than we pass only first button const val

    const loadUsers = async () => {
        //const result = await axios.get('http://localhost:3003/users');
        const result = await axios.get('http://shubhverma.tech/api/conn.php');
        setUser(result.data.reverse());
    }

    const deleteUser = async (id) => {
        //confirm("Are you sure, you want do delete?");
        const formData = JSON.stringify({ "id": id }); 
        await fetch("http://shubhverma.tech/api/delete.php", {
            method: "POST",
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            if(data >= 0) {
                alert('Record deleted');
            } else {
                alert('Record not deleted');
            }
        });
        loadUsers();
    }

    /*You now understand how to get data for your React components from an external API using fetch and axios.
    Both achieve the same objective and you can choose either of the two.
    
    However, keep in mind that axios should be added as an npm dependency,
    whereas fetch is available out of the box as a web API.
    Another difference is that axios returns you the transformed JSON data,
    but with fetch you need to parse the response and extract the JSON before passing it to React components.*/

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
                                    <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td><Link className="btn btn-primary" to={`/users/view/${user._id.$oid}`}>View</Link>&nbsp;&nbsp;
                                        <Link className="btn btn-success" to={`/users/edit/${user._id.$oid}`}>Edit</Link>&nbsp;&nbsp;
                                        {/* <a href="#" className="btn btn-danger" onClick={() => deleteUser(user._id.$oid)}>Delete</a></td> */}
                                        <button className="btn btn-danger" onClick={() => deleteUser(user._id.$oid)}>Delete</button></td>
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