import React from 'react';
import { Link } from 'react-router-dom';
import "./css/front.css"
export const Front = () => {
  return (
    <div className='FrontPage'>
        <div className='leftside'>
        <Link to='/rigscopy'><button className='rigs'>RIGS</button></Link><br/>
        <Link to='/mouse'><button className='mouse'>MOUSE</button><br/></Link>
        <Link to='/keyboard'><button className='keyboard'>KEYBOARD</button><br/></Link>
        <Link to='/monitor'><button className='monitor'>MONITOR</button><br/></Link>
        <Link to='/cart'><button className='cart'>CART</button><br/></Link>
        <Link to='/login'><button className='signout'>SIGN OUT</button><br/></Link>
        <Link to='/aboutus'><button className='aboutus'>ABOUT US</button></Link>
        </div>
        <div className='rightside'>
            <h2 className='word'>YOU WANT IT, WE BUILD IT</h2>
            
            <h1 className='name'>X8 CUSTOMS</h1>
        </div>
    </div>
  )
}
export default Front;
