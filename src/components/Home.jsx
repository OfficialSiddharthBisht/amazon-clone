import React from 'react'
import "../styling/home.css";
import Product from './Product';

// components import


const Home = () => {
  return (
    <div className='home'>
        <img className='home_image' src="./amazonafter.jpg" alt="" />
        {/* Product  */}
        {/* Product id , title, price, rating, image */}
        <Product
          id = "1"
          title = "Siddharth's Biography"
          price = {500}
          rating = {3}
          image = "amazonafter.jpg"
        />
      </div>
  )
}
export default Home;

