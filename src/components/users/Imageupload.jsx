import React, { useState } from 'react';
//import axios from 'axios';
//import { useHistory, useParams } from 'react-router-dom';

const Imageupload = () => {
    const[showMessage, setshowMessage] = useState('hide');
    const[messageType, setmessageType] = useState('success');
    const[message, setMessage] = useState();
    //let history = useHistory(); //history.goBack() for go back page not for specific page
    const [image, setImage] = useState({
        preview: "",
        raw: ""
    });

    const handleChange = (event) => {
        if (event.target.files.length) {
            let file_size = event.target.files[0].size;
            console.log(formatBytes(file_size));
            setImage({
                preview: URL.createObjectURL(event.target.files[0]),
                raw: event.target.files[0]
            });
        }
      };

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
    
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("http://shubhverma.tech/api/file_upload.php", {
            method: "POST",
            /*headers: {
                "Content-Type": "multipart/form-data"
            },*/
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === '1') {
                setshowMessage('');
                setmessageType('success');
                setMessage('File uploaded successfully');
            } else {
                setshowMessage('');
                setmessageType('danger');
                setMessage('File not uploaded, try again');
            }
            // ========================== Hide message after specific time period =================================
            setTimeout( () => {
                setshowMessage('hide');
            }, 5000);
            // ========================== Remove previre image after upload of fail ==============================
            setImage({
                preview: ''
              });
        });
    };

    return (
        <div className="container">
            <br/>
            <div className={`alert alert-${messageType} ${showMessage}`} role="alert">
                {message}
            </div>
            <br/>
            <div className="w-75 mx-auto shadow p-5">
                <label htmlFor="upload-button">
                    {image.preview ? ( <img src={image.preview} alt="dummy" width="100" height="100" /> ) : (
                    <>
                        <span className="fa-stack fa-2x mt-3 mb-2">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fas fa-store fa-stack-1x fa-inverse" />
                        </span>
                        <h5 className="text-center">Upload your photo</h5>
                    </>
                    )}
                </label>
                <input type="file" id="upload-button" style={{ display: "none" }} onChange={handleChange} />
                <br />
                <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
}
export default Imageupload;