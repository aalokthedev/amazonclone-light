import React from "react";
import "./Category.css";

function Category({ title, image, text, link }) {
  return (
    <div className='category'>
      <div className='category__info'>
        <h2>{title}</h2>
      </div>
      <img src={image} alt='' />
      <p>{link}</p>
    </div>
  );
}

export default Category;
