import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../model/Loader'
import Message from '../model/Message'
import { getUserDetails } from '../api/userActions'


export const Profile = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPW, setConfirmPW] = useState('')
  const [message, setMessage] = useState(null)

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)
  const { user } = userDetails
  console.log(user)

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin
  console.log(userInfo)

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [history, userInfo, user, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPW) {
      setMessage('Passwords Do Not Match')
    } else {
      // dispatch(register(name, email, password))
    }
  }

  return (
    <>
      <h2>User Profile</h2>
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
        <button type="submit">Update</button>
      </form>
    </>
  )
}