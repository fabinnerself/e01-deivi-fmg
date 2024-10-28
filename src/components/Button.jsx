import React from 'react'

function Button({ onClick }) {
  return (
    <div>
        <button onClick={onClick} className='btn'>Explora su sabiduría</button>
    </div>
  )
}

export default Button