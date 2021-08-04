import React from 'react'
import ContactCard from './ContactCard'

import '../App.css'

function List(props) {

    function showContacts(contacts) {
        if (contacts.length > 0) {
            return (contacts.map(contact => (
                <ContactCard contact={contact} key={contact.id}></ContactCard>
            ))
            )
        } else {
            return (<p>No Data</p>)
        }
    }

    return (
        <div className="contact-list">
            {showContacts(props.contacts)}
        </div>
    )
}

export default List