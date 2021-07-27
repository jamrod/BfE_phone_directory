import React, { useState } from 'react'

import '../App.css'

function Add() {
    //form to add a new contact

    // state to hold form fields data
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [phoneField, setPhoneField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [notesField, setNotesField] = useState('')

    function createContact(e){
        //function to upload a new contact
        e.preventDefault()
        let data = {
            "first_name": fName,
            "last_name": lName,
            "phone_number": phoneField,
            "email": emailField,
            "notes": notesField
        }

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
        //set form fields back to blank
        setFName('')
        setLName('')
        setPhoneField('')
        setEmailField('')
        setNotesField('')
    }

    return(
        <div className='create-form'>
            <form onSubmit="createContact">
                <label htmlFor='fname'>First Name</label>
                <input type='text' id='fname' onChange={e => setFName(e.target.value)} value={fName}></input>
                <label htmlFor='lname'>Last Name</label>
                <input type='text' id='lname' onChange={e => setLName(e.target.value)} value={lName}></input>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' onChange={e => setPhoneField(e.target.value)} value={phoneField}></input>
                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' onChange={e => setEmailField(e.target.value)} value={emailField}></input>
                <label htmlFor='notes'>Notes</label>
                <textarea id='notes' rows='5' onChange={e => setNotesField(e.target.value)} value={notesField}></textarea>
            </form>
            <label htmlFor='upload'>Click 'Upload' when complete. </label>
            <button id='upload' onClick={(e=> {createContact(e)})}>Upload</button>
        </div>
    )
}

export default Add