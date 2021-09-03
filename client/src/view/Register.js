import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../model/Loader'
import Message from '../model/Message'
import { register } from '../api/userActions'
import { FormContainer } from '../controller/FormContainer'


export const Register = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPW, setConfirmPW] = useState('')
  const [message, setMessage] = useState(null)
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPW) {
      setMessage('Passwords Do Not Match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message>{message}</Message>}
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form action="" method="post" onSubmit={submitHandler} >
        <label htmlFor="">Name</label>
        <input type="name" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="">Email Address</label>
        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder='Confirm Password' value={confirmPW} onChange={(e) => setConfirmPW(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</Link>
      </div>
    </FormContainer>
  )
}