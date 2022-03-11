import React, {useState} from 'react'
import './Card.css'
import Rating from 'react-rating'
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'
import { MdArrowRightAlt, MdNavigateNext, MdNavigateBefore} from 'react-icons/md'
import translate from '../i18n/translate'

function Card(props) {
    const data = props.data;
    const [heartClicked, setHeartClicked] = useState(false);
    const [indexImage, setIndexImage] = useState(0);

    const nextImage = () => {
        if(data.images[indexImage + 1]!=null)
            setIndexImage(indexImage + 1)
        else
            setIndexImage(0);   
    }
    const prevImage = () =>{
        if(data.images[indexImage - 1]!=null)
            setIndexImage(indexImage - 1)
        else
            setIndexImage(data.images.length - 1);
    }
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='like'>
                {(!heartClicked && 
                <button data-testid='unlike' className='likeButton' onClick={() => setHeartClicked(true)}><AiOutlineHeart size={20}/></button>)
                 || 
                (heartClicked && <button data-testid='like' className='likeButton' onClick={() => setHeartClicked(false)}><AiFillHeart size={20} /></button>)}
                </div>
                {(data.newOrUsed === 'USATO' &&
                <div className='used'>
                    {translate("used")}
                </div>)
                 || (data.newOrUsed === 'NUOVO' && <div className='new'>
                    {translate("new")}
                </div>)}
            </div>
            <div className='image-container'>
                <img data-testid='image' src={data.images[indexImage]} alt='' className='image' />
            </div>
            <div className='btn-images'>
                <button className='btn-icon' data-testid='prev-image' onClick={prevImage}><MdNavigateBefore size={20}/></button>
                <button className='btn-icon' data-testid='next-image' onClick={nextImage}><MdNavigateNext size={20}/></button>
            </div>
            <div className='flexbox'>
                {[...data.images].map((elem, index) => {
                    if(index === indexImage)
                        return <div key={index} data-testid='index-slider' className='slideDisplayed'><span className='indexImage'>{index}</span></div>
                    else    
                        return <div key={index} className='slide'></div>            
                })}
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <div className='card-brand'>
                        <h3>{data.brand} | {data.year}</h3>
                        <div className='rating'>
                            <Rating
                                initialRating={data.reviews.reduce((total, next) => total + next.rating, 0) / data.reviews.length}
                                emptySymbol={<IoIosStarOutline/>}
                                fullSymbol={<IoIosStar/>}
                            />
                            <span className='text-review'>{data.reviews.length}</span>
                        </div>
                    </div>
                    <div>
                        <h3>{data.title}</h3>
                    </div>
                </div>
                <div className='card-body'>
                    <div className='description'>
                        <p>{translate("description"+data.id)}</p>
                    </div>
                    <div className='card-type'>
                        <p><span className='type-bike'>E-BIKE </span>{translate("type"+data.id)}</p>
                    </div>
                    <div className='card-size-bike'>
                        <p><span className='size-title'> {translate("size")} </span> {data.size}</p>
                    </div>
                    <div className='card-colors-bike'>
                        <p><span className='size-title'>{translate("colours")}</span> +{data.colors.length}</p>
                    </div>
                    <div className='card-price-bike'>
                        <span>€{data.discount}</span>
                        <span className='price'>€{data.price}</span>
                    </div>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='checkbox'>
                    <label>
                        <input type="checkbox" className='box' />
                        {translate('compare')}
                    </label>
                </div>
                <div className='div-btn'>
                    <button className='btn' onClick={()=> console.log("prova")}>
                    {translate('findout')} <MdArrowRightAlt />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card