import React from 'react'

export const Front = () => {
  return (
    <div className='FrontPage'>
        <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>
        </head>
        <div className='leftside'>
            <button className='rigs'>RIGS</button><br/>
            <button className='mouse'>MOUSE</button><br/>
            <button className='keyboard'>KEYBOARD</button><br/>
            <button className='monitor'>MONITOR</button><br/>
            <button className='cart'>CART</button><br/>
            <button className='signout'>SIGN OUT</button><br/>
        </div>
        <div className='rightside'>
            <h2 className='word'>YOU WANT IT, WE BUILD IT</h2>
            
            <h1 className='name'>X8 CUSTOMS</h1>
        </div>
    </div>
  )
}
export default Front;
