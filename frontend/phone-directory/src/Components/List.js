import React from 'react'

import '../App.css'

function List(props){

    function showContacts(p){
        if (p.contacts.length > 0){
            return (p.contacts.map(contact => (
                <div className="contact-card" key={`${contact.first_name}-${contact.last_name}`}>
                    <p>
                        {contact.first_name} {contact.last_name}
                    </p>
                    <span>Phone Number: {contact.phone_number}</span>
                    <br></br>
                    <span>Notes:</span>
                    <br></br>
                    <p>{contact.notes}</p>
                </div>
            ))
            )
        } else {
            return (<p>No Data</p>)
        }
    }

    return(
        <div className="contact-list">
            {showContacts(props)}
        </div>
    )
}

export default List