import React from 'react'

import { AiOutlineHeart } from 'react-icons/ai'

import avatar from '../../assets/images/avatar.jpg'
import './photo.css'

const Photo = props => {
    const photo = props.photoData

    return (
        <article className="photo-item">
            <a href={photo.url} className="photo-item__link">
                <img className="photo-item__img" src={photo.src.large} alt="Pexels" />
            </a>
            <div className="photo-item__bottom">
                <a href={photo.photographer_url} className="photo-item__bottom__photographer">
                    <img src={avatar} className="photo-item__bottom_photographer__img" alt={photo.photographer} />
                    <span className="photo-item__bottom__photographer__name">
                        {photo.photographer}
                    </span>
                </a>
                <button className="photo-item__bottom__actions">
                    <AiOutlineHeart size="1.7rem" />
                </button>
            </div>
        </article>
    )
}

export default Photo
