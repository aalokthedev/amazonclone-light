import React from "react";

import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, click }) {
  document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
      if (!button.classList.contains("loading")) {
        button.classList.add("loading");

        setTimeout(() => button.classList.remove("loading"), 3700);
      }
      e.preventDefault();
    })
  );

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

    //dispatch the item into the data layer
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {/* <p>⭐</p> */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt='' />
      <button class='button' onClick={addToBasket}>
        <span>Add to cart </span>
        <div class='cart'>
          <svg viewBox='0 0 36 26'>
            <polyline points='1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5'></polyline>
            <polyline points='15 13.5 17 15.5 22 10.5'></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Product;
