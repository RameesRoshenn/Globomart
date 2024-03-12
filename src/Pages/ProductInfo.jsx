import React, { useEffect, useState } from 'react'



import shopbg from '../Assets/Images/evelyn-semenyuk-VY_9seCWWlQ-unsplash.jpg'
import { Link, useParams } from 'react-router-dom';
import { useDispatch,  } from 'react-redux';
import { addToCart } from '../Redux/slice/cartSlice';
import { bestSales, discoutProducts, newArrivals, products } from '../Assets/products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function ProductInfo() {

  const { id } = useParams();


  
  const combinedProducts = [...discoutProducts, ...newArrivals, ...bestSales, ...products];
  const product = combinedProducts.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  
  

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: parseInt(quantity) })); // Pass product data along with quantity
    
    setQuantity(1);
    toast.success('Product has been added to cart!');
    
  };



const [value, setValue] = useState(1);

const handleChange = (e) => {
  setValue(e.target.value);
};

  const dispatch = useDispatch();

  console.log(product);
  
  const [activeSection, setActiveSection] = useState('description');


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);



  return (
   <>
  
    <div >
          <div style={{ backgroundImage: `linear-gradient(rgba(33, 11, 11, 0.7), rgba(0, 0, 0, 0.7)), url(${shopbg})`, backgroundSize: 'cover', width: '100%', height: '250px' }} className='p-5'>
              <h2 className='text-light fw-bolder mt-5 pt-5 text-center   '>{product.productName}</h2>
          </div>
       <div className=' row '>
          <div  className=' d-flex   '>
                  <div className=' col-lg-6 ms-5 '>
                  <img src={product.imgUrl} alt="" style={{ width: '500px' }} />
              </div>
              <div className=' mt-5  pt-5 '>
                  <h3 className=' fw-bold'>{product.productName}</h3>
                  <div className="product-rating d-flex pt-2">
                                      
                                      <StarIcon filled />
                                      <StarIcon filled />
                                      <StarIcon filled />
                                      <StarIcon filled />
                                      <StarIcon filled />
                                      <p className='ps-5 pt-2'>{product.avgRating} Rating</p>
                                    </div>
                                    <div className='d-flex pt-2'>
                                        <h3 className='fw-bold pe-5'>$ {product.price}</h3>
                                        <p className=' pt-1'>Category : {product.category}</p>
              
                                    </div>
  
                                    <p className='pt-2'>{product.shortDesc}</p>
          
          
          <div style={{ display: 'flex', alignItems: 'center' }} className='rounded pt-2 '>
                <input
                  type="number"
                  value={value}
                  onChange={handleChange}
                  style={{ marginRight: '5px' ,width:'60px' ,height:'30px'}}
                  className=' border-6 border-black   rounded ps-2 '
                />
               
              </div>
  
              <button onClick={() => handleAddToCart(product)} className='btn btn-rounded text-light mt-2' style={{backgroundColor:'#103b7a'}}>Add To Cart</button>
          
              </div>
           </div>
       </div>
  
       
  
  <div className='m-5 d-flex flex-column'>
      <div className="section-tabs d-flex">
        <h5
          className={`fw-bold pb-2 me-3 ${activeSection === 'description' && 'active'}`}
          onClick={() => setActiveSection('description')}
        >
          Description
        </h5>
        <h5
          className={`fw-bold pb-2 ${activeSection === 'review' && 'active'}`}
          onClick={() => setActiveSection('review')}
        >
          Review({product.reviews.length})
        </h5>
      </div>

      <div className="section-content">
        {activeSection === 'description' && <p>{product.description}</p>}
        {activeSection === 'review' &&  (<>
    
          {product.reviews.map((review, index) => (
      <div key={index}>
        <p>Rating: {review.rating}</p>
        <p>{review.text}</p>
      </div>
    ))}

  </>
)}
      </div>
    </div>



       <div className='m-5'>
          <h4 className='fw-bold'>You might also like</h4>
          <div className='d-flex flex-wrap justify-content-around  mx-5 px-5'>
            
           {combinedProducts
            .filter((p) => p.category === product.category && p.id !== product.id)
            .map((filteredProduct)=> (<div key={filteredProduct.id}  className=''>
                        <div className="product-card ">
                        <Link  to={`/productinfo/${filteredProduct.id}`}  className="product-card-link" style={{textDecoration:'none'}}>
           
                            <img src={filteredProduct.imgUrl} style={{width:'200px' , height:'200px'}} alt="Blue Sofa" className="product-image" />
                            </Link>
                         <div className="product-info">
                                <h3 className="product-name">{filteredProduct.productName}</h3>
                                <div className="product-rating">
                                  
                                  <StarIcon filled />
                                  <StarIcon filled />
                                  <StarIcon filled />
                                  <StarIcon filled />
                                  <StarIcon filled />
                                </div>
                        </div>
                        <div className='d-flex  justify-content-between '>
                              <div className="product-price ">${filteredProduct.price}</div>
                              <button onClick={handleAddToCart}  className="add-to-cart-button ">+</button>
                            </div>
                        </div>
                       
    
                      
            </div>))}
          </div>
         
       </div>
      </div>
      
      <ToastContainer autoClose={2000} position='top-right' />
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

export default ProductInfo