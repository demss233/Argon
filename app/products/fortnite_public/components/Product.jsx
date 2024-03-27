"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import styles from "./Product.css";
import { useState } from "react";

// imported the checkout function @/checkout.
import { checkout } from "@/checkout";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  let [buttonStates, setButtonStates] = useState([0, 0, 0, 0]);
  let [processState, setProcessState] = useState(false);

  function handleEvent(position) {
    let arr = [...buttonStates];
    arr[position] = arr[position] ^ 1;
    for (let i = 0; i < 4; ++i) {
      if (i != position) arr[i] = 0;
    }

    setButtonStates(arr);

    let processBoolean = arr[position] === 1;
    setProcessState(processBoolean);

    checkout({
      items: [
        {
          price: "paste the product link",
          quantity: 1,
        },
      ],
    });
  }

  return (
    <>
      <div className="product-container flex items-center" data-aos="zoom-in">
        <div className="container-left">
          <div className="product-image">
            <img src="https://argon-one.vercel.app/image 7.webp" alt="" />
          </div>
        </div>
        <div className="product-texts">
          <div className="product-intro">
            <h1>Fortnite Public</h1>
            <p>Fortnite Public External</p>
          </div>
          <div className="product-detail">
            <p>
              Argon has remained undetected as an External Cheat for both
              professionals and amateurs since its release. During this time,
              users have been able to confidently participate in tournaments and
              Unreal lobbies with ease. They are relishing the serives offered
              by argon.
            </p>
          </div>
          <div className={`buying-options flex gap-6`}>
            <button
              className={`option ${buttonStates[0] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(0);
              }}
            >
              1 Day
            </button>
            <button
              className={`option ${buttonStates[1] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(1);
              }}
            >
              1 Week
            </button>
            <button
              className={`option ${buttonStates[2] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(2);
              }}
            >
              1 Month
            </button>
            <button
              className={`option ${buttonStates[3] === 1 ? "selected" : ""}`}
              onClick={() => {
                handleEvent(3);
              }}
            >
              Lifetime
            </button>
          </div>
          <div className="final-btn-container flex gap-6">
            <button
              className={`proceed_stripe continue flex items-center gap-1 ${
                processState === true ? "show" : "disabled"
              }`}
              disabled={!processState}
              onClick={() => {
                alert("this is open");
              }}
            >
              Continue with{" "}
              <svg
                className="svg-stripe"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="stripe"
              >
                <path
                  fill="#646FDE"
                  d="M11.319 9.242h1.673v5.805h-1.673zM4.226 13.355c0-2.005-2.547-1.644-2.547-2.403l.001.002c0-.262.218-.364.567-.368a3.7 3.7 0 0 1 1.658.432V9.434a4.4 4.4 0 0 0-1.654-.307C.9 9.127 0 9.839 0 11.029c0 1.864 2.532 1.561 2.532 2.365 0 .31-.266.413-.638.413-.551 0-1.264-.231-1.823-.538v1.516a4.591 4.591 0 0 0 1.819.382c1.384-.001 2.336-.6 2.336-1.812zM11.314 8.732l1.673-.36V7l-1.673.36zM16.468 9.129a1.86 1.86 0 0 0-1.305.527l-.086-.417H13.61V17l1.665-.357.004-1.902c.24.178.596.425 1.178.425 1.193 0 2.28-.879 2.28-3.016.004-1.956-1.098-3.021-2.269-3.021zm-.397 4.641c-.391.001-.622-.143-.784-.318l-.011-2.501c.173-.193.413-.334.795-.334.607 0 1.027.69 1.027 1.569.005.906-.408 1.584-1.027 1.584zm5.521-4.641c-1.583 0-2.547 1.36-2.547 3.074 0 2.027 1.136 2.964 2.757 2.964.795 0 1.391-.182 1.845-.436v-1.266c-.454.231-.975.371-1.635.371-.649 0-1.219-.231-1.294-1.019h3.259c.007-.087.022-.44.022-.602H24c0-1.725-.825-3.086-2.408-3.086zm-.889 2.448c0-.758.462-1.076.878-1.076.409 0 .844.319.844 1.076h-1.722zm-13.251-.902V9.242H6.188l-.004-1.459-1.625.349-.007 5.396c0 .997.743 1.641 1.729 1.641.548 0 .949-.103 1.171-.224v-1.281c-.214.087-1.264.398-1.264-.595v-2.395h1.264zm3.465.114V9.243c-.225-.08-1.001-.227-1.391.496l-.102-.496h-1.44v5.805h1.662v-3.907c.394-.523 1.058-.42 1.271-.352z"
                ></path>
              </svg>
            </button>
            <button
              className={`proceed_hoodpay continue flex items-center gap-2 ${
                processState ? "show" : "disabled"
              }`}
              disabled={!processState}
              onClick={() => {
                alert("this is open");
              }}
            >
              Continue with{" "}
              <svg
                className="svg-hoodpay"
                width="193"
                height="36"
                viewBox="0 0 193 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4478 6.87951L12.1522 29.8163L1.70443 29.1988L0 6.26208L10.4478 6.87951Z"
                  fill="#A7E23D"
                ></path>
                <path
                  d="M16.5246 12.6053L18.229 35.542L7.78121 34.9246L6.07678 11.9878L16.5246 12.6053Z"
                  fill="#A7E23D"
                ></path>
                <path
                  d="M19.7974 1.44556L21.5018 24.3823L11.054 23.7649L9.34962 0.828125L19.7974 1.44556Z"
                  fill="#A7E23D"
                ></path>
                <path
                  d="M31.4355 26.5178H37.5109V19.8839H46.7053V26.5178H52.7806V9.85146H46.7053V15.7638H37.5109V9.85146H31.4355V26.5178Z"
                  fill="white"
                ></path>
                <path
                  d="M66.9005 27.0998C74.2328 27.0998 79.121 23.5384 79.121 18.1846C79.121 12.8309 74.2328 9.26953 66.9005 9.26953C59.5915 9.26953 54.7033 12.8309 54.7033 18.1846C54.7033 23.5384 59.5915 27.0998 66.9005 27.0998ZM66.9005 22.8168C63.246 22.8168 60.7786 20.9546 60.7786 18.1846C60.7786 15.4147 63.246 13.5525 66.9005 13.5525C70.555 13.5525 73.0457 15.4147 73.0457 18.1846C73.0457 20.9546 70.555 22.8168 66.9005 22.8168Z"
                  fill="white"
                ></path>
                <path
                  d="M92.8372 27.0998C100.169 27.0998 105.058 23.5384 105.058 18.1846C105.058 12.8309 100.169 9.26953 92.8372 9.26953C85.5282 9.26953 80.64 12.8309 80.64 18.1846C80.64 23.5384 85.5282 27.0998 92.8372 27.0998ZM92.8372 22.8168C89.1827 22.8168 86.7153 20.9546 86.7153 18.1846C86.7153 15.4147 89.1827 13.5525 92.8372 13.5525C96.4917 13.5525 98.9823 15.4147 98.9823 18.1846C98.9823 20.9546 96.4917 22.8168 92.8372 22.8168Z"
                  fill="white"
                ></path>
                <path
                  d="M106.972 26.5178H118.82C125.291 26.5178 128.899 23.5384 128.899 18.1846C128.899 12.8309 125.291 9.85146 118.82 9.85146H106.972V26.5178ZM112.885 22.3978V13.9482H117.982C121.195 13.9482 123.01 15.4845 123.01 18.1846C123.01 20.8848 121.195 22.3978 117.982 22.3978H112.885Z"
                  fill="white"
                ></path>
                <path
                  d="M130.84 26.5178H136.916V21.4202H144.225C148.973 21.4202 151.604 19.3951 151.627 15.7173C151.627 11.9464 148.997 9.85146 144.271 9.85146H130.84V26.5178ZM136.916 17.9984V13.2732H142.246C144.364 13.2732 145.528 14.1112 145.528 15.6242C145.528 17.1605 144.364 17.9984 142.246 17.9984H136.916Z"
                  fill="white"
                ></path>
                <path
                  d="M149.613 26.5178H155.897L157.178 23.6082H165.488L166.791 26.5178H173.099L164.976 9.85146H157.923L149.613 26.5178ZM158.365 20.1865L161.344 13.5991H161.391L164.324 20.1865H158.365Z"
                  fill="white"
                ></path>
                <path
                  d="M178.125 26.5178H184.201V20.8382L192.185 9.85146H185.714L181.198 16.8811H181.175L176.426 9.85146H170.025L178.125 20.8382V26.5178Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
