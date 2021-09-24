import React, { useEffect, useState } from 'react'

import fetchCategories from '../../api/CategoriesAPI'
import { fetchPhotos, fetchCategoryPhotos, photoColumns } from '../../api/PhotosAPI'

import Categories from '../categories/Categories'
import Search from '../search/Search'
import PhotoColumn from '../photo-column/PhotoColumn'

import './main.css'

const Main = (props) => {
    const [categories, setCategories] = useState([])
    const [photos, setPhotos] = useState(photoColumns)

    useEffect(() => {
        fetchCategories(setCategories)
        fetchPhotos(setPhotos)
    }, [])

    const fetchCategory = id => {
        fetchCategoryPhotos(id, setPhotos)
        props.toggleCategoriesMenu()
    }

    return (
        <main>
            { props.openCategories ? <Categories categories={categories} fetchCategory={fetchCategory} /> : null }
            { props.openSearch ? <Search /> : null }
            
            <div className="main-container">
                <div className="photos">
                    {
                        photos.columns.map((column, index) => (
                            <PhotoColumn photos={column} key={index} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Main
