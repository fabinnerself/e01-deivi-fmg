import React from 'react'

function Phrase({ phrase }) {
  return (
    <div>{phrase? (<>
            <div>
            <q className='phrase'>{phrase.phrase}</q> <blockquote></blockquote>  
            </div>
            <div>
            <cite className='author'>- <b> {phrase.author} </b></cite>             
            </div>
            </>
    ): (
        <>
          <p>texto else</p>
        </>
      )}</div>
  )
}

export default Phrase