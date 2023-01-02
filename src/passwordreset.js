import React from 'react'
import { Link } from 'react-router-dom'
import './css/passwordreset.css'
const Passwordreset = () => {
  return (
    <body className='pwdreset'>
        <div className='innerrectangle'>
            
        <div style={{color:'white'}} className='uppertext'>ENTER NEW PASSWORD</div>
        <input className='inputinpasswordereset'type="password"></input><br /><br />
        <div style={{color:'white'}} className='lowertext'>CONFIRM NEW PASSWORD</div>
        <input className='inputinpasswordereset' type="password"></input><br /><br />
        <button className='confirm'><Link to="/login">CONFIRM</Link></button><br /><br />
        <button className='back'><Link to="/recoverpage">BACK</Link></button>
        </div>
    </body>
  )
}
export default Passwordreset;
