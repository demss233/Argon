import React from "react";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left flex flex-col gap-2">
          <div className="main">
            <h1>Argon Software</h1>
            <p>Providing budget game enhancement solutions since 2022.</p>
            <div className="socials">
              <img src="https://argon-one.vercel.app/image-23.webp" alt="" />
              <img src="https://argon-one.vercel.app/image-25.webp" alt="" />
              <img src="https://argon-one.vercel.app/image-26.webp" alt="" />
            </div>
          </div>
          <div className="rights">
            <p>Developed & Designed by Cypro. All rights reserved</p>
          </div>
        </div>
        <div className="footer-right">
          <ol type="bullet" className="flex flex-col gap-5 cursor-pointer">
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Tiktok</a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Footer;
