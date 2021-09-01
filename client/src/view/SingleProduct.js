import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '../model/Rating'
import { SingleProductComp } from '../styles/Components'
import { BtnElement, AddBtnElement, ImgElementProduct } from '../styles/Elements'
import axios from 'axios'

export const SingleProduct = ({ match }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [match])

  return (
    <>
      <SingleProductComp>
        <ImgElementProduct>
          <img src={product.image} alt={product.name} />
        </ImgElementProduct>
        <div>
          <h2>{product.name}</h2>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color='gold'
          />
          <span>Price: ${product.price}</span>
          <p>Description: {product.description}</p>
        </div>
        <div>
          <div>
            Price: <strong> {product.price} </strong>
          </div>
          <span>
            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
          </span>
          {product.countInStock > 0
            ? <AddBtnElement>Add To Cart</AddBtnElement>
            : null
          }
        </div>
      </SingleProductComp>
      <BtnElement>
        <Link to='/'>Go Home</Link>
      </BtnElement>
    </>
  )
}
