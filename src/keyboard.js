import React from 'react'
import photo1 from './images/keyboard1.jpg'
import photo2 from './images/keyboard2.jpg'
import photo3 from './images/keyboard3.jpg'
import photo4 from './images/keyboard4.jpg'
import photo5 from './images/keyboard5.jpg'
import photo6 from './images/keyboard6.jpg'
import { Link } from 'react-router-dom'
import "./css/keyboard.css"
const Keyboard = () => {
  return (
    <body>
    <div className='rigsfullpage'>
        <div className='namesidehalfkeyboard'>
            <h1>KEYBOARD</h1>
        </div>
        <div className='products'>
          <div className='firstrow'>
            <div className='firstblock'>
              <img src={photo1} className="firstimage" alt="hyper x"></img>
              <figcaption>HYPER X</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo2} className="firstimage" alt="legion"></img>
              <figcaption>LEGION</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo3} className="firstimage" alt="razer"></img>
              <figcaption>RAZER</figcaption>
              </div>
            </div>
          <div className='secondrow'>
            <div className='firstblock'>
              <img src={photo4} className="firstimage" alt="zebronics"></img>
              <figcaption>ZEBRONICS</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo5} className="firstimage" alt="redgear"></img>
              <figcaption>RED GEAR</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo6} className="firstimage" alt="asus"></img>
              <figcaption>ASUS</figcaption>
              </div>
            
            </div>
            <Link to="/front"><button className="backbutton">BACK</button></Link>

        </div>
        

    </div>
    </body>
  )
}
export default Keyboard;
