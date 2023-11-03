import React from 'react'
import Card from './Card'
import d from '../components/images/datascience.webp'
import d1 from '../components/images/datascience1.webp'
import d2 from '../components/images/datascience2.webp'
import d3 from '../components/images/datascience3.webp'
import '../components/App.css'

function Datascience() {
  return (
    <div className='datasc'>
      <div className="row">
        <div className="card-size">
          <Card title='10 Best Data Science Frameworks in 2023' url='https://www.guvi.in/blog/10-best-data-science-frameworks/' description='Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.' image={d} />
        </div>
        <div className="card-size">
          <Card title='Future of Data Science and How You Can Thrive With It' url='https://www.guvi.in/blog/the-future-of-data-science/' description='‍ Data Science has emerged as a revolutionary field in the technology world, transforming the' image={d1} />
        </div>
        <div className="card-size">
          <Card title='Extraordinary Data Science Projects for Beginners As Well as Veterans' url='https://www.guvi.in/blog/data-science-projects/' description='As the demand for data and the people that can conquer it, i.e. Data Scientists' image={d2} />
        </div>
        <div className="card-size">
          <Card title='Best Data Science Books to Learn 2023' url='https://www.guvi.in/blog/data-science-books-to-learn/' description='Today, we’re going to talk about something really cool: data science. It’s all about using' image={d3} />
        </div>
      </div>
      
    </div>
  )
}

export default Datascience