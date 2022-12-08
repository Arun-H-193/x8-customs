 import React from 'react'
 
const Recoverpage = () => {
   return (
     <div className='recover'>
        <div className='innerrectanglerecover'>
            <h1 style={{color:'white'}}>RECOVER YOUR ACCOUNT</h1>
            <br /><br />
            <label style={{color:'white'}}>Please enter your Email ID below</label><br /><br />
            <input type="text" className='inputrecoverpage'></input><br /><br />   
            <div className='twobuttonrecover'>
            <button className='gobutton'>GO</button>
            <button className='backbuttton '>BACK</button>
            </div>
        </div>
        
     </div>
   )
 }
 export default Recoverpage