import React from 'react'

import '../App.css'

function Search(props) {
   //searchbar to filter contacts
   
    return(
        <div className="search">
            { props.view === 'contacts' ? <input type="text" id="search-bar" placeholder="Search here..." onChange={(e) => props.searchContacts(e.target.value)} ></input> : null}
        </div>
    )
}

export default Search