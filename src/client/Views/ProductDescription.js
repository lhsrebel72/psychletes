import React, { useState, useEffect, Component } from 'react';
import { useLocation, Link } from 'react-router-dom'

export default function ProductDescriptionView() {
    const [priceData, setPriceData] = useState("");
    const [selectedSize, setSize] = useState("");
    const location = useLocation()
    const { product } = location.state;
    var price = '';
    var sizes = [];
    sizes = product?.metadata?.size.split(",") || []
    useEffect(() => {
        getPricesWithFetch();
        setSize(sizes[0]);
    }, []);
    
    const getPricesWithFetch = async () => { 
        const response = product?.id ? await fetch('/get-product-price-by-id?id=' + product?.id) : null;
        const jsonData = response ? await response.json() : null;
        setPriceData(jsonData);
    };

    if(priceData !== null && priceData !== ""){
        price = '$' + priceData?.data[0]?.unit_amount/100 || ''
    }

    const handleChange = (event) => {
        setSize(event.target.value);
    }

    return (
        <div class="centered-product-info">
            <div class="product-description">
                <img alt="" className="floating-product-img-lg" src={product?.images[0]} />
                <div className="description-grid">
                    <div className="description-grid-item">
                        <div className = "description-grid-value">{product?.name}</div>
                    </div>
                    <div className="description-grid-item">
                        <div className = "description-grid-value">{price}</div>
                    </div>
                    <div className="description-grid-item">
                        <select className="dropdown-selection" onChange={handleChange}>
                            {sizes.map(optn => (
                                <option value={optn}>{optn}</option>
                            ))}
                        </select>
                    </div>
                    <form action={"/create-checkout-session?id=" + product?.id + "&size=" + selectedSize} method="POST" className="product-description-grid-item">
                        <input type="submit" className="checkout-btn" value="Checkout"></input>
                    </form>
                </div>
            </div>
        </div>
)}