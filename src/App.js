// Created by Atul Singh
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/footer';
import Home from './components/Home';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Offers from './components/Offer/Offers';
import Login from './components/LOGIN/Login';
import CartProduct from './components/CartProduct/CartProduct';
import foodimage from './footer1.jpg'
import first from './f2.jpg'
import PopupMessage from './components/random';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Offers' element={<Offers />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart/:id' element={<CartProduct />} />
      </Routes>
      <br />
      <p>Spicy delight does not accept reservations. We welcome guests on a first come first serve basis.</p>
      <br />
      <img className='front__img' src={first} alt="Your Image" />

      <div class="image-container">
        <img src={foodimage} alt="Your Image" />
        <div class="overlay-text">
          Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.
        </div>
        <button class="overlay-button">Click Me</button>
      </div>
      <br />
      <br />
      <Footer />

    </div>
  );
}

export default App;
