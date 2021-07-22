import React from 'react'
import Search from './Search'

import '../App.css'

function Controls(props) {

    return(
        <div className="controls">
            <button onClick={() => props.getAll()}>Show Contacts</button>
            <button onClick={() => props.changeView("add")}>Add Contacts</button>
            <Search searchContacts={props.searchContacts}></Search>
        </div>
    )
}

export default Controls