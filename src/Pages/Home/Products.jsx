import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../FackDB";
import Loading from "../Share/Loading";
import Card from "./Card";
import CardProducts from "./CardProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);

  const handleAddToCart = (propss) => {
    const newCard = [...card, propss];
    setCard(newCard);
    addToDb(propss.id);
  };

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const storedCard = getShoppingCart();
    for (const id in storedCard) {
      const addedProducts = products.find((product) => product.id === id);
     
      const quantity = storedCard[id];
      console.log("Hello",addedProducts,"Hwelllo",quantity)
      addedProducts.quantity = quantity;
    }
  }, [products]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="grid grid-cols-2 lg:grid-cols-3 w-[75%] gap-5">
          {products.map((product) => {
            return (
              <CardProducts
                product={product}
                key={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProducts>
            );
          })}
        </div>
        <div className="bg-purple-300 w-[20%]  mt-4">
          <h1 className="text-center font-bold text-2xl">Order Summery</h1>
          <>
            <Card card={card}></Card>
          </>
        </div>
      </div>
    </>
  );
};

export default Products;
