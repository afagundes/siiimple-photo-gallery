import React from 'react'

import Photo from '../photo/Photo'

import './photoColumn.css'

const PhotoColumn = props => {
    return (
        <div className="photos__column">
            {
                props.photos.map((photo, index) => ( <Photo photoData={photo} key={index} /> ))
            }
        </div>
    )
}

export default PhotoColumn
