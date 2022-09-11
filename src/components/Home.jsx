import React from 'react'
import "../styling/home.css";
import Product from './Product';

// components import


const Home = () => {
  return (
    <div className='home'>
      <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      {/* Product  */}
      {/* Product id , title, price, rating, image */}
      <div className='home_row'>
        <Product
          id="1"
          title="Siddharth's Biography the book telling everything about him and about his journey"
          price={500}
          rating={3}
          image="amazonafter.jpg"
        />
         <Product
          id="1"
          title="Siddharth's Biography"
          price={500}
          rating={3}
          image="amazonafter.jpg"
        />
        </div>
        <div className="home_row">
        <Product
          id="1"
          title="Siddharth's Biography the book telling everything about him and about his journey"
          price={500}
          rating={3}
          image="amazonafter.jpg"
        />
        <Product
          id="1"
          title="Siddharth's Biography the book telling everything about him and about his journey"
          price={500}
          rating={3}
          image="amazonafter.jpg"
        />
        <Product
          id="1"
          title="Siddharth's Biography the book telling everything about him and about his journey"
          price={500}
          rating={3}
          image="amazonafter.jpg"
        />
      </div>
      <div className="home_row">
      <Product
          id="1"
          title="Siddharth's Biography the book telling everything about him and about his journey"
          price={500}
          rating={3}
          image="amazonafter.jpg"
        />
      </div>
    </div>
  )
}
export default Home;

