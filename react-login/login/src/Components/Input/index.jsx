import React from 'react'
import "./index.css"

const Input = ({type,name,inpname}) => {
  return (
    <div>
      <input name={inpname} className='cusinp' type={type} placeholder={name}/>
    </div>
  )
}

export default Input
