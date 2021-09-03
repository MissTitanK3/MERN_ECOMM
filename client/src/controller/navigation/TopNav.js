import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../api/userActions'
import { TopNavWrap } from '../../styles/Wrapper'



export const TopNav = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }



  return (
    <TopNavWrap>
      <Link to='/'>LOGO</Link>
      <header>
        {userInfo
          ?
          <>
            <span>Welcome, {userInfo.name}</span>
            <Link to='/profile'> <i className='fas fa-user'></i> Profile</Link>
            <Link to='/cart'><i className='fas fa-shopping-cart'></i> Cart  </Link>
            <Link to='/' onClick={logoutHandler}> <i className='fas fa-lock'></i> Logout</Link>
          </>
          : <Link to='/login'><i className='fas fa-key'></i> Log In </Link>
        }

      </header >
    </TopNavWrap>
  )
}
