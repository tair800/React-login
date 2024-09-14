import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css"

const Textarea = ({ text1, text2, text3 }) => {
  return (
    <div className='text-area'>
      <Link>
        <h1>{text1}</h1>
        <h3>{text2}</h3>
      </Link>
      <span>{text3}</span>
      <br /> <hr /> <br /> 
    </div>
  )
}

export default Textarea
