import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {handleAddToCart} = props;
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='small-detail'><small>Manufacturer : {seller}</small></p>
                <p className='small-detail'><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='cart-btn'>
                <p className='text-btn'>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;