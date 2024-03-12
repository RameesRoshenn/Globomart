import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



import './ProductCard.css';
import { SliderData, bestSales, discoutProducts, newArrivals, products, serviceData } from '../Assets/products';
import { addToCart } from '../Redux/slice/cartSlice';
import { useDispatch } from 'react-redux';



function Home() {


  const dispatch =useDispatch()
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderData.length);
    }, 5000);

  

    return () => clearInterval(interval);
  }, []);
  const { title, desc, cover } = SliderData[currentSlide];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Product has been added to cart!');
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);



    return (
      <>
            
            
               
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', padding: '5rem' ,height: '720px' }} className='bg-light ' >
    <div style={{ flex: 1  , marginLeft:'3rem' }}  >
        <h2>{title}</h2>
        <h6>{desc}</h6>
        <Link to={`/`} className='fw-bold' style={{ textDecoration: 'none' }}>Visit Collections</Link>
    </div>
    <div style={{ flex: 1, marginLeft: '2rem' }}>
        <img src={cover} alt="" style={{ width: '100%' }} />
    </div>
</div>

<div className='m-5 d-flex flex-wrap  justify-content-center   '>

       {serviceData?.length>0?
       serviceData?.map((data, index)=> (<Card
        key={index}
          style={{ width: '18rem' , backgroundColor:data.bg}}
          className="mb-2 text-center border-0 p-4 m-2"
        >
          
          <Card.Body>
          {data.icon}
            <Card.Title className=' fw-bolder '>{data.title}</Card.Title>
            <Card.Text>
             {data.subtitle}
            </Card.Text>
          </Card.Body>
        </Card>))
        :
        <p>nothing to display</p>
        }


     
</div>


<div className='bg-light  p-5 '>
    
    <h2 className='text-center fw-bold pb-5'>Big Discount</h2>

   
        <div className='d-flex flex-wrap justify-content-around mx-5 px-5 '>
        
              {discoutProducts?.length>0?
              discoutProducts?.map((data , index)=>
             (
             <div className="product-card ">
              
                      <div className="discount-tag ">{data.discount}% Off</div>
                      <Link  to={`/productinfo/${data.id}`} state={{ product: data }} key={index}  style={{textDecoration:'none'}} className="product-card-link"> 
                      <img src={data.imgUrl} alt={data.productName} className="product-image" style={{width:'200px' , height:'200px'}}/>
                      </Link>
                   <div className="product-info">
                          <h3 className="product-name">{data.productName} </h3>
                          <div className="product-rating">
                            
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                          </div>
                  </div>
                  
                     <div className='d-flex  justify-content-between '>
                          <div className="product-price ">${data.price}</div>
                          <button  onClick={() => handleAddToCart(data)}  className="add-to-cart-button ">+</button>
                        </div>
                       
                     </div>
                      ))
                     : <p>nothing to display</p>
                     }
                   
        
            
        </div>
         
</div>

<div className='  p-5 '>
    
    <h2 className='text-center fw-bold pb-5'>New Arrivals</h2>

   
        <div className='d-flex flex-wrap justify-content-around mx-5 px-5 '>
        
                {newArrivals?.length>0?
                newArrivals?.map((data , index)=>
              ( 
              <div className="product-card ">
                <Link  to={`/productinfo/${data.id}`} state={{ product: data }} key={index} style={{textDecoration:'none'}} className="product-card-link"> 
                      <img src={data.imgUrl} alt="no image" className="product-image" style={{width:'200px' , height:'200px'}} />
                      </Link>
                   <div className="product-info">
                          <h3 className="product-name">{data.productName}</h3>
                          <div className="product-rating">
                            
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                            <StarIcon filled />
                          </div>
                  </div>
                     <div className='d-flex  justify-content-between '>
                          <div className="product-price ">${data.price}</div>
                          <button  onClick={() => handleAddToCart(data)}  className="add-to-cart-button ">+</button>
                          </div>
                     </div>
                     ))
                     : <p>nothing to dispaly</p>
                     }
                    
                    
        
            
        </div>
        
</div>
          

<div className='bg-light  p-5 '>
    
    <h2 className='text-center fw-bold pb-5'>Best Sales</h2>

   
      <div className='d-flex flex-wrap justify-content-around mx-5 px-5 '>
        
      {bestSales?.length>0?
       bestSales?.map((data , index)=> (        <div className="product-card ">
                         <Link  to={`/productinfo/${data.id}`} state={{ product: data }} key={index} style={{textDecoration:'none'}} className="product-card-link">
 
                        <img src={data.imgUrl} alt="no image" className="product-image" style={{width:'200px' , height:'200px'}} />
                        </Link>
                     <div className="product-info">
                            <h3 className="product-name">{data.productName}</h3>
                            <div className="product-rating">
                              
                              <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                            </div>
                    </div>
                    <div className='d-flex  justify-content-between '>
                          <div className="product-price ">${data.price}</div>
                          <button  onClick={() => handleAddToCart(data)}  className="add-to-cart-button ">+</button>
                        </div>
                    </div>
                   
                    ))
        : <p>nothimg to dispaly</p>
        }
                    
        
            
        </div>
        
</div>

<ToastContainer autoClose={2000}  position='top-right' />
      </>
    )
}

const StarIcon = ({ filled }) => {
    return filled ? (
      <span className="star filled">★</span>
    ) : (
      <span className="star">☆</span>
    );
  };

export default Home