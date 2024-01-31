
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React from 'react';
import {  useSelector } from 'react-redux';// import for count in this basically 
function NavBar() {
    const cartCount=useSelector((state)=>(state.cart))// state.store file slice keep in mind  for useSelector hook we should make sure the corrct key name from store
    // cartCount will return all the products which are cartSlice 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand >Redux Toolkit</Navbar.Brand>
     
          <Nav>
            <Nav.Link to="/" as={Link}  style={{fontSize:"20px"}}>Products</Nav.Link>
          </Nav>
        <Navbar.Collapse className='justify-content-end'>
           <Nav.Link  to="/cart" as={Link}  style={{fontSize:"20px"}}> My Bag  {cartCount.length}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
