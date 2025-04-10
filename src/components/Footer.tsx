import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <img src="/icons/footer_flower_1.svg" alt="gul" width={100} height={100} />
          <h3>Garden Care</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="footer-section">
          <img src="/icons/footer_flower_2.svg" alt="gul" width={100} height={100} />
          <h3>Garden Care</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="footer-section">
          <img src="/icons/footer_flower_1.svg" alt="gul" width={100} height={100} />
          <h3>Garden Care</h3>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
        </div>
        <div className="newsletter-section">
          <h3>Would you like to join newsletters?</h3>
          <div className="newsletter-input">
            <input placeholder="enter your email address..." />
            <button>JOIN</button>
          </div>
          <p>
            We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>

      <div className="footer-info">
        <div>
          <img src="/icons/logo.svg" alt="gul" width={100} height={100} />
        </div>
        <div>
          <img src="/icons/location.svg" alt="location" width={100} height={100} />
          <p>
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div>
          <img src="/icons/email.svg" alt="email" width={100} height={100} />
          <p>contact@greenshop.com</p>
        </div>
        <div>
          <img src="/icons/call.svg" alt="call" width={100} height={100} />
          <p>+88 01911 717 490</p>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h3>My Account</h3>
          <p className="cursor-pointer">My Account</p>
          <p className="cursor-pointer">Address</p>
          <p className="cursor-pointer">Wishlist</p>
        </div>
        <div>
          <h3>Categories</h3>
          <p className="cursor-pointer">House Plants</p>
          <p className="cursor-pointer">Potter Plants</p>
          <p className="cursor-pointer">Seeds</p>
          <p className="cursor-pointer">Small Plants</p>
          <p className="cursor-pointer">Accessories</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <div className="footer-social">
            <div><img src="/icons/facebook.svg" alt="facebook" /></div>
            <div><img src="/icons/instagram.svg" alt="instagram" /></div>
            <div><img src="/icons/twitter.svg" alt="twitter" /></div>
            <div><img src="/icons/linkedin.svg" alt="linkedin" /></div>
            <div><img src="/icons/union.svg" alt="union" /></div>
          </div>
          <h3>We accept</h3>
          <div className="footer-accept">
            <img src="/icons/paypal.svg" alt="paypal" />
            <img src="/icons/mastercard (1).svg" alt="mastercard" />
            <img src="/icons/visa (1).svg" alt="visa" />
            <img src="/icons/amex.svg" alt="amex" />
          </div>
        </div>
      </div>

      <h3 className="footer-rights">© 2023 GreenShop. All Rights Reserved.</h3>
    </>
  );
};

export default Footer;
