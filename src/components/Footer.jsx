import React from 'react'

import { Link } from 'react-router-dom'

function Footer() {
  return (
  
  
 
    <div style={{width:'100%' ,backgroundColor:'#103b7a' }}  className='d-flex justify-content-center align-w-100 flex-column p-5  text-light  '>
       <div className="footer d-flex align-items-center justify-content-evenly">
        <div className="websites" style={{width:'400px'}}>
        
      <h3 className='py-3'> <i class="fa-brands fa-shopify fa-xl"></i>  GLOBOMART</h3>
  
    <h6 style={{color:'#667a96'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Odio reiciendis praesentium nobis tenetur veritatis rerum, optio accusamus 
      nesciunt fugit quod at, asperiores est incidunt quae iste enim! </h6>
      </div>
  
      <div className="links d-flex flex-column">
        <h4>About Us</h4>
        <Link to={'/'} style={{textDecoration:'none' ,color:'#667a96'}}>Career</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Our Stores</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Our Cares</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Terms & Conditions</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Privacy Policy</Link>
        
  
  
         </div>
         <div className="links d-flex flex-column">
        <h4>Customer Care</h4>
        <Link to={'/'} style={{textDecoration:'none' ,color:'#667a96'}}>Help Center</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>How To Buy</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Track Your Order</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Corporate & Bulk Purchasing</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Returns & Refunds</Link>
        
  
  
         </div>
  
         <div className="links d-flex flex-column">
        <h4>Contact Us</h4>
        <h6 style={{color:'#667a96'}}>70 Washington Square South, New York, NY 10012, United States </h6>
        
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Email: example@gmail.com</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'#667a96'}}>Phone: +1 1123 456 780</Link>
        
        
  
  
         </div>
  
      </div>
      </div>

  )
}

export default Footer