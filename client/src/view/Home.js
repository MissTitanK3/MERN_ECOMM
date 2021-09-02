import React, { useEffect } from 'react'
import { Product } from '../model/Product'
import { ProductsWrap } from '../styles/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../api/productActions'
import { Loader } from '../model/Loader'
import Message from '../model/Message'

export const Home = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Lastest Products</h1>
      {loading
        ? (<Loader />)
        : error
          ? (<Message variant='danger'>{error}</Message>)
          :
          (<ProductsWrap>
            {products.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </ProductsWrap>)
      }
    </>
  )
}
