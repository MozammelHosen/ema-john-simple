import React from "react";

const Card = ({ card }) => {
  let totalPrice = 0;
  let totalShopping = 0;
  for (const product of card) {
    totalPrice += product.price;
    totalShopping += product.shipping;
  }
  const tax = (totalPrice * 10) / 100;
  const gradeTotal = totalPrice + totalShopping + tax;
  return (
    <div className="p-5">
      <h1>Selected Items: {card.length}</h1>
      <p>Total Price: {totalPrice}</p>
      <p>Total Shipping Charge:{totalShopping}</p>
      <p>Tax:{tax}</p>
      <p>Grade Total:{gradeTotal}</p>
    </div>
  );
};

export default Card;
