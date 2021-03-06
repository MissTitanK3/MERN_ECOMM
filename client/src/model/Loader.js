import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
  return (
    setTimeout(() => {
      <Spinner animation='border' role='status' style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }} >
        <span className='sr-only'>Loading!!!</span>
      </Spinner>
    }, 3000)
  )
}
