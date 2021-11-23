import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartView from './Views/Cart';
import HomeView from './Views/Home';
import ProductsView from './Views/Products';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<HomeView/>}></Route>
<<<<<<< HEAD
      <Route path='/products' element={<ProductsView/>}></Route>
      <Route path='/cart' element={<CartView/>}></Route>
=======
      <Route exact path='/products' element={<ProductsView/>}></Route>
      <Route exact path='/cart' element={<CartView/>}></Route>
>>>>>>> 7a2bbfb0ca25f6ff0812ba3297eed8db6aae3139
    </Routes>
  );
}

export default Main;