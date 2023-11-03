import React from 'react'
import Card from './Card'
import career from './images/career.jpeg'
import career1 from './images/career1.jpeg'
import career2 from './images/career2.png'
import career3 from './images/career3.jpeg'
import '../components/App.css'

function Career() {
  return (
    <div className='career'>
      <div className="row">
        <div className="card-size">
          <Card title='Product-based Company Vs Service-based Company: Which is Best Choice?' description='Deciding between joining a product-based company vs a service-based company can be pretty challenging when'  image={career } />
        </div>
        <div className="card-size">
          <Card title='Best Product-based Companies for Motion Graphic Designing in 2023' description='Motion graphic designers are the unsung heroes of any company as their designs, and animations' image={career1} />
        </div>
        <div className="card-size">
          <Card title='Top Product-Based Companies for Cloud Engineers 2023' description='In the fast-paced world of technology, cloud engineers are in high demand, driving innovation and

' image={career2} />
        </div>
        <div className="card-size">
          <Card title='6 Mechanical Engineering Webinars and Workshops That You Should Know' description='Mechanical engineering is an exciting field that brings creative ideas to life, be it small' image={career3} />
        </div>
      </div>
      
    </div>

  )
}

export default Career