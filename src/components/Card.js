import React, {useState} from 'react'
import './Card.css'
import Rating from 'react-rating'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'
import { MdArrowRightAlt, MdNavigateNext, MdNavigateBefore} from 'react-icons/md'

function Card({ title, year, size, priceDiscount, rating, newOrOld, numReview, price, colors, type, brand, images, body }) {
    //da fare lo slider delle immagini

    const [heartClicked, setHeartClicked] = useState(false);
    const [indexImage, setIndexImage] = useState(0);

    const nextImage = () => {
        if(images[indexImage+1]!=null)
            setIndexImage(indexImage+1)
        else
            setIndexImage(0);   
    }
    const prevImage = () =>{
        if(images[indexImage-1]!=null)
            setIndexImage(indexImage-1)
        else
            setIndexImage(images.length - 1);
    }
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='like'>
                {(!heartClicked && 
                <button className='likeButton' onClick={() => setHeartClicked(true)}><AiOutlineHeart size={20}/></button>)
                 || 
                (heartClicked && <button className='likeButton' onClick={()=>setHeartClicked(false)}><AiFillHeart size={20} /></button>)}
                </div>
                {(newOrOld === 'USATO' &&
                <div className='old'>
                    {newOrOld}
                </div>)
                 || (newOrOld === 'NUOVO' && <div className='new'>
                    {newOrOld}
                </div>)}
            </div>
            <div className='image-container'>
                <img src={images[indexImage]} alt='' className='image' />
            </div>
            <div className='btn-images'>
                <button className='btn-icon' onClick={prevImage}><MdNavigateBefore size={20}/></button>
                <button className='btn-icon' onClick={nextImage}><MdNavigateNext size={20}/></button>
            </div>
            <div>
                {[...images].map((e, i) => {
                    if(i===indexImage)
                        return <div className='slideDisplayed'> </div>
                    else
                        return <div className='slide'> </div>
                    
                })}
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <div className='card-brand'>
                        <h3>{brand} | {year}</h3>
                        <div className='rating'>
                            <Rating
                                initialRating={rating}
                                emptySymbol={<IoIosStarOutline/>}
                                fullSymbol={<IoIosStar/>}
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
                        SCOPRI <MdArrowRightAlt />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card