import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeFromCart, updateQuantity } from '../Redux/slice/cartSlice'

function Cart() {

 
  const cartArray = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  const [total,setTotal ]=useState(0)
  useEffect(() => {
    const newTotal = cartArray.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setTotal(newTotal);
  }, [cartArray]);

  
  const handleIncrement = id => {
    dispatch(increment(id));
  };

  const handleDecrement = id => {
    dispatch(decrement(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };


 

  return (

<div style={{ marginTop: '100px' }} className='bg-light'>
  <div className='container'>
    <div className='row '>

   <div className='col-lg-6 m-5'>
      {cartArray?.length>0?
      cartArray.map((data)=>  (<div className='mb-5' key={data.id} style={{ backgroundColor: 'white' }}>
          <div className='d-flex justify-content-end mt-2 '>
            <Button style={{ backgroundColor: 'white' }} onClick={() => dispatch(removeFromCart(data.id))} className='text-dark border-0'>
              <i className="fa-solid fa-xmark fa-xl"></i>
            </Button>
          </div>
          <div className='p-2 d-flex justify-content-between align-items-start'>
            <img src={data.imgUrl} alt={data.productName} style={{ width: '120px', height: '120px' }} />
            <div className='d-flex flex-column pt-3 ms-3'>
              <h3>{data.productName}</h3>
              <div className='d-flex justify-content-between pt-4'>
                <p>${data.price}* {data.quantity} <span className='fw-bold ps-4'>$ {data.quantity*data.price}</span></p>
                
              </div>
            </div>
            <div className='d-flex flex-column ms-5 pt-5'>
              <div className='d-flex pt-4'>
                <Button style={{ backgroundColor: 'white' }}  onClick={() => handleIncrement(data.id)} className='text-dark border-black me-3'>
                  <i className="fa-solid fa-plus"></i>
                </Button>
                <Button style={{ backgroundColor: 'white' }}  onClick={() => handleDecrement(data.id)} className='text-dark bg-light border-0 '>
                  <i className="fa-solid fa-minus"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>))
        : <div className='mb-5'  style={{ backgroundColor: 'white' }}>
       
       <h4 className='m-5 p-5'>Nothing To Display</h4>
      </div>
        }
        
   </div>
       
          <div className='col-lg-4   ms-5 mt-2 mb-5  '>
          
            <div className='ps-4 py-3 mt-5  d-flex flex-column justify-content-start' style={{ backgroundColor: 'white' }}>
              <h3 className='fw-bold' style={{ color: '#103b7a' }}>Cart Summary</h3>
              <div className='bg-light' style={{ width: '350px', height: '3px' }}></div>
              <h4 className='pt-4'>Total Price:</h4>
              <h4 style={{ color: '#103b7a' }} className='fw-bold'>$ {total}</h4>
            </div>
          </div>
       </div>
      </div>
    </div>
 



  )
}

export default Cart