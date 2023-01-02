import React,{useState,Component} from 'react'
import Keyboard from './keyboard';


const Checkkeyboard =()=> {
    if(Keyboard.props.hyperx==1)
    {
        return(
            <div>
                <h1 style={{color:'black'}}>hyperx:50000</h1>
            </div>
        )
    }
}

const Cart = () => {
  return (
    <div>
        
        <Checkkeyboard />
    </div>
  )
}



export default Cart;
