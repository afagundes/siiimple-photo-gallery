import React from 'react'

import './categories.css'

const Categories = props => {
    return (
        <section className="categories">
            <div className="categories-container">
                <ul className="categories-container__list">
                    {
                        props.categories.map((item, index) => (
                            <li key={index}>
                                <button 
                                    className="categories-container__list__button" 
                                    onClick={() => props.fetchCategory(item.id)}
                                >    
                                    {item.title} ({item.media_count})
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Categories
