import React from 'react'

import '../App.css'

function ContactCard(props) {
    //container to display individual contact info
    const contact = props.contact

    return (
        <div className="contact-card" >
            <p>
                {contact.first_name} {contact.last_name}
            </p>
            <span>Phone Number: {contact.phone_number}</span>
            <br></br>
            <span>Email: {contact.email}</span>
            <br></br>
            <span>Notes:</span>
            <br></br>
            <p>{contact.notes}</p>
        </div>
    )
}

export default ContactCard