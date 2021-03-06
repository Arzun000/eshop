import React from 'react';
import "./Product.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p><StarBorderIcon/></p>
                        ))}
                        </div>
                </div>
                <img src={image} alt="product-image"></img>
                <button>Add to Basket</button>
            </div>
            
        </div>
    );
}
