import React from 'react'
import { Nav } from 'react-bootstrap';
import "./index.css"
const Header = () => {
  return (
    <>
    <Nav className='custom-nav '>
      <div className='d-flex justify-content-between mt-4 w-100 px-5'>
        <Nav.Link href="/">Start Bootstrap</Nav.Link>
        <Nav >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
          <Nav.Link href="SamplePost">SamplePost</Nav.Link>
          <Nav.Link href="Contact">Contact</Nav.Link>
          <Nav.Link href="Login">Login</Nav.Link>
        </Nav>
      </div>
    </Nav>
  </>
  )
}

export default Header
