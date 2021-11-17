import {FaBrain} from "react-icons/fa"
import logo from "../images/logo.PNG"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function ProductView() {
    const [productData, setProductData] = useState("");
    var product1 = null;
    var product2 = null;

    useEffect(() => {
        console.log("first");
      getProductsWithFetch();
    }, []);
  
    const getProductsWithFetch = async () => { 
        const response = await fetch('/get-products');
        const jsonData = await response.json();
        console.log(jsonData);
        setProductData(jsonData);
    };
    if(productData !== null && productData !== ""){
        product1 = productData.data[0];
        product2 = productData.data[1];
    }

    return (
        <div className="Page">
            <div class="products-grid">
                <div class="product-grid-item">
                    <form action={"/create-checkout-session?id=" + product1?.id} method="POST">
                        <input type="image" className="floating-product-img" src={product1?.images[0]}></input>
                    </form>
                    <div className="productLabel">{product1?.name}</div>
                    <div>$29.99</div>
                </div>
                <div class="product-grid-item">
                    <form action={"/create-checkout-session?id=" + product2?.id} method="POST">
                        <input type="image" className="floating-product-img" src={product2?.images[0]}></input>
                    </form>
                    <div className ="productLabel">{product2?.name}</div>
                    <div>$29.99</div>
                </div>
            </div>
        </div>
)}

