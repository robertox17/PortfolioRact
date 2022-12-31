import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/ContactMe'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className=''>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contactMe' element={<Contact/>}/>
    </Routes>
   
   </Router>
    </div>
  );
}

export default App;
