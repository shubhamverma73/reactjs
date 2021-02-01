import React, { useEffect, useState } from 'react';

const Members = () => {
    const[members, setMmembers] = useState([]);
    const[isInternet, setInternet] = useState('You are online');
    let setClassVal;
    
    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = () => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) => {
            response.json().then((result) => {
                setMmembers(result);
                localStorage.setItem("users", JSON.stringify(result));
            })
        }).catch(error => {
            let collections = localStorage.getItem("users");
            setMmembers(JSON.parse(collections));
            setInternet('You are offline');
            //alert('You are offline');
        });
    }

    return (
        <>
            <div className="container">
                <div className="py-4">
                    <h1>Home Page</h1>
                    <div>
                        {
                            isInternet === 'You are offline' ?
                            <h2 style={{color: "red"}}>You are offline</h2> : ''
                        }
                    </div>
                    <table className="table table-striped table-dark border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.map((member, index) => (
                                    <tr key={index+1}>
                                        <th scope="row">{index+1}</th>
                                        <td>{member.name}</td>
                                        <td>{member.email}</td>
                                        <td>{member.username}</td>
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

export default Members;