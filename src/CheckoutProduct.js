import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ image, id, title, price, rating, quantity }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='checkoutProduct__rating'>
          {" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role='img'>⭐</span>
            ))}
        </p>
        <div className='add_remove'>
          {/* <span className='minus'>-</span>0<span className='add'>+</span> */}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
