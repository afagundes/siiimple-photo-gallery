import React from 'react'

import './search.css'

const Search = () => {
    return (
        <div className="search">
            <div className="search-container">
                <input 
                    className="search-container__input"
                    type="search" 
                    placeholder="O que deseja procurar?"
                    autoFocus="true" />
            </div>
        </div>
    )
}

export default Search
