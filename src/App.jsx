import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  const [cartCount, setCartCount] = useState(0);

  // Function to update the cart count
  const updateCartCount = (increment) => {
    setCartCount(cartCount + increment);
  };

  return (
    <div>
      <Header cartCount={cartCount} />
      <Body updateCartCount={updateCartCount} />
      <Footer />
    </div>
  );
}


export default App
