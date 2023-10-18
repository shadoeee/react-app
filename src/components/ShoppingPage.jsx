import React, { useState } from 'react';
import CartButton from './CartButton';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ShoppingPage() {
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div>
      <div className='cart-button-container'>
        <Button className='cart-button' variant="outline-dark">
          <FontAwesomeIcon icon={faCartShopping} /> Cart <span id='number-count'>{itemCount}</span>
        </Button>
      </div>
      <CartButton onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ShoppingPage;
