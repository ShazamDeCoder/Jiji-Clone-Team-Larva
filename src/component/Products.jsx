import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdViewCompact } from "react-icons/md";
import { MdViewList } from "react-icons/md";

const Products = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myProduct = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=100");
        setProducts(res.data.products);
      } catch (error) {
        console.log(error.message);
      }
    };

    myProduct();
  }, []);


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
   <>
   <div className="my-10">
   <div className="flex justify-between px-4 mx-10 my-2">
        <h2 className="font-semibold text-1xl">Trending Ads</h2>
        <div className="flex gap-2 font-bold text-2xl">
            <MdViewCompact className="text-[25px]"/>
            <MdViewList />
        </div>
   </div>

    <div className="h-fit mx-10 grid grid-cols-4  gap-3">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border-2 border-blue-700 h-fit w-fit bg-white border-none p-2 rounded-2xl justify-end"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-[344px] w-full object-cover rounded-lg"
            />
            <h1 className="text-green-600 font-bold text-2xl">
              #{product.price}
            </h1>
            <h1 className="text-2xl font-normal">{product.title}</h1>
            <p className="text-[#6C90A3] text-sm">{product.description}</p>
            {product.tags && product.tags.length > 0 && (
              <p className="bg-gray-400 rounded-2xl text-white w-fit p-1.5 mt-2 text-xs">
                {product.tags.join(", ")}
              </p>
            )}
          </div>
        ))
      ) : (
        <p className="col-span-4 text-center text-gray-500 text-lg">
          No products found
        </p>
      )}
    </div>
    </div>
    </>
  );
};

export default Products;
