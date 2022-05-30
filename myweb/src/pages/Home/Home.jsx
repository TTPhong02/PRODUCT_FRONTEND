import React from "react";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderBar from "../../components/SlideBar/index";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Product from "../../components/Product";

const Home = () => {
  const listCategory = [
    {
      id: 1,
      icon: `<svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.5266 21.0172C37.3141 19.9766 37.75 18.7016 37.75 17.375C37.75 15.2703 36.5734 13.2781 34.6797 12.1672C34.1922 11.8812 33.6371 11.7307 33.0719 11.7313H21.8313L22.1125 5.97031C22.1781 4.57813 21.6859 3.25625 20.7297 2.24844C20.2604 1.75169 19.6942 1.35647 19.0662 1.08718C18.4381 0.817894 17.7615 0.68027 17.0781 0.682812C14.6406 0.682812 12.4844 2.32344 11.8375 4.67188L7.81094 19.25H7.79688V39.3125H29.9359C30.3672 39.3125 30.7891 39.2281 31.1781 39.0594C33.4094 38.1078 34.8484 35.9281 34.8484 33.5094C34.8484 32.9188 34.7641 32.3375 34.5953 31.775C35.3828 30.7344 35.8187 29.4594 35.8187 28.1328C35.8187 27.5422 35.7344 26.9609 35.5656 26.3984C36.3531 25.3578 36.7891 24.0828 36.7891 22.7563C36.7797 22.1656 36.6953 21.5797 36.5266 21.0172V21.0172ZM0.25 20.75V37.8125C0.25 38.6422 0.920312 39.3125 1.75 39.3125H4.79688V19.25H1.75C0.920312 19.25 0.25 19.9203 0.25 20.75Z" fill="#666666"/>
      </svg>
      `,
      text: "Yêu thích",
    },
    {
      id: 2,
      icon: `<svg width="50" height="41" viewBox="0 0 50 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.3816 18.5911C32.6782 18.5911 28.0702 13.7606 23.5575 4.09958C23.4304 3.9089 23.3191 3.71822 23.2238 3.52754C23.1285 3.33687 23.0331 3.11441 22.9378 2.86017C22.8424 2.60593 22.763 2.41526 22.6994 2.28814C21.8732 0.953391 20.6655 0.286018 19.0765 0.286018H8.87528C7.79477 0.286018 6.85727 0.683264 6.06277 1.47776C5.26828 2.27225 4.87104 3.20975 4.87104 4.29026C4.87104 9.75636 4.33078 13.4428 3.25027 15.3496C0.326546 18.9089 -0.150149 24.0572 1.82019 30.7945H0.771461V36.8962C0.771461 37.9767 1.16871 38.9142 1.9632 39.7087C2.75769 40.5032 3.72697 40.9004 4.87104 40.9004H45.4854C46.6295 40.9004 47.5988 40.5032 48.3933 39.7087C49.1878 38.9142 49.585 37.9767 49.585 36.8962V30.7945C49.585 29.5869 49.3785 28.3316 48.9653 27.0286C48.5522 25.7256 47.9166 24.4227 47.0585 23.1197C46.2005 21.8167 44.9293 20.7362 43.245 19.8782C41.5607 19.0201 39.6062 18.5911 37.3816 18.5911ZM39.3838 22.786C41.0999 23.1674 42.4664 24.0095 43.4833 25.3125C44.5003 26.6155 45.0882 27.696 45.2471 28.554C45.406 29.4121 45.4854 30.1589 45.4854 30.7945H39.3838V22.786ZM6.4918 17.7331C8.08078 15.7627 8.87528 11.2818 8.87528 4.29026H19.0765C19.1401 4.48093 19.2831 4.76695 19.5056 5.14831C19.728 5.52966 19.871 5.7839 19.9346 5.91102C19.9346 6.1017 20.0617 6.32415 20.316 6.57839C20.2524 6.57839 20.0299 6.70551 19.6486 6.95975L17.6465 8.96187C16.7566 9.97881 16.7566 10.9322 17.6465 11.822C18.0278 12.267 18.5045 12.4894 19.0765 12.4894C19.6486 12.4894 20.1253 12.267 20.5066 11.822L22.1274 10.2013C22.2545 10.5191 22.5246 11.0117 22.9378 11.679C23.3509 12.3464 23.621 12.8072 23.7482 13.0614L21.746 15.0636C20.7291 16.0805 20.7291 17.0339 21.746 17.9237C22.1274 18.3686 22.6041 18.5911 23.1761 18.5911C23.6846 18.5911 24.1613 18.3686 24.6062 17.9237L26.227 16.303C27.1804 17.5106 28.2609 18.5911 29.4685 19.5445L27.8477 21.1653C26.8308 22.1822 26.8308 23.1356 27.8477 24.0254C28.2291 24.4703 28.7058 24.6928 29.2778 24.6928C29.7863 24.6928 30.263 24.4703 30.7079 24.0254L32.71 22.0233C32.8371 21.8962 32.9007 21.7691 32.9007 21.642C33.5363 21.8962 34.3626 22.1504 35.3795 22.4047V30.7945H6.01511V30.1271C5.69731 29.1737 5.42718 28.0297 5.20472 26.6949C4.98227 25.3602 4.9346 23.7871 5.06172 21.9756C5.18883 20.1642 5.66553 18.75 6.4918 17.7331ZM45.4854 36.8962H4.87104V34.7987H45.4854V36.8962ZM14.977 28.697C16.7566 28.697 18.2185 28.125 19.3626 26.9809C20.5066 25.8369 21.0787 24.375 21.0787 22.5953C21.0787 20.8792 20.5066 19.4333 19.3626 18.2574C18.2185 17.0816 16.7566 16.4936 14.977 16.4936C13.2609 16.4936 11.8149 17.0816 10.639 18.2574C9.4632 19.4333 8.87528 20.8792 8.87528 22.5953C8.87528 24.375 9.4632 25.8369 10.639 26.9809C11.8149 28.125 13.2609 28.697 14.977 28.697ZM14.977 20.5932C15.6126 20.5932 16.121 20.7839 16.5024 21.1653C16.8837 21.5466 17.0744 22.0233 17.0744 22.5953C17.0744 23.9936 16.3753 24.6928 14.977 24.6928C14.4049 24.6928 13.9282 24.5021 13.5469 24.1208C13.1655 23.7394 12.9749 23.2309 12.9749 22.5953C12.9749 22.0233 13.1655 21.5466 13.5469 21.1653C13.9282 20.7839 14.4049 20.5932 14.977 20.5932Z" fill="#666666"/>
      </svg>
      `,
      text: "Boots",
    },
    {
      id: 3,
      icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_124_318" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="6" width="44" height="36">
      <path d="M29.183 20C31.264 15.054 36.35 10.667 39 8C40.104 8.667 44 10.604 44 15C44 19 42.545 22.111 41 23L35.013 27.191C32.3673 29.0431 30.1414 31.4316 28.48 34.201L25 40H4V36C6.429 34.667 13.82 30.133 17 28C24 32 27.5 24 29.183 20Z" fill="#555555" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M43 21V40" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </mask>
      <g mask="url(#mask0_124_318)">
      <path d="M0 0H48V48H0V0Z" fill="#666666"/>
      </g>
      </svg>
      
      `,
      text: "Cao gót",
    },
    {
      id: 4,
      icon: `<svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.375 3V-1.90735e-06H42.125L39.875 3H29.75L27.5 -1.90735e-06H25.25L11.75 12H5C3.80653 12 2.66193 12.6321 1.81802 13.7574C0.974106 14.8826 0.5 16.4087 0.5 18V24H18.5L25.25 21H29.75V24H44.375V18C44.375 18 45.5 15 45.5 10.5C45.5 6 44.375 3 44.375 3Z" fill="#666666"/>
      </svg>
      `,
      text: "Giày da",
    },
    {
      id: 5,
      icon: `<svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 4H36.6L36.5 3.94C32.28 3.68 28.76 2.34 27.06 0.46L24 2C23.9 2.2 23.78 2.38 23.68 2.56C25.1 3.78 26 5.3 26 7C26 7.66 25.82 8.28 25.58 8.9L21.84 5.16C21.4 5.66 20.94 6.14 20.44 6.58L24.5 10.64C24.08 11.14 23.6 11.58 23 12L18.86 7.82C18.28 8.22 17.7 8.56 17.1 8.9L21.16 13C20.5 13.26 19.78 13.48 19 13.64L15.18 9.82C14.5 10.1 13.82 10.36 13.12 10.58L16.52 14H16C13 14 10.4 13.08 8.56 11.64C6.92 11.9 5.36 12 4 12C0 12 0 18 0 18C0 20.22 1.78 22 4 22V24C4 25.1 4.9 26 6 26C7.1 26 8 25.1 8 24V22H10V24C10 25.1 10.9 26 12 26C13.1 26 14 25.1 14 24V22H16V24C16 25.1 16.9 26 18 26C19.1 26 20 25.1 20 24V22H26V24C26 25.1 26.9 26 28 26C29.1 26 30 25.1 30 24V22H32V24C32 25.1 32.9 26 34 26C35.1 26 36 25.1 36 24V22H38C38 22 40 22 40 13C40 6 38 4 38 4Z" fill="#666666"/>
      </svg>
      `,
      text: "Giày thể thao",
    },
    {
      id: 6,
      icon: `<svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.2147 11.2956L31.3133 9.03556C31.2722 8.95625 31.2118 8.88489 31.136 8.82596C31.0602 8.76702 30.9706 8.72179 30.8728 8.6931C30.775 8.6644 30.6712 8.65287 30.5678 8.65922C30.4644 8.66557 30.3637 8.68967 30.272 8.73C29.048 9.27111 26.3467 10.1944 25.36 10.48C27.252 11.0411 30.0253 12.15 31.3747 12.0311C31.8867 11.9867 32.424 11.6889 32.2147 11.2956V11.2956ZM45.828 38.6C45.296 38.85 37.1493 40.48 21 28.7044C16.1107 25.1389 1.59999 14.31 1.78799 13.9411C1.78799 13.9411 1.34932 14.3411 0.985321 14.7589C0.722654 15.06 0.559988 15.38 0.619988 15.7011C1.03332 17.8867 4.76932 19.9444 9.90265 23.2356L10.6347 23.7044L11.1187 24.0144C11.9027 24.5167 14.2067 26.0311 16.8907 27.7956C20.5613 30.2078 27.936 35.0067 28.1507 35.14C30.9773 36.8889 34.3307 38.27 38.3733 39.22C43.4907 40.4211 45.828 38.6 45.828 38.6Z" fill="#8899A6"/>
      <path d="M45.828 38.6C45.828 38.6 46.464 38.3567 47.1213 37.58C47.7787 36.8033 48.1747 35.4422 47.1813 33.9711C46.188 32.5011 42.5733 28.2811 41.388 26.5589C40.8107 25.72 40.992 24.9511 39.888 23.4089C39.888 23.4089 35.6693 17.2722 34.736 15.9389C32.74 13.0867 33.616 11.6033 32.2867 10.7522C31.4 10.1844 22.5453 10.9367 19.8507 9.20889C17.988 8.01556 17.96 4.28889 17.18 3.06889C16.5587 2.09667 14.4867 2.54111 13.064 3.19111C11.6413 3.84111 7.76666 7.40111 6.83066 8.41555C5.89466 9.43 4.696 10.5367 4.592 11.6689L4.48666 12.8C4.48666 12.8 25.6347 29.6333 31.6533 33.0289C41.916 38.8189 45.828 38.6 45.828 38.6V38.6Z" fill="#555555"/>
      <path d="M32.9867 11.6267C32.8493 11.2778 32.6547 10.9878 32.2867 10.7511C31.4 10.1833 22.5453 10.9367 19.8507 9.20778C17.988 8.01444 17.96 4.28667 17.18 3.06778C16.9373 2.68889 16.4707 2.52889 15.9107 2.51C16.8307 4.06555 16.7387 8.70333 18.9933 10.1478C21.7107 11.8911 29.6813 11.4067 32.9867 11.6267Z" fill="#CCD6DD"/>
      <path d="M17.6867 19.8589C18.36 18.2233 19.0787 14.3978 17.7853 12.1233C16.5733 9.99333 11.864 5.50667 10.9693 4.65667C9.316 5.88444 7.10667 8.03222 6.44 8.75444C5.56 9.70778 4.5 10.7789 4.448 11.8667C4.42934 12.2578 4.564 12.4333 4.564 12.4333C4.564 12.4333 17.66 19.9233 17.6867 19.8589V19.8589Z" fill="#666666"/>
      <path d="M30.8093 15.84C30.5479 15.8413 30.2942 15.7661 30.0924 15.6275C29.8906 15.489 29.7535 15.2958 29.705 15.0817C29.6565 14.8676 29.6996 14.6461 29.8268 14.4558C29.954 14.2654 30.1574 14.1183 30.4014 14.04L32.832 13.2456C33.1045 13.1691 33.4019 13.1828 33.6625 13.284C33.9231 13.3852 34.1271 13.566 34.2321 13.7891C34.3372 14.0121 34.3353 14.2603 34.2268 14.4822C34.1183 14.7041 33.9115 14.8827 33.6493 14.9811L31.2187 15.7756C31.0882 15.818 30.9494 15.8398 30.8093 15.84ZM32.6054 19.2433C32.3584 19.2443 32.118 19.1771 31.9218 19.0522C31.7256 18.9273 31.5845 18.7517 31.5207 18.5529C31.4569 18.3541 31.4739 18.1433 31.569 17.9534C31.6642 17.7635 31.8322 17.6052 32.0467 17.5033L34.4373 16.3578C34.6937 16.2435 34.9934 16.217 35.2729 16.2837C35.5524 16.3504 35.7897 16.5052 35.9346 16.7152C36.0795 16.9252 36.1206 17.174 36.0492 17.4089C35.9778 17.6437 35.7995 17.8462 35.552 17.9733L33.1613 19.1189C32.9924 19.2004 32.8006 19.2433 32.6054 19.2433ZM35.0333 22.3011C34.798 22.3017 34.5685 22.2404 34.3775 22.126C34.1864 22.0115 34.0436 21.8497 33.9694 21.6636C33.8952 21.4775 33.8934 21.2766 33.9643 21.0896C34.0351 20.9026 34.175 20.7391 34.364 20.6222L36.3827 19.3678C36.6214 19.2367 36.9112 19.1867 37.1928 19.2279C37.4743 19.2691 37.7263 19.3985 37.8971 19.5895C38.0679 19.7806 38.1445 20.0188 38.1114 20.2554C38.0782 20.492 37.9377 20.7091 37.7187 20.8622L35.7 22.1156C35.508 22.2363 35.2739 22.3014 35.0333 22.3011V22.3011ZM37.6267 25.1578C37.3963 25.1572 37.1718 25.0975 36.9836 24.9867C36.7955 24.8759 36.6529 24.7194 36.5754 24.5387C36.4978 24.3579 36.4891 24.1616 36.5503 23.9765C36.6114 23.7914 36.7396 23.6266 36.9173 23.5044L38.4574 22.4511C38.6882 22.3074 38.9766 22.2434 39.2626 22.2724C39.5487 22.3013 39.8103 22.421 39.9931 22.6066C40.176 22.7922 40.266 23.0293 40.2444 23.2688C40.2228 23.5082 40.0914 23.7315 39.8774 23.8922L38.3374 24.9456C38.137 25.0825 37.8859 25.1575 37.6267 25.1578V25.1578ZM4.26668 11.9556C4.26668 11.9556 5.16668 12.6356 6.16668 12.7622C7.16668 12.8889 8.93868 13.8178 10.1573 14.5989C11.376 15.38 16.0227 18.2567 18.8693 20.6478C21.716 23.0389 26.196 27.9589 27.9373 29.3844C29.6787 30.8089 32.488 32.9322 34.8893 34.2144C37.2907 35.4967 39.496 36.5822 40.9107 37.1989C42.7347 37.9944 44.42 38.47 45.828 38.6C45.3373 38.84 42.744 39.6511 38.2413 38.3722C33.9373 37.1489 31.132 35.8233 28.8134 34.3878C26.4947 32.9522 13.8693 24.6011 11.8013 23.2756C9.73335 21.95 3.55068 18.0222 2.57468 16.8456C1.18801 15.1744 1.25468 14.4433 1.52401 14.1522C2.18001 13.44 3.56535 11.5056 4.26668 11.9556V11.9556Z" fill="#CCD6DD"/>
      <path d="M47.1813 33.9711C46.188 32.5011 42.5733 28.2811 41.388 26.5589C41.156 26.2211 41.0453 25.8933 40.9253 25.5244C40.804 25.5622 40.6733 25.5844 40.5667 25.6456C39.028 26.5256 39.036 29.1844 41.328 31.9644C43.1653 34.1933 46.1147 35.9111 47.7707 35.9378C47.8053 35.34 47.6533 34.6689 47.1813 33.9711Z" fill="#666666"/>
      </svg>
      
      `,
      text: "Sneaker",
    },
    {
      id: 7,
      icon: `<svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.66669 37.5989C3.16802 36.2613 2.66669 31.6369 2.66669 29.3684C2.66669 27.3534 3.42002 21.9187 4.63935 20.5985C4.63935 20.5985 6.41135 19.7809 7.33335 20.5985C10.3527 23.2779 16.4387 29.4204 24.0027 20.5985C24.0027 20.5985 35.7214 26.6233 38.8827 27.4928C44.3114 28.9857 44.494 30.4684 44.494 32.4198C44.494 38.6685 37.7714 37.8654 33.2874 37.5996C30.816 37.453 7.42002 37.7621 4.66669 37.5996" fill="#9B9B9A"/>
      <path d="M4.66668 33.1384C4.66668 33.1384 15.4227 32.0342 21.664 33.8917C27.9053 35.7493 40.5607 34.0578 40.5607 34.0578L44.0727 34.0391C44.0727 34.0391 43.4487 38.2207 40.3907 38.2207C37.3327 38.2207 4.00001 36.9258 4.00001 36.9258C4.00001 36.9258 1.74534 33.5386 4.66668 33.1377V33.1384Z" fill="#D0CFCE"/>
      <path d="M4.66669 37.5989C3.16802 36.2613 2.66669 31.6369 2.66669 29.3684C2.66669 27.3534 3.42002 21.9187 4.63935 20.5985C4.63935 20.5985 6.41135 19.7809 7.33335 20.5985C10.3527 23.2779 16.4387 29.4204 24.0027 20.5985C24.0027 20.5985 35.7214 26.6233 38.8827 27.4928C44.3114 28.9857 44.494 30.4684 44.494 32.4198C44.494 38.6685 37.7714 37.8654 33.2874 37.5996C30.816 37.453 7.42002 37.7621 4.66669 37.5996" stroke="black" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M30.3507 27.2718L27.996 30.2582M5.33337 33.8116C5.33337 33.8116 15.4227 32.0349 21.664 33.891C27.9054 35.7471 40.5607 34.7793 40.5607 34.7793L5.33337 33.8116ZM26.9614 25.9697L23.58 30.2582L26.9614 25.9697Z" stroke="black" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.66669 37.5989C3.16802 36.2613 2.66669 31.6369 2.66669 29.3684C2.66669 27.3534 3.42002 21.9187 4.63935 20.5985C4.63935 20.5985 6.41135 19.7809 7.33335 20.5985C10.3527 23.2779 16.4387 29.4204 24.0027 20.5985C24.0027 20.5985 35.7214 26.6233 38.8827 27.4928C44.3114 28.9857 44.494 30.4684 44.494 32.4198C44.494 38.6685 37.7714 37.8654 33.2874 37.5996C30.816 37.453 7.42002 37.7621 4.66669 37.5996" stroke="black" stroke-width="1.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      `,
      text: "Giày bệt",
    },
  ];

  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 2,
      src: "https://www.mpe.com.vn/Data/Sites/1/News/105/150223eye330swacker1jpgcroporiginal-original-1507629292709.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 3,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 4,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 5,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 5,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },
  ];

  const listNews = [
    {
      id: 1,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.pngg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 2,
      src: "https://vcdn1-dulich.vnecdn.net/2020/11/12/Trang-An-4-1605172551.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=4ULwimiHp4CYfeY21RKxCQ",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 3,
      src: "https://btnmt.1cdn.vn/2021/08/26/a1-1-.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 4,
      src: "https://photo-cms-baophapluat.zadn.vn/w800/Uploaded/2022/zsgkqzektazs/2022_01_18/du-lich-trang-an-ninh-binh-4257.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 5,
      src: "https://cungphuot.info/wp-content/uploads/2016/07/kinh-nghiem-du-lich-trang-an.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 6,
      src: "https://skycentral.vn/wp-content/uploads/2021/05/vai-tro-cua-thien-nhien-1.png",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
  ];

  const lengthNew = listNews.length;

  const brandsFamous = [
    {
      id: 1,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 2,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 3,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 4,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
    {
      id: 5,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
    {
      id: 6,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
  ];

  return (
    <div className="container">
      <SliderBar />
      {/* category */}
      <div className="category grid grid-cols-7">
        {listCategory.map((item, index) => (
          <div key={index} className="category-item col-span-1">
            <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* products hot */}
      <div className="container-content">
        <h1 className="title-content"># Sản phẩm bán chạy</h1>
        <p className="desc-title">Top những sản phẩm được mưa nhiều nhất</p>
        <div className="products-list grid grid-cols-5">
          {productsHot.map((item) => (
            <Product
              key={item.id.toString()}
              src={item.src}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>

      <div className="sale-adv">
        <img
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/281863329_739565270796034_5353000391321656806_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6s71hmugqc4AX9GvV7q&_nc_ht=scontent.fhan2-4.fna&oh=03_AVLtjBundkhr8AsCnignPEfxM5LiPyEHkY0auTwD763wRg&oe=62B73259"
          alt=""
        />
      </div>

      {/* products new */}
      <div className="container-content">
        <h1 className="title-content"># Sản phẩm mới nhất</h1>
        <p className="desc-title">
          Những sản phẩm mới được shop mang về phục vụ các tín đồ
        </p>
        <div className="products-list grid grid-cols-5">
          {productsHot.map((item) => (
            <Product
              key={item.id.toString()}
              src={item.src}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>

      {/* news */}
      <div className="container-content">
        <h1 className="title-content"># Tin tức mới</h1>
        <p className="desc-title">
          Nơi cập nhật những xu hướng thời trang mới nhất hiện nay
        </p>
        <div className="news-list grid grid-cols-2 gap-20">
          <>
            <div className="col-span-1">
              <div className="item-news">
                <img src={listNews[lengthNew - 1].src} alt="" />
                <p className="title-news">{listNews[lengthNew - 1].title}</p>
                <p className="date-post">{listNews[lengthNew - 1].date}</p>
                <p className="content-news">
                  {listNews[lengthNew - 1].content}
                </p>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-2 grid-rows-2 gap-20">
              {listNews.map((item, index) => {
                if (index >= lengthNew - 5 && index < lengthNew - 1) {
                  return (
                    <div
                      key={index}
                      className="item-news col-span-1 row-span-1"
                    >
                      <img className="img-news" src={item.src} alt="" />
                      <p className="title-news">{item.title}</p>
                      <p className="date-post">{item.date}</p>
                    </div>
                  );
                }
              })}
            </div>
          </>
        </div>
      </div>

      {/* brand */}
      <div className="container-content">
        <h1 className="title-content"># Những thương hiệu nổi tiếng</h1>
        <p className="desc-title">
          Chúng tôi luôn đem đến cho khách hàng những thương hiệu hàng đầu thế
          giới
        </p>
        <div className="brand grid grid-cols-6 mt-20">
          {brandsFamous.map((item) => (
            <div className="item-brand">
              <img
                key={item.id}
                className="img-brand col-span-1"
                src={item.src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
