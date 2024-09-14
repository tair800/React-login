import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="icons">
      <Link><i class="fa-brands fa-twitter"></i></Link>
      <Link><i class="fa-brands fa-facebook"></i></Link>
      <Link><i class="fa-brands fa-github"></i></Link>
      </div>
      <h2 className='py-4'>Copyright © Your Website 2023</h2>
    </div>
  )
}

export default Footer
