<<<<<<< HEAD
import React, { useState, useEffect, Component } from 'react';

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
            <form action={"/create-checkout-session?id=" + product?.id} method="POST">
                <input type="image" className="floating-product-img" src={product?.images[0]}></input>
            </form>
            <div className="productLabel">{product?.name}</div>
            <div className="productPrice">{price}</div>
        </div>
)}
=======
import {FaBrain} from "react-icons/fa"
import logo from "../images/logo.PNG"
import { Link } from "react-router-dom";
import React, { useState, useEffect, Component } from 'react';

class ProductView extends React.Component {
    product = this.props.product;

    render() {
            return (
                <div class="product-grid-item">
                    <form action={"/create-checkout-session?id=" + product?.id} method="POST">
                        <input type="image" className="floating-product-img" src={product?.images[0]}></input>
                    </form>
                    <div className="productLabel">{product?.name}</div>
                    <div>$29.99</div>
                </div>
            );
        }
    }
>>>>>>> 7a2bbfb0ca25f6ff0812ba3297eed8db6aae3139
