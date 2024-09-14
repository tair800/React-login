import React from 'react'
import Banner from '../../Components/Banner'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import "./index.css"


const Contact = () => {
  return (
    <div>
    <Banner 
      title="Contact Me" 
      text="Have questions? I have answers." 
      image="contact-bg.jpg" 
    />
    <div className="mainarea">
    <span>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</span>
    <Input
    type={"text"}
    name={"Name"}
    />
       <Input
    type={"email"}
    name={"Email"}
    />
          <Input
    type={"text"}
    name={"Phone Number"}
    />
          <Input
    type={"text"}
    name={"Message"}
    />
     <Button
      name={"Send"}
      tcolor={"White"}
      bgcolor={"#0085a1"}
      />
    </div>
  </div>
  )
}

export default Contact
