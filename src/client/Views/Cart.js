import {FaBrain} from "react-icons/fa"
import logo from "../images/logo.PNG"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Test Product</h3>
      <h5>$10.00</h5>
      </div>
    </div>
    <form action={"/create-checkout-session?ids=" + productUrl} method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CartView() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  var productIds = [];
  var productUrl;

  for (var key in productIds) {
    if (productIds.hasOwnProperty(key)) {
        productUrl.push(key + '=' + encodeURIComponent(productIds[key]));
    }
}
  return message ? (
    <Message message={message} />
  ) : (
    <div className="Page">
          <ProductDisplay />
    </div>
  );
}