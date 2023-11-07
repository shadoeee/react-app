import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './CartPage.css';

const CartPage = ({ data }) => {
  const { cartItems, updateCartItem, addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState([]);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 0) {
      if (newQuantity === 0) {
        // If the quantity becomes zero, remove the item from addedToCart.
        setAddedToCart((prevAddedToCart) =>
          prevAddedToCart.filter((item) => item.id !== itemId)
        );
      }
      updateCartItem(itemId, newQuantity);
    }
  };

  const handleAddToCart = (item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      updateCartItem(item.id, existingCartItem.quantity + 1);
    } else {
      addToCart(item);
      setAddedToCart([...addedToCart, { ...item, quantity: 1 }]);
    }
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1 className="page-title">Cart Page</h1>
      <div className="cart-container">
        {data.map((item) => (
          <div className="container" key={item.id}>
            <div className="cart-item">
              <img src={item.images[0]} alt={item.title} className="item-image" />
              <h2 className="item-title">{item.title}</h2>
              <p className="item-price">Price: ${item.price}</p>
              <p className="item-quantity">
                Quantity: {cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0}
              </p>
              <div className="cart-item-buttons">
                <button
                  className="quantity-btn"
                  onClick={() =>
                    handleQuantityChange(item.id, cartItems.find((cartItem) => cartItem.id === item.id)?.quantity - 1 || 0)
                  }
                >
                  Remove from cart
                </button>
                <button className="quantity-btn1" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-info">
        
      

      <div >
        <h3>Items in Cart:</h3>
        <ul className='list'>
          {addedToCart.map((addedItem) => (
            <li key={addedItem.id}>
              <div className="cart-container">
                <div className="cart-item1">
                  <img src={addedItem.images[0]} alt={addedItem.title} className="item-image" />
                  <h2 className="item-title">{addedItem.title}</h2>
                  <p className="item-price">Price: ${addedItem.price}</p>
                  {addedItem.quantity > 1 ? (
                    <p className="item-quantity">Quantity: {addedItem.quantity}</p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
              </ul>
             <b> <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Amount: ${getTotalAmount()}</p></b>
          </div>
          </div>
    </div>
  );
};

export default CartPage;
