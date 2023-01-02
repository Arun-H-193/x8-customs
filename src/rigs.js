import React from 'react'
import photo1 from './images/rigs1.jpeg'
import photo2 from './images/rigs2.jpeg'
import photo3 from './images/rigs3.jpeg'
import photo4 from './images/rigs4.jpeg'
import photo5 from './images/rigs5.jpeg'
import photo6 from './images/rigs6.jpeg'
import { Link } from 'react-router-dom'
import "./css/rigs.css"
const Rigs = () => {
  return (
    <>
    <body>
    <div className='rigsfullpage'>
        <div className='namesidehalfrigs'>
            <h1>RIGS</h1>
        </div>
        <div className='products'>
          <div className='firstrow'>
            <div className='firstblock'>
              <img src={photo1} className="firstimage" alt="phantomrig"></img>
              <figcaption>PHANTOM</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo2} className="firstimage" alt="primerig"></img>
              <figcaption>PRIME</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo3} className="firstimage" alt="primerig"></img>
              <figcaption>TITAN</figcaption>
              </div>
            </div>
          <div className='secondrow'>
            <div className='firstblock'>
              <img src={photo4} className="firstimage" alt="phantomrig"></img>
              <figcaption>X-BLADE</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo5} className="firstimage" alt="primerig"></img>
              <figcaption>THUNDER</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo6} className="firstimage" alt="primerig"></img>
              <figcaption>NIGHTWOLF</figcaption>
              </div>
            
            </div>
            <Link to="/front"><button className="backbutton">BACK</button></Link>

        </div>
        

    </div>
    </body>
    </>
  )
}
export default Rigs;
