import React from 'react';

function Heading() {
    var checkTest = <p>All fields are mendatory.</p>;
    return checkTest
}

function Create_account() {
    return <p>Please fill in this form to create an account.</p>
}

function Paragraph() {
    return <p>Please read and fill fields befor submit.</p>
}

export default Heading;
export { Paragraph, Create_account };