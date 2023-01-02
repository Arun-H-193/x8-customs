import React from 'react'
import photo1 from './images/monitor1.jpg'
import photo2 from './images/monitor2.jpg'
import photo3 from './images/monitor3.jpg'
import photo4 from './images/monitor4.jpg'
import photo5 from './images/monitor5.jpg'
import photo6 from './images/monitor6.jpg'
import { Link } from 'react-router-dom'
import "./css/monitor.css"


function Monitor () {
  return (
    <body>
    <div className='rigsfullpage'>
        <div className='namesidehalfmonitor'>
            <h1>MONITOR</h1>
        </div>
        <div className='products'>
          <div className='firstrow'>
            <div className='firstblock'>
              <img src={photo1} className="firstimage" alt="legion"></img>
              <figcaption>LEGION</figcaption>
             </div>
            <div className='secondblock'>
              <img src={photo2} className="firstimage" alt="rog-asus"></img>
              <figcaption>ROG-ASUS</figcaption>
             </div>
            <div className='secondblock'>
              <img src={photo3} className="firstimage" alt="lg"></img>
              <figcaption>LG</figcaption>
             </div>
            </div>
          <div className='secondrow'>
            <div className='firstblock'>
              <img src={photo4} className="firstimage" alt="xiaomi mi"></img>
              <figcaption>XIAOMI MI</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo5} className="firstimage" alt="samsung"></img>
              <figcaption>SAMSUNG</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo6} className="firstimage" alt="lenovo"></img>
              <figcaption>DELL</figcaption>
              </div>
            
            </div>
            <Link to="/front"><button className="backbutton">BACK</button></Link>

        </div>
        

    </div>
    </body>
  )
}
export default Monitor;
