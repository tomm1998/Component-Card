import React, {useState} from 'react'
import './Card.css'
import Rating from 'react-rating'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'
import { MdArrowRightAlt, MdNavigateNext, MdNavigateBefore} from 'react-icons/md'

function Card({ title, year, size, priceDiscount, rating, newOrOld, numReview, price, colors, type, brand, imageUrl, body }) {
    //da fare lo slider delle immagini

    const [heartClicked, setHeartClicked] = useState(false);
    const [indexImage, setIndexImage] = useState(0);
    const [images, setImages] = useState(imageUrl);

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
                <AiOutlineHeart onClick={() => setHeartClicked(true)}/>)
                 || 
                (heartClicked && <AiFillHeart onClick={()=>setHeartClicked(false)}/>)}
                </div>
                {(newOrOld === 'Usato' &&
                <div className='old'>
                    {newOrOld}
                </div>)
                 || (newOrOld === 'Nuovo' && <div className='new'>
                    {newOrOld}
                </div>)}
            </div>
            <div className='image-container'>
                <MdNavigateBefore onClick={prevImage}/>
                <img src={images[indexImage]} alt='' className='image' />
                <MdNavigateNext onClick={nextImage}/>
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