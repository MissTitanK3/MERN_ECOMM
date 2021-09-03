import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { Loader } from '../model/Loader'
// import Message from '../model/Message'
import { addToCart, removeFromCart } from '../api/cartActions'
import { BtnElement } from '../styles/Elements'


export const Cart = ({ match, location, history }) => {
  const productId = match.params.id
  // const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const qty = location.search && Number(location.search.split('=')[1])

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0
          ? <><h2>Your cart is emtpy</h2> <BtnElement><Link to='/'>Go Shopping</Link></BtnElement></>
          :
          <ul>
            {cartItems.map(item => (
              <>
                <li key={item.product}>
                  <img src={item.image} alt={item.name} />
                </li>
                <li>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </li>
                <li>
                  ${item.price}
                </li>
                <li>
                  {
                    <form action="" onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                      <select value={item.qty} name="qty" id="qty" style={{ width: '50px' }}>
                        {
                          [...Array(item.countInStock).keys()].map((x) => (
                            <option key={x} value={x + 1}>{x + 1}</option>
                          ))
                        }
                      </select>
                    </form>
                  }
                </li>
                <li>
                  <BtnElement onClick={() => removeFromCartHandler(item.product)} >
                    <i className='fas fa-trash' ></i>
                  </BtnElement>
                </li>
              </>
            ))}
          </ul>

        }

      </div>
      <div>
        <div>
          <h2>Item Count: ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
          <h2>Total Price: ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h2>
        </div>
        <div>
          {
            cartItems.length !== 0
              ? <BtnElement onClick={checkoutHandler}>Proceed To Checkout</BtnElement>
              : null
          }

        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
