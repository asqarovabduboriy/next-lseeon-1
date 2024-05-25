"use client";
import React from "react";
import "./Product.css";
import Image from "next/image";

const Product = ({ data }) => {
    let card = data?.products.map((el)=>(
        <div className="card" key={el.id}>
            <div className="card_colection">
                <span>New</span>
            </div>
        <div className="card_img">
         <Image src={el.images[0]} alt="image" width={405} height={318} />
        </div>
        <div className="card_content">
           <h2>{el.title}</h2>
           <p>{el.description}</p>
        </div>
     </div>
    ))
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "left", marginTop: "94px" }}>Popular blogs</h1>
        <div className="card_warpper">
         {card}
        </div>

        <div className=" line"></div>
      </div>
    </>
  );
};

export default Product;
