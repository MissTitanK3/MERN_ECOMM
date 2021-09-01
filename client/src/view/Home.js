import React, { useState, useEffect } from 'react'
import { Product } from '../model/Product'
import { ProductsWrap } from '../styles/Wrapper'
import axios from 'axios'

export const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <h1>Lastest Products</h1>
      <ProductsWrap>
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </ProductsWrap>
    </>
  )
}
