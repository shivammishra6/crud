import React from 'react'
import { useProductStore } from '../store/product'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  const {deleteProduct}=  useProductStore()
const handleDeleteProduct=async(pid)=>{
    const {success}=await deleteProduct(pid)
    if(!success){
        console.log("not deleted")
    }
    else{
        console.log("deleted")
    }
}

  return (
    <div>
        <img src={product.image} alt={product.name} />
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
        <div>
            <a href="" onClick={()=>handleDeleteProduct(product._id)}>delete</a><br />
            <Link to="/update" state={{product}}>Update</Link>
        </div><br /><br /><br />
    </div>
  )
}

export default ProductCard