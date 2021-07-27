import React from 'react'
import Search from './Search'

import '../App.css'

function Controls(props) {
    // container for navigation and searchbar
    
    return(
        <div className="controls">
            <button onClick={() => props.getAll()} id="show-button">Show Contacts</button>
            <button onClick={() => props.changeView("add")} id="add-button">Add Contacts</button>
            <Search searchContacts={props.searchContacts} view={props.view}></Search>
        </div>
    )
}

export default Controls