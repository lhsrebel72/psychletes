import {FaBrain} from "react-icons/fa"
import logo from "../images/logo.PNG"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ProductView from "./Product";

export default function ProductsView() {
    const [productData, setProductData] = useState("");
    var products = null;
<<<<<<< HEAD
    var product = null;
=======
>>>>>>> 7a2bbfb0ca25f6ff0812ba3297eed8db6aae3139

    useEffect(() => {
      getProductsWithFetch();
    }, []);
  
    const getProductsWithFetch = async () => { 
        const response = await fetch('/get-products');
        const jsonData = await response.json();
        setProductData(jsonData);
    };

    if(productData !== null && productData !== ""){
        products = productData.data;
<<<<<<< HEAD
        product = products[0];
=======
>>>>>>> 7a2bbfb0ca25f6ff0812ba3297eed8db6aae3139
    }

    return (
        <div className="Page">
            <div class="products-grid">
                {products?.map((i) => <ProductView product = {i} />)}
            </div>
        </div>
)}

