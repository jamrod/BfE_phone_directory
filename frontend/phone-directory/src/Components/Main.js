import React, { useEffect, useState } from 'react'

import Controls from './Controls'
import List from './List'

import '../App.css'


function Main(props){
    const baseUrl = "http://127.0.0.1:8000/"
    const [contacts, setContacts] = useState([{}])
  
    function getContacts(){
      let url = `${baseUrl}contacts`
      fetch(url)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setContacts(response)
         })
        .catch(err => console.log(err))
    }

    return(
        <main>
            <Controls getAll={getContacts}></Controls>
            <List contacts={contacts}></List>
        </main>
    )
}

export default Main