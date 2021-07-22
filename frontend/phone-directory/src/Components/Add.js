import React from 'react'

import '../App.css'

function Add() {

    const fNameField = document.querySelector('#fname')
    const lNameField = document.querySelector('#lname')
    const phoneField = document.querySelector('#phone')
    const emailField = document.querySelector('#email')
    const notesField = document.querySelector('#notes')
    console.log(fNameField.value)

    function createContact(e){
        e.preventDefault()
        let data = {
            "first_name": fNameField.value,
            "last_name": lNameField.value,
            "phone_number": phoneField.value,
            "email": emailField.value,
            "notes": notesField.value
        }
        console.log(data)

        fetch("http://localhost:8000/contacts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resetForm())
        .catch(err => console.log(err))
    }

    function resetForm() {
        fNameField.value = ''
        lNameField.value = ''
        phoneField.value = ''
        emailField.value = ''
        notesField.value = ''
    }

    return(
        <div className='create-form'>
            <form onSubmit="createContact">
                <label for='fname'>First Name</label>
                <input type='text' id='fname'></input>
                <label for='lname'>Last Name</label>
                <input type='text' id='lname'></input>
                <label for='phone'>Phone Number</label>
                <input type='tel' id='phone'></input>
                <label for='email'>Email Address</label>
                <input type='email' id='email'></input>
                <label for='notes'>Notes</label>
                <textarea id='notes' rows='5'></textarea>
            </form>
            <label for='upload'>Click 'Upload' when complete. </label>
            <button id='upload' onClick={(e=> {createContact(e)})}>Upload</button>
        </div>
    )
}

export default Add