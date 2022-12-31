import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
function Navbar() {
    const[expandNavbar,setExpandNavbar] = useState(false);
      return (
    <div className= 'navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={()=>{
                setExpandNavbar(((prev) => !prev));
            }}>
                <DensityMediumIcon />
                </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/ContactMe'>Contact Me</Link>
        </div>
        </div>
  )
} 

export default Navbar