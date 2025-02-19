import React, { useState } from "react";
import { useProductStore } from "../store/product";

const createPage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct}= useProductStore()
 const handleAddProduct=async()=>{
  const {success,message}=await createProduct(newProduct)
  console.log("success:",success);
  console.log("Message:",message);
 }

  return (
    <div>
      <h1>create product</h1>
      <input
        type="text"
        placeholder="enter product name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({...newProduct,name:e.target.value})}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({...newProduct,price:e.target.value})}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter image url"
        value={newProduct.image}
        onChange={(e) => setNewProduct({...newProduct,image:e.target.value})}
      />
      <br />
      <br />
      <button onClick={handleAddProduct}>create</button>
    </div>
  );
};

export default createPage;
