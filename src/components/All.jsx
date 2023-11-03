import React from 'react'
import Card from './Card'
import '../components/App.css'
import a from '../components/images/career.jpeg'
import a1 from '../components/images/full-stack-web-development.jpeg'
import a2 from '../components/images/cyber.jpeg'
import a3 from '../components/images/datascience.webp'

function All() {
  return (
    <div className='all'>
  <div className="row">
    <div className="card-size">
      <Card title='The Impact of Remote Work in Hiring Tech Professionals' url='https://www.guvi.in/blog/impact-of-remote-work-in-hiring-tech-professional/' description='In a fast-paced business landscape, the conventional methods of recruitment have blemished. Remote hiring has' image={a} />
    </div>
    <div className="card-size">
      <Card title='9 Benefits of Partnering with Technical Training Program' url='https://www.guvi.in/blog/benefits-of-partnering-with-technical-training-program/' description='In today’s dynamically evolving business world, organizations are constantly leveraging all possible ways to stay' image={a1} />
    </div>
    <div className="card-size">
      <Card title='Best Cloud Computing Books That You Shouldn’t Miss in 2023' url='https://www.guvi.in/blog/best-cloud-computing-books/' description='No matter how much technology evolves or how digital the world gets, reading books can' image={a2} />
    </div>
    <div className="card-size">
      <Card title='How Long It Would Take to Master Cloud Computing Engineering' url='https://www.guvi.in/blog/how-long-it-would-take-to-master-cloud-computing-engineering/' description='In our modern world, technology is everywhere, making our lives more convenient and connected. One' image={a3} />
    </div>
  </div>
</div>


  )
}

export default All