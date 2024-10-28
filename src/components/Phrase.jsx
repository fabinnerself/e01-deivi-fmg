import React from 'react'

function Phrase({ phrase }) {
  return (
    <div  >{phrase? (<>
            <div>
            <blockquote><q className='phrase'>{phrase.phrase}</q> </blockquote>  
            <br/>
              <p>
             <cite className='author sourceBox'> - Fuente: <b>{phrase.author} </b></cite> </p>            
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