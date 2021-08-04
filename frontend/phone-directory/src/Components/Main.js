import React, { useEffect, useState } from 'react'

import Controls from './Controls'
import List from './List'
import Add from './Add'

import '../App.css'


function Main(){
    const baseUrl = "http://127.0.0.1:8000/"
    const [contacts, setContacts] = useState([]) // holds the contacts fetched from the server
    const [filtered, setFiltered] = useState([]) // filtered list of contacts when search has input
    const [view, setView] = useState("contacts") // determines whether the contact list or the add form is displayd

    useEffect(() => {
        if (view === 'contacts') {
            document.querySelector('#show-button').classList.add('active')
            document.querySelector('#add-button').classList.remove('active')
        } else {
            document.querySelector('#add-button').classList.add('active')
            document.querySelector('#show-button').classList.remove('active')
        }
    })
  
    function getContacts() {
        //api-call to get the contacts from the server
        let url = `${baseUrl}contacts`
        fetch(url)
        .then(response => response.json())
        .then(response => {
            setContacts(response)
            setFiltered(response)
            if (view === "add"){
                setView("contacts")
            }
        })
        .catch(err => console.log(err))
        }

    function filterContacts(str){
        //function to filter contacts when search has input
        let filtered = contacts.filter(contact => {
            let searchable = Object.values(contact).join(' ')
            return searchable.includes(str)
        })
        setFiltered(filtered)
    }

    return(
        <main>
            <Controls getAll={getContacts} changeView={setView} searchContacts={filterContacts} view={view}></Controls>
            {view === "contacts"? <List contacts={filtered}></List> : <Add></Add>}
        </main>
    )
}

export default Main