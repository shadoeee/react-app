import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartButton from './CartButton';




function Body({ updateCartCount }) {

  // Create state variables for each product
  const [isInCart1, setIsInCart1] = useState(false);
  const [isInCart2, setIsInCart2] = useState(false);
  const [isInCart3, setIsInCart3] = useState(false);
  const [isInCart4, setIsInCart4] = useState(false);
  const [isInCart5, setIsInCart5] = useState(false);
  const [isInCart6, setIsInCart6] = useState(false);
  

  const handleToggleCart1 = (newStatus) => {
    setIsInCart1(newStatus);
    updateCartCount(newStatus ? 1 : -1);
  };

  const handleToggleCart2 = (newStatus) => {
    setIsInCart2(newStatus);
    updateCartCount(newStatus ? 1 : -1);
  };

  const handleToggleCart3 = (newStatus) => {
    setIsInCart3(newStatus);
    updateCartCount(newStatus ? 1 : -1);
  };

  const handleToggleCart4 = (newStatus) => {
    setIsInCart4(newStatus);
    updateCartCount(newStatus ? 1 : -1);
  };

  const handleToggleCart5 = (newStatus) => {
    setIsInCart5(newStatus);
    updateCartCount(newStatus ? 1 : -1);
  };

  const handleToggleCart6 = (newStatus) => {
    setIsInCart6(newStatus);
    updateCartCount(newStatus ? 1 : -1);
  };
  
  

  return (
    <div >
        <div className='banner'>
              <h1>Shop in style</h1>
              <h3>with this shop homepage template</h3>
          </div>
          <div className='card-design1'>
              <Card style={{ width: '18rem' }}>
                  
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title >Fancy Product</Card.Title>
        <Card.Text className='space-size1'>
          $40.00 - $80.00
            </Card.Text>
          
        <Button variant="outline-dark" >View options</Button>
      </Card.Body>
              </Card>
              
              <Card style={{ width: '18rem' }}>
                  <h5>sale</h5>
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title>Special Item</Card.Title>
        <Card.Text>
          ⭐⭐⭐⭐⭐
            </Card.Text>
            <Card.Text>
          <span className="line-through-text">$20.00</span> $18.00
        </Card.Text>
            <CartButton
              onToggle={handleToggleCart1}
              isInCart={isInCart1}
              updateCartCount={updateCartCount}
            />
      </Card.Body>
              </Card>
              
              <Card style={{ width: '18rem' }}>
                  <h5>sale</h5>
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title>Sale Item</Card.Title>
        <Card.Text>
          <span className="line-through-text">$50.00</span> $25.00
            </Card.Text>
            <br></br>
            <br></br>
        <CartButton
              onToggle={handleToggleCart2}
              isInCart={isInCart2}
              updateCartCount={updateCartCount}
            />
      </Card.Body>
              </Card>
              
               <Card style={{ width: '18rem' }}>
                  
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title>Popular Item</Card.Title>
        <Card.Text>
          ⭐⭐⭐⭐⭐
            </Card.Text>
            <Card.Text>
          $40.00
        </Card.Text>
        <CartButton
              onToggle={handleToggleCart3}
              isInCart={isInCart3}
              updateCartCount={updateCartCount}
            />
      </Card.Body>
    </Card>
          
              <Card style={{ width: '18rem' }}>
                  <h5>sale</h5>
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title>Sale Item</Card.Title>
        <Card.Text>
          <span className="line-through-text">$50.00</span> $25.00
            </Card.Text>
            <br></br>
            <br></br>
        <CartButton
              onToggle={handleToggleCart4}
              isInCart={isInCart4}
              updateCartCount={updateCartCount}
            />
      </Card.Body>
              </Card>
              
              <Card style={{ width: '18rem' }}>
                  
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title className='title-size'>Fancy Product</Card.Title>
        <Card.Text className='space-size2'>
          $120.00-$280.00
            </Card.Text>
            
        <Button variant="outline-dark">View options</Button>
      </Card.Body>
              </Card>
              
              <Card style={{ width: '18rem' }}>
                  <h5>sale</h5>
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title>Special Item</Card.Title>
        <Card.Text>
          ⭐⭐⭐⭐⭐
            </Card.Text>
            <Card.Text>
          <span className="line-through-text">$20.00</span> $18.00
        </Card.Text>
        <CartButton
              onToggle={handleToggleCart5}
              isInCart={isInCart5}
              updateCartCount={updateCartCount}
            />
      </Card.Body>
              </Card>
              
               <Card style={{ width: '18rem' }}>
                  
                  <figure>
      <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.78DZBgvwgpcB00yi7BPZBgHaFi%26pid%3DApi&f=1&ipt=32864e04578468dbf013383858f8afd202ebd2d42b9765c7920da3bcb0763722&ipo=images" alt='image'></Card.Img><figcaption>450 X 300</figcaption>
      </figure>
        <Card.Body className="text-center">
        <Card.Title>Popular Item</Card.Title>
        <Card.Text>
          ⭐⭐⭐⭐⭐
            </Card.Text>
            <Card.Text>
          $40.00
        </Card.Text>
        <CartButton
              onToggle={handleToggleCart6}
              isInCart={isInCart6}
              updateCartCount={updateCartCount}
            />
      </Card.Body>
    </Card>
          </div>
    </div>
  )
}

export default Body
