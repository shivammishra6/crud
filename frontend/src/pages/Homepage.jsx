import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const Homepage = () => {

  const {fetchProducts,products}=useProductStore()

  useEffect(()=>{
    fetchProducts()
  },[fetchProducts])
  

  return (
    <div>
      <div>
        {products.map((product)=>(
          <ProductCard key={product._id} product={product}/>
        ))}
      </div>
      {products.length===0 &&(
      <div>no products found add products</div>
      )}
    </div>
  )
}

export default Homepage