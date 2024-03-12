import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

import shopbg from '../Assets/Images/evelyn-semenyuk-VY_9seCWWlQ-unsplash.jpg'



import { addToCart } from '../Redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { products } from '../Assets/products';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Shop() {


  const dispatch =useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Product has been added to cart!');
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);

  const extractCategories = () => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    setCategories(uniqueCategories);
  };

  useState(() => {
    extractCategories();
  }, []);
  
  const filteredProducts = products.filter((product) =>
  (product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()))
);

  const handleCategorySelect = (category) => {
    setSearchTerm(category);
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
 
 

  return (
    <div>
        <div style={{ backgroundImage: `linear-gradient(rgba(33, 11, 11, 0.7), rgba(0, 0, 0, 0.7)), url(${shopbg})`, backgroundSize: 'cover', width: '100%', height: '250px' }} className='p-5'>
            <h2 className='text-light fw-bold mt-5 pt-5 text-center '>Products</h2>
        </div>
        <div className='m-5 d-flex  justify-content-between px-5 '>
        <Dropdown style={{ '--bs-dark': '#103b7a' }}>
        <Dropdown.Toggle id="dropdown-button-dark-example1" style={{backgroundColor:'#103b7a '}} className='text-light '>
         Filter By Category
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'white ' , color:'#103b7a ' }} >
        {categories.map((category, index) => (
            <Dropdown.Item key={index} onClick={() => handleCategorySelect(category)}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

    
      <div className="d-flex  align-items-center w-25 ">
            <input   type="text"  value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control " placeholder="Search" />
            <i style={{marginLeft:"-25px"}} class="fa-solid fa-magnifying-glass"></i>
          </div>

    
     </div>
<div className='p-5'>
  
       <div className='d-flex flex-wrap justify-content-around   '>
     
      
                    <div className='d-flex flex-wrap justify-content-around mx-5 px-5'>
  {searchTerm
    ? ( 
      filteredProducts.length > 0 ? (
        filteredProducts.map((data, index) => (
           <div className="product-card" key={data.id}>
           <Link to={`/productinfo/${data.id}`} state={{ product: data }} key={index} style={{ textDecoration: 'none' }} className="product-card-link">
         
              <img src={data.imgUrl} alt={data.productName} className="product-image" style={{ width: '200px', height: '200px' }} />
              </Link>
              <div className="product-info">
                <h3 className="product-name pt-4">{data.productName}</h3>
                <div className="product-rating">
                   
                <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <div className="product-price">${data.price}</div>
                <button onClick={() => handleAddToCart(data)} className="add-to-cart-button">+</button>
              </div>
            </div>
          
        ))
      ) : (
        <p>No matching products found</p>
      )
    ) : ( 
      products.length > 0 ? (
        products.map((data, index) => (
          <div className="product-card" key={data.id}>
              
              <Link to={`/productinfo/${data.id}`} state={{ product: data }} key={index} style={{ textDecoration: 'none' }} className="product-card-link">
          <img src={data.imgUrl} alt={data.productName} className="product-image" style={{ width: '200px', height: '200px' }} />
          </Link>
              <div className="product-info">
                <h3 className="product-name pt-4">{data.productName}</h3>
                <div className="product-rating">
                   
                <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                              <StarIcon filled />
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <div className="product-price">${data.price}</div>
                <button onClick={() => handleAddToCart(data)} className="add-to-cart-button">+</button>
              </div>
            </div>
        
        ))
      ) : (
        <p>Nothing to display</p>
      )
    )}
</div>

                 
                    
       </div>
</div>


<ToastContainer autoClose={2000}  position='top-right' />
    </div>
  )
}


const StarIcon = ({ filled }) => {
  return filled ? (
    <span className="star filled">★</span>
  ) : (
    <span className="star">☆</span>
  );
};

export default Shop