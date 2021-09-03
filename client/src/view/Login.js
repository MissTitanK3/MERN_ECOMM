import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../model/Loader'
import Message from '../model/Message'
import { login } from '../api/userActions'
import { FormContainer } from '../controller/FormContainer'


export const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form action="" method="post" onSubmit={submitHandler} >
        <label htmlFor="">Email Address</label>
        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
      <div>
        New Customer? <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>Sign Up</Link>
      </div>
    </FormContainer>
  )
}
