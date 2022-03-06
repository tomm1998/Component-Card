import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating'
function Card({ title, year, size, priceDiscount, rating, newOrOld, numReview, price, colors, type, brand, imageUrl, body }) {
    //da mettere a posto le icon delle stars e del cuore
    //da fare lo slider delle immagini
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='like'>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </div>
                <div className='newOrOld'>
                    {newOrOld}
                </div>
            </div>
            <div className='image-container'>
                <img src={imageUrl} alt='' className='image' />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <div className='card-brand'>
                        <h3>{brand} | {year}</h3>
                        <div className='rating'>
                            <Rating
                                initialRating={rating}
                                emptySymbol={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
                                fullSymbol={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
                            />
                            <span className='text-review'>{numReview}</span>
                        </div>
                    </div>
                    <div>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='description'>
                        <p>{body}</p>
                    </div>
                    <div className='card-type'>
                        <p><span className='type-bike'>E-BIKE </span>{type}</p>
                    </div>
                    <div className='card-size-bike'>
                        <p><span className='size-title'> TAGLIA </span> {size}</p>
                    </div>
                    <div className='card-colors-bike'>
                        <p><span className='size-title'>COLORI</span>  {colors}</p>
                    </div>
                    <div className='card-price-bike'>
                        <span>{priceDiscount}</span>
                        <span className='price'>{price}</span>
                    </div>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='checkbox'>
                    <label>
                        <input type="checkbox" className='box' />
                        COMPARA
                    </label>
                </div>
                <div className=''>
                    <button className='btn'>
                        SCOPRI <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card