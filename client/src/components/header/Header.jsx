import React from 'react'

import { BsSearch } from 'react-icons/bs'
import { FiCamera } from 'react-icons/fi'

import './header.css'

const Header = (props) => {
    return (
        <header>
            <div className="header-container">
                <a href="http://localhost:3000" alt="Siiimple Photo Gallery">
                    <FiCamera size="2.5rem" />
                </a>
                <div className="header-container-buttons">
                    <div className="header-container-buttons__item">
                        <button onClick={props.toggleCategoriesMenu}>Todas as Categorias</button>
                    </div>
                    <div className="header-container-buttons__item">
                        <div 
                            className="header-container-buttons__item__search-icon"
                            onClick={props.toggleOpenSearch}>
                            <BsSearch size="1.5rem" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
