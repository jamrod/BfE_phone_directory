import React from 'react'

import '../App.css'

function Search(props) {
   
    return(
        <div className="search">
            <input type="text" id="search-bar" placeholder="Search here..." onChange={(e) => props.searchContacts(e.target.value)} ></input>
        </div>
    )
}

export default Search