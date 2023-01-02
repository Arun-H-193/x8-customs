import React from 'react'
import photo1 from './images/mouse1.jpg'
import photo2 from './images/mouse2.jpg'
import photo3 from './images/mouse3.jpg'
import photo4 from './images/mouse4.jpg'
import photo5 from './images/mouse5.jpg'
import photo6 from './images/mouse6.jpg'
import { Link } from 'react-router-dom'
import "./css/mouse.css"
const Mouse = () => {
  return (
    <body>
    <div className='rigsfullpage'>
        <div className='namesidehalf'>
            <h1>MOUSE</h1>
        </div>
        <div className='products'>
          <div className='firstrow'>
            <div className='firstblock'>
              <img src={photo1} className="firstimage" alt="asus"></img>
              <figcaption>ASUS</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo2} className="firstimage" alt="red gear"></img>
              <figcaption>RED GEAR</figcaption>
               </div>
            <div className='secondblock'>
              <img src={photo3} className="firstimage" alt="lenovo"></img>
              <figcaption>LENOVO</figcaption>
               </div>
            </div>
          <div className='secondrow'>
            <div className='firstblock'>
              <img src={photo4} className="firstimage" alt="zeb-reaper"></img>
              <figcaption>zEB-REAPER</figcaption>
            </div>
            <div className='secondblock'>
              <img src={photo5} className="firstimage" alt="uhuru"></img>
              <figcaption>UHURU</figcaption>
              </div>
            <div className='secondblock'>
              <img src={photo6} className="firstimage" alt="razer"></img>
              <figcaption>RAZER</figcaption>
              </div>
            
            </div>
            <Link to="/front"><button className="backbutton">BACK</button></Link>

        </div>
        

    </div>
    </body>
  )
}
export default Mouse;
