import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './components/App.css'
import All from './components/All';
import Fullstack from './components/Fullstack';
import Datascience from './components/Datascience';
import Cyber from './components/Cyber';
import Career from './components/Career';

function App() {

   const style = {
    padding:20,
    }
  

  return (
    <Router>
      <div>
        <div className="navigation-menu">
      <Link to="/" style={ style} className='size'>All</Link>
      <Link to="/fullstack" style={ style} className='size'>Full Stack Development</Link>
      <Link to="/data" style={ style} className='size'>Data Science</Link>
      <Link to="/cyber" style={ style} className='size'>Cyber Security</Link>
      <Link to="/career" style={ style} className='size'>Career</Link>
     </div>
        <Routes>
              <Route path='/' element={<All/>}/>
              <Route  path='/fullstack' element={<Fullstack/>}/>
              <Route path='/data' element={<Datascience/>}/>
              <Route path='/cyber' element={<Cyber/>}/>
          <Route path='/career' element={<Career />} />
          <Route path='*' element={<All />} />
          </Routes>
    </div>
    </Router>
  )
}

export default App
