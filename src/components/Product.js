import React from 'react'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

export const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product__container">
        <div className="product__info">
            <p className="product__detail">
                {title}
            </p>
            <p className="product__price">
                <small>$</small>
                <strong>{ price }</strong>
            </p>
        </div>
        <div className="product__rating">
            {
                Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarPurple500Icon                  className="product__star"/>
                    )) 
            }
           
        </div>
        <div className="product__image">
            <img src={image} alt="" />
        </div>
        <button className="btn__add-basket">
            Añadir a la canasta
        </button>
    </div>
  )
}
