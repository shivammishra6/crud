import React, { useState } from "react";
import {useLocation} from 'react-router-dom'
import { useProductStore } from "../store/product";
const updatePage = () => {
  
 const location=useLocation()
 const {product} = location.state
  const [updatedProduct, setUpdatedProduct]=useState(product)

  const {updateProduct}=useProductStore()

const handleUpdateProduct=async(pid,updatedProduct)=>{
   updateProduct(pid,updatedProduct)
}

  return (
    <div>
      <h1>update product</h1>
      <input
        type="text"
        placeholder="enter product name"
        value={updatedProduct.name}
        onChange={(e) => setUpdatedProduct({...updatedProduct,name:e.target.value})}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter price"
        value={updatedProduct.price}
        onChange={(e) => setUpdatedProduct({...updatedProduct,price:e.target.value})}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter image url"
        value={updatedProduct.image}
        onChange={(e) => setUpdatedProduct({...updatedProduct,image:e.target.value})}
      />
      <br />
      <br />
      <button onClick={()=>handleUpdateProduct(product._id,updatedProduct)}>update</button>
    </div>
  );
};

export default updatePage;
