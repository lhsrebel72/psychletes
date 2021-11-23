import {FaBrain} from "react-icons/fa"
import logo from "../images/logo.PNG"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ProductView from "./Product";

export default function ProductsView() {
    const [productData, setProductData] = useState("");
    var products = null;

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
    }

    return (
        <div className="Page">
            <div class="products-grid">
                {products?.map((i) => <ProductView product = {i} />)}
            </div>
        </div>
)}

