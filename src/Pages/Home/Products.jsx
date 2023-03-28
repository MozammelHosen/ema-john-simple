import React, { useEffect, useState } from "react";
import Loading from "../Share/Loading";
import CardProducts from "./CardProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);

  const handleAddToCart  = (propss) => {
    const newCard = [...card,propss]
    setCard(newCard)
    // console.log(...card,props)
  };
  // console.log(props.length);

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

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
                handleAddToCart ={handleAddToCart }
              ></CardProducts>
            );
          })}
        </div>
        <div className="bg-purple-300 w-[20%]  mt-4">
          <h1 className="text-center font-bold text-2xl">Order Summery</h1>
          <div>
            <h1>Selected Items: {card.length}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
