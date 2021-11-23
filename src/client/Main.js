import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CartView from './Views/Cart';
import HomeView from './Views/Home';
import ProductsView from './Views/Products';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<HomeView/>}></Route>
      <Route exact path='/products' element={<ProductsView/>}></Route>
      <Route exact path='/cart' element={<CartView/>}></Route>
    </Routes>
  );
}

export default Main;