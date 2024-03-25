import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from '../redux/action';

const CartPage = () => {

  const cartDetails = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
  }

  const handleDeleteFromCart = (item) => {
    dispatch(delCart(item));
  }

  return (
    <>
      {(cartDetails && cartDetails.length > 0 ? <div>{cartDetails.map((product) => (
        <div className="py-2 my-2 rounded-3 cartItems" key={product.id}>
          <div className='subCart'>
            <div className='cartItemImg'>
              <img src={product.images[0]} alt={product.title} width="180px" height="200px" />
            </div>
            <div className='cartItemDetails'>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <h4>${(product.price) * (product.quantity)}</h4>
              <div className='handleCart d-flex justify-content-center'>
                <button className="btn" onClick={() => handleAddToCart(product)}>+</button>
                <h3>{product.quantity}</h3>
                <button className="btn" onClick={() => handleDeleteFromCart(product)}>-</button>
              </div>
            </div>
          </div >
        </div>
      ))} 
      <div className='d-flex justify-content-center'><button className='btn btn-outline-dark my-2'>Proceed to checkout</button></div>
      </div>
      :
        <div className="px-4 my-5 rounded-3 cartItems">
          <div className="container py-5">
            <div className="row">
              <h3>  Your Cart is Empty </h3>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default CartPage
