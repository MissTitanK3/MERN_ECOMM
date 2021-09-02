import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Rating } from '../model/Rating'
import { SingleProductComp } from '../styles/Components'
import { BtnElement, AddBtnElement, ImgElementProduct } from '../styles/Elements'
import { listProductDetails } from '../api/productActions'
import { Loader } from '../model/Loader'
import Message from '../model/Message'

export const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <>
      {loading
        ? (<Loader />)
        : error
          ? (<Message variant='danger'>{error}</Message>)
          :
          (<SingleProductComp>
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
              <span>
                {
                  product.countInStock > 0 && (
                    <form action="" value={qty} onChange={(e) => setQty(e.target.value)}>
                      <select name="qty" id="qty" style={{ width: '50px' }}>
                        {
                          [...Array(product.countInStock).keys()].map((x) => (
                            <option key={x} value={x + 1}>{x + 1}</option>
                          ))
                        }
                      </select>
                    </form>
                  )
                }

              </span>
              {product.countInStock > 0
                ? <AddBtnElement onClick={addToCartHandler} >Add To Cart</AddBtnElement>
                : null
              }
            </div>
          </SingleProductComp>)
      }
      <BtnElement>
        <Link to='/'>Go Home</Link>
      </BtnElement>
    </>
  )
}
