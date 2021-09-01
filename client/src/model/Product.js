import React from 'react'
import { Link } from 'react-router-dom'
import { ProductComp } from '../styles/Components'
import { ImgElement } from '../styles/Elements'
import { Rating } from '../model/Rating'

export const Product = ({ product }) => {
  return (
    <ProductComp>
      <Link to={`/product/${product._id}`}>
        <ImgElement>
          <img src={product.image} alt="" height='100%' width='100%'></img>
        </ImgElement>
      </Link>
      <div>
        <Link to={`/product/${product._id}`}>
          <span>
            <strong>{product.name}</strong>
          </span>
        </Link>
        <div>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color='inherit'
          />
        </div>
        <div>
          <h3>${product.price}</h3>
        </div>
      </div>
    </ProductComp>
  )
}
