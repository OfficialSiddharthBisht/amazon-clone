import React from 'react'
import "../styling/product.css";

function Product({id, title, price, rating , image}) {
  return (
    <div className='product'>
        <p>{title}</p>
        <p className='product_'>
            <small>Rs </small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            
        </div>
    </div>
  )
}

export default Product