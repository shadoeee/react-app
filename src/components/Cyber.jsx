import React from 'react'
import Card from './Card'
import cyber from './images/cyber.jpeg'
import c1 from './images/c1.jpg'
import c2 from './images/c2.jpg'
import c3 from './images/c3.jpg'
import '../components/App.css'

function Cyber() {
  return (
    <div className='cyber'>
      <div className="row">
        <div className="card-size">
          <Card title='What Is Hacking? Types of Hacking & More' image={cyber} description='Have you ever wondered what hacking is all about? It’s a big deal in today’s' url='https://www.guvi.in/blog/what-is-hacking/' />
        </div>
        <div className="card-size">
          <Card title='Cybersecurity Vs Ethical Hacking: Top 10 Differences' image={c1} description='Cybersecurity & Ethical hacking and have been key in making sure that your data online' url='https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/' />
        </div>
        <div className="card-size">
          <Card title='What is Cybersecurity? Importance and its uses & the growing challenges in 2023!

' image={c2} description='Look around today, you will witness that we are more reliant on technology and devices

' url='https://www.guvi.in/blog/what-is-cybersecurity/'/>
        </div>
        <div className="card-size">
          <Card title='Top 10 Ethical Hacking Books for Beginner to Advanced

' image={c3} description='Did you know that according to the University of Maryland hackers attack every 39 seconds

' url='https://www.guvi.in/blog/best-ethical-hacking-books/'/>
        </div>
      </div>
      
    </div>
  )
}

export default Cyber