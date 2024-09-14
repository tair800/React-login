import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css"

const Button = ({name,tcolor,bgcolor}) => {
  return (
 <div className="btnarea">
     <Link className='abtn'  style={{
    color: tcolor,
    backgroundColor: bgcolor 
  }}>{name}</Link>
 </div>
  )
}

export default Button
