import React from 'react'
// import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

function Header() {

  const cart =useSelector((state)=>state. cartReducer)

  return (
  
      <Navbar bg='white'  expand="lg" className="bg-primary py-3 position-fixed  top-0 w-100" style={{zIndex:'1'}}>
          <Container  >
            <Navbar.Brand href="#home" className=' fw-bolder '><i class="fa-brands fa-shopify fa-xl"></i>  GLOBOMART</Navbar.Brand>
           
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
           
                <Nav className="  ">
                  <Nav.Link as={Link} to="/" className=' text-dark fw-bold me-4 '>Home</Nav.Link>
                  <Nav.Link as={Link} to="/shop" className=' text-dark fw-bold me-4'>Shop</Nav.Link>
                  <Nav.Link as={Link} to="/cart" className=' text-dark fw-bold me-4'>Cart</Nav.Link>
                  <Nav.Link className='me-3' ><Link to={'/wishlist'} style={{color:'black' , textDecoration:'none'}}><i class="fa-solid fa-user fa-xl"></i>  </Link></Nav.Link>
            <Nav.Link  ><Link to={'/cart'} style={{color:'black' , textDecoration:'none' }}>   <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon style={{ fontSize: '28px' }} color="black"   />
      </Badge></Link></Nav.Link>
  
         
                </Nav>
                </Navbar.Collapse> 
              
          </Container>
         
        </Navbar>
       
  )
}

export default Header