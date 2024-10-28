import { useState } from 'react'
import './App.css'
import {bl1,bl2,bl3,bl4,bl5,bl6,bl7} from './assets/img/index'
import phrases from './data/phrases.json';
import Phrase from './components/Phrase';
import Button from './components/Button';

const imagesBL = [bl1,bl2,bl3,bl4,bl5,bl6,bl7];

function fGenerateRandom(iMax) {
  return  Math.floor(Math.random() * iMax);  
}

function App() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[fGenerateRandom(phrases.length)]);
  const [currentImage, setCurrentImage] = useState(imagesBL[fGenerateRandom(imagesBL.length)]);
  

  const getRandomPhrase = () => {    
    setCurrentPhrase(phrases[fGenerateRandom( phrases.length )]);
    setCurrentImage(imagesBL[fGenerateRandom( imagesBL.length )]);
    
  };  
  

  return (
    <>
       <div className='wrapper' style={{ backgroundImage: `url('${currentImage}')`}}>
        <div className='container'>
          <h1 className='heading'> BRUCE LEE </h1>
          <Button  onClick={getRandomPhrase} />
          <div className='card'>          
            <div className='card__body'>
               <Phrase phrase={currentPhrase}/>
               
            </div>                      
            
          </div>
          
           
        </div>
        
       </div>
    </>
  )
}

export default App
