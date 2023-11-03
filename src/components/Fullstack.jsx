import React from 'react'
import '../components/App.css'
import Card from './Card'
import f from '../components/images/full-stack-web-development.jpeg'
import f1 from '../components/images/fullstack1.png'
import f2 from '../components/images/fullstack4.jpeg'
import f3 from '../components/images/full-stack3.png'

function Fullstack() {
  return (
    <div className='fullstack'>
      <div className="row">
        <div className="card-size">
          <Card  title='The Ultimate Guide to Real-World Full-Stack Development Applications' url='https://www.guvi.in/blog/top-must-know-full-stack-development-applications/' description='Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can' image={f} />
        </div>
        <div className="card-size">
          <Card title='Top Skills To Become a Full-Stack Developer in 2023' url='https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/' description='Are you interested in becoming a great full-stack developer? If so, then you’re at the' image={f1} />
        </div>
        <div className="card-size">
          <Card title='Top 10 Full-Stack Developer Frameworks in 2023' url='https://www.guvi.in/blog/full-stack-developer-frameworks/' description='In the ever-evolving world of technology, the demand for full stack developers is at an' image={ f2} />
        </div>
        <div className="card-size">
          <Card title='5 Career Opportunities for Full Stack Development' url='https://www.guvi.in/blog/career-opportunities-for-full-stack-development/' description='Ever wondered what awesome job opportunities are waiting for you in the field of Full Stack Development? Well, this blog is just for you!' image={f3} />
        </div>
      </div>
      
    </div>
  )
}

export default Fullstack
