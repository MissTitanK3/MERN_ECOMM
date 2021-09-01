import React from 'react'
import { Link } from 'react-router-dom'
import { TopNavWrap } from '../../styles/Wrapper'

export const TopNav = () => {
  return (
    <TopNavWrap>
      <Link to='/'>LOGO</Link>
      <header>
        <Link to='/'> Home </Link>
        <Link to='/cart'><i className='fas fa-shopping-cart'></i> Cart  </Link>
        <Link to='/login'><i className='fas fa-key'></i> Log In </Link>
        <Link to='/signup'><i className='fas fa-user'></i> Sign Up </Link>
      </header >
    </TopNavWrap>
  )
}
