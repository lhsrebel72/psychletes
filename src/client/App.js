import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import {FaBrain, FaShoppingCart} from "react-icons/fa"
import Main from "./Main"

export default class App extends Component {

 state = { username: null };

  render() {
    return (
      <div className="App">
      <div className="wrapper">
        <div class="shopping-cart">
          <Link to="/cart">
            <FaShoppingCart size="2em"/>
          </Link>
        </div>
        <div className="sidebar">
          <header id="sidebar-logo"><FaBrain size="5em"/></header>
          <nav id="menu" role="navigation">
            <div>
              <ul>
                <li>
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <a>Merch</a>
                  </Link>
                </li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <Main />
      </div>
    </div>
    );
  }
}
