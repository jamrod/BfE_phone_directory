import React, { useEffect, useState } from 'react'

import Controls from './Controls'
import List from './List'
import Add from './Add'

import '../App.css'


function Main(props){
    const baseUrl = "http://127.0.0.1:8000/"
    const [contacts, setContacts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [view, setView] = useState("contacts")
    // const [searchField, setSearchField] = useState("")
  
    function getContacts() {
      let url = `${baseUrl}contacts`
      fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setContacts(response)
          setFiltered(response)
          if (view === "add"){
            setView("contacts")
          }
         })
        .catch(err => console.log(err))
    }

    function filterContacts(str){
        let filtered = contacts.filter(contact => {
            let searchable = Object.values(contact).join(' ')
            return searchable.includes(str)
        })
        setFiltered(filtered)
    }


    return(
        <main>
            <Controls getAll={getContacts} changeView={setView} searchContacts={filterContacts}></Controls>
            {view === "contacts"? <List contacts={filtered}></List> : <Add></Add>}
        </main>
    )
}

export default Main