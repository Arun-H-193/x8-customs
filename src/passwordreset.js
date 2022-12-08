import React from 'react'
const Passwordreset = () => {
  return (
    <div className='pwdreset'>
        <div className='innerrectangle'>
            
        <div style={{color:'white'}} className='uppertext'>ENTER NEW PASSWORD</div>
        <input type="text"></input><br /><br />
        <div style={{color:'white'}} className='lowertext'>CONFIRM NEW PASSWORD</div>
        <input type="text"></input><br /><br />
        <button className='confirm'>CONFIRM</button><br /><br />
        <button className='back'>BACK</button>
        </div>
    </div>
  )
}
export default Passwordreset;
