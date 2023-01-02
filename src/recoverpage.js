 import React from 'react'
 import {Link} from 'react-router-dom'
 import './css/recoverpage.css'
const Recoverpage = () => {
   return (
     <body className='recover'>
        <div className='innerrectanglerecover'>
            <h1 className='recoverpageh1'>RECOVER YOUR ACCOUNT</h1>
            <br /><br />
            <label style={{color:'white'}}>Please enter your Email ID below</label><br /><br />
            <input type="email" className='inputrecoverpage'></input><br /><br />   
            <div className='twobuttonrecover'>
            <button className='gobutton'><Link to="/otp">GO</Link></button>
            <button className='backbuttton '><Link to="/login">BACK</Link></button>
            </div>
        </div>
        
     </body>
   )
 }
 export default Recoverpage;