import React from 'react'

function Button({ onClick }) {
  return (
    <>
        <button onClick={onClick} className='btn'>Explora su sabiduría</button>
    </>
  )
}

export default Button