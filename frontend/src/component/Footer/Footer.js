import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        
        <footer class="footer">
      <div class="container">
        <div class="col1">
          <img src="/logo.png" alt="" />
          <Link to="#" class="brand">Terra firma GRC and Concrete</Link>
          <ul class="media-icons">
            <li>
              <Link to="/"><i class="fa-brands fa-youtube"></i></Link>
            </li>
            <li>
              <Link to="/"><i class="fa-brands fa-discord"></i></Link>
            </li>
            <li>
              <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
            </li>
            <li>
              <Link to="/"><i class="fa-brands fa-github"></i></Link>
            </li>
          </ul>
        </div>
        <div class="col2">
          <ul class="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/works">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <p>Architecture design encompasses the art and science of creating structures that harmonize functionality, aesthetics, and environmental sustainability. Here are some key 
                details about architecture design:</p>
          </ul>
        </div>
        <div class="col3">
          <p>Subscribe to our newslatter</p>
          <form>
            <div class="input-wrap">
              <input type="email" placeholder="ex@gmail.com" /><button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
          </form>
          <ul class="services-icons">
            <li>
              <Link to="/"><i class="fa-brands fa-cc-paypal"></i></Link>
            </li>
            <li>
              <Link to="/"><i class="fa-brands fa-cc-apple-pay"></i></Link>
            </li>
            <li>
              <Link to="/"><i class="fa-brands fa-google-pay"></i></Link>
            </li>
            <li>
              <Link to="/"><i class="fa-brands fa-cc-amazon-pay"></i></Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="mekk">
          <p>@Terra firma grc 2024 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer