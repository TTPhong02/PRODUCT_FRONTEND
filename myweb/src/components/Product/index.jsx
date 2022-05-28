import React from "react";
import "./product.scss";

const Product = (props) => {
  const { src, name, price, sale } = props;
  return (
    <div className="item-product col-span-1">
      <img className="img-product" src={src} alt="" />
      {sale && <span className="discount-product">{sale}</span>}
      <p className="name-product">{name}</p>
      <p className="price-product">{price} vnđ</p>
    </div>
  );
};

export default Product;
