import React, { useState } from 'react'

import { BsSearch } from 'react-icons/bs'

import './search.css'

const Search = props => {
    const [query, setQuery] = useState('')
    
    const handleQuery = event => {
        setQuery(event.target.value);
    }

    const handleEnter = event => {
        if (event.key === 'Enter') submitQuery();
    }

    const submitQuery = () => {
        props.searchPhotos(query);
    }

    return (
        <div className="search">
            <div className="search-container">
                <input 
                    className="search-container__input"
                    type="search" 
                    placeholder="O que deseja procurar?"
                    autoFocus
                    onChange={handleQuery}
                    onKeyDown={handleEnter} />

                <button className="search-container__button" onClick={submitQuery}>
                    <BsSearch size="1.5rem" />
                </button>
            </div>
        </div>
    )
}

export default Search
