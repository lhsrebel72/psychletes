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
