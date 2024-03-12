import {  Route,  Routes ,Switch } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ProductInfo from './Pages/ProductInfo';


function App() {
  return (
   <div>
      
        <Header/>
        
       
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            
        
       
                <Route path='/productinfo/:id' element={<ProductInfo />} />
          
       
              
            </Routes>
      
          <Footer/>
      
      
   </div>
  );
}

export default App;
