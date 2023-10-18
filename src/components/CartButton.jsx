import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function CartButton({ onToggle, isInCart, updateCartCount }) {
  const handleCheck = () => {
    onToggle(!isInCart);

    // Update cart count when the button is clicked
    if (!isInCart) {
      updateCartCount(1); // Increment the count when adding to the cart
    } else {
      updateCartCount(-1); // Decrement the count when removing from the cart
    }
  };

  return (
    <Button variant="outline-dark" onClick={handleCheck}>
      {isInCart ? 'Remove from cart' : 'Add to cart'}
    </Button>
  );
}

export default CartButton;
