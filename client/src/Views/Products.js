import {FaBrain} from "react-icons/fa"
import logo from "../images/logo.PNG"
import { Link } from "react-router-dom";

export default function ProductView() {
    return (
        <div className="Page">
            <div class="products-grid">
                <div class="product-grid-item">
                    <Link to="/cart">
                        <img alt="" className="floating-img" src={logo} />
                    </Link>
                </div>
                <div class="product-grid-item">
                    <img alt="" className="floating-img" src={logo} />
                </div>
                <div class="product-grid-item">
                    <img alt="" className="floating-img" src={logo} />
                </div>
                <div class="product-grid-item">
                    <img alt="" className="floating-img" src={logo} />
                </div>
            </div>
        </div>
)}

