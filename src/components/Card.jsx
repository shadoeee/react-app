import React from 'react'
// import '../src/App'
import './Card.css'





function Card(props) {
  const more='>>'
  return (
    <div className="card text-center">
      <div className="overflow">
        <img  id='image'  src={props.image} alt='image'/>
      </div>
      <div className='card-body-text'>
        <h4 className="card-title">{props.title }</h4>
        <p className='card-text text-secondary'>{props.description }</p>
        <a id='read' href={props.url } >Read more{more} </a>
      </div>


   </div>
      
  
  )
}

export default Card