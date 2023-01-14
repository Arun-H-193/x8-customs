import React from 'react'
import './css/cart.css'
export default function Cart(props) {
  const {cartItems, onAdd,onRemove}=props;
  const itemsPrice =cartItems.reduce((a,c)=>a+c.price*c.qty,0);
  return (
    <div className='cartpage'>
      <div className='namesidehalfproductcart'>
        <h1>CART</h1>
      </div>
      <div className='rightsidehalfproductcart'>
        {cartItems.length ===0 && <div><h2 className='cartempty'>Cart is empty</h2></div>}
        {cartItems.map((item)=>(
          <div key={item.id} className="row">
            <div><h2 className='details_name'>{item.name}</h2></div>
            
            <div>
              <button onClick={()=>onAdd(item)} className="Add">+</button>
              <button onClick={()=>onRemove(item)} className="Remove">-</button>
          </div>
          <div>
              {item.qty} x {item.price.toFixed(2)} rupees
          </div>
          <div>
            {itemsPrice} rupees
            </div>
          </div>
        ))}
    </div>
    </div>
    
  )
}

