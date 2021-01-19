import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Imageupload = () => {
    let history = useHistory(); //history.goBack() for go back page not for specific page
    const [image, setImage] = useState({
        preview: "",
        raw: ""
    });

    const handleChange = (event) => {
        if (event.target.files.length) {
          setImage({
            preview: URL.createObjectURL(event.target.files[0]),
            raw: event.target.files[0]
          });
        }
      };

    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        //await fetch("http://localtest.com/api/file_upload.php", {
        await fetch("http://localhost/react/file_upload.php", {
            method: "POST",
            /*headers: {
                "Content-Type": "multipart/form-data"
            },*/
            body: formData
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <label htmlFor="upload-button">
                    {image.preview ? ( <img src={image.preview} alt="dummy" width="300" height="300" /> ) : (
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
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
}
export default Imageupload;