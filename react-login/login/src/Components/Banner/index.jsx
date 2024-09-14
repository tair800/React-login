import React from 'react';
import "./index.css"

const Banner = ({title,text,image}) => {
  return (
    <div className='sect' style={{  
        backgroundImage: `url("https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/${image}")`,
      }}>
    <div className='header-o'>
    <div>
    <h1>{title}</h1>
    <span >{text}</span>
    </div>
    </div>
    </div>
  )
}

export default Banner
