import React, { useEffect } from 'react'
import "../Css/App.css"
import { Link } from 'react-router-dom'
export default function Entery() {
  useEffect(() => {
      const navElement = document.getElementById('nav');
      if (navElement) {
        navElement.style.display = 'none';
      }
  
      // Cleanup on component unmount
      return () => {
        // Restore the display property to its original value or set it to 'block' as needed
        if (navElement) {
          navElement.style.display = ''; // This will remove the 'display' property, reverting to the stylesheet value
        }
      };
    }, []); 
  return (
    <div className='randl'>
      <Link id='abtn' className='l' to="Login">Login</Link>
      <Link id='abtn' className='r' to="Register">Register</Link>
    </div>
  )
}
