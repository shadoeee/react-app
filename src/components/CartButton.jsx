import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function CartButton() {
  const [isInCart, setIsInCart] = useState(true);

  const handleCheck = () => {
    setIsInCart(!isInCart);
  };

  return (
    <Button variant="outline-dark" onClick={handleCheck}>
      {isInCart ? 'Add to cart' : 'Remove from cart'}
    </Button>
  );
}

export default CartButton;
