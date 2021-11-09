import { Route, IndexRoute } from 'react-router';
import {FaBrain, FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";
import Main from "./Main"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './App.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51JjStYHGBlNUtONU7ERrw4ycasTD0cZxXYNfHWzAVboo3G5y7GHXjeAq19YlTT1rY3uUTRVEvYacsZ3dcefpMOV000QKO8GP8k');

function App() {
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

export default App;
