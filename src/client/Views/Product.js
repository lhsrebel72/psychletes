import React, { useState, useEffect, Component } from 'react';
import { Link } from "react-router-dom";

export default function ProductView({product}) {
    const [priceData, setPriceData] = useState("");
    var price = '';
    useEffect(() => {
        getPricesWithFetch();
      }, []);
    
    const getPricesWithFetch = async () => { 
        const response = product?.id ? await fetch('/get-product-price-by-id?id=' + product?.id) : null;
        const jsonData = response ? await response.json() : null;
        setPriceData(jsonData);
    };

    if(priceData !== null && priceData !== ""){
        price = '$' + priceData?.data[0]?.unit_amount/100 || ''
    }

    return (
        <div class="product-grid-item">
            <Link to={{ pathname: '/productDescription'}} state={{ product: product}}>
                <input type="image" className="floating-product-img" src={product?.images[0]}></input>
            </Link>
            <div className="productLabel">{product?.name}</div>
            <div className="productPrice">{price}</div>
        </div>
)}