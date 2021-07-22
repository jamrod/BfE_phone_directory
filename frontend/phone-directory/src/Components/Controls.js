import React from 'react'
import Search from './Search'

import '../App.css'

function Controls(props) {

    return(
        <div>
            <button onClick={() => props.getAll()}>Show Contacts</button>
            <button onClick={() => console.log("go to add now")}>Add Contacts</button>
            <Search></Search>
        </div>
    )
}

export default Controls