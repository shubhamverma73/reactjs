import React from 'react';


const Form = () => {

    const inputChange = (event) => {
        //setName(event.target.value);
        if(event.target.name === 'fname') {
            alert(event.target.value.length);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { fname, lname, email, mobile } = event.target.elements;

        console.log(fname.value);
        console.log(lname.value);
        console.log(email.value);
        console.log(mobile.value);


        /*
        https://www.techiediaries.com/php-react-rest-api-crud-tutorial/
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('city', this.state.city)
        formData.append('country', this.state.country)
        formData.append('job', this.state.job)

        axios({
            method: 'post',
            url: '/api/contacts.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response)

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });*/
    };

    return(
        <>
            <div className="manageDivBoxForm">
                <form onSubmit={onSubmit}>

                    First Name: <input type="text" name="fname" id="fname" onChange={inputChange} placeholder="Your First Name" /><br/>
                    Last Name: <input type="text" name="lname" id="lname" onChange={inputChange} placeholder="Your Last Name" /><br/>
                    Email: <input type="text" name="email" id="email" onChange={inputChange} placeholder="Your Email" /><br/>
                    Mobile: <input type="text" name="mobile" id="mobile" onChange={inputChange} placeholder="Your Mobile" /><br/>
                    <button type="submit" className="buttonClass">Click Here</button>
                </form>
            </div>
        </>
    );
}

/* ============================================ Concate ARRAY (Spread Operator) ==================================== */
const fullname = ["Shubham", "Verma"]; //array
//Need to add fullname array in another array
const biodata = ["Male", "Engineear", "Bhadohi", ...fullname]; //with the help of ... we can add array into another array (push)
const history = ["15-05-1991", "Sunday", "01.18"]; //with the help of ... we can add array into another array (push)
const combine = [...fullname, ...history];
console.log(fullname);
console.log(biodata);
console.log(combine);

export default Form;