import React from 'react'
import { Link } from 'react-router-dom';
import "./css/product.css"
export default function Product(props) {
    const{product,onAdd}=props;
  return (
    <main>
    <div className='productpage'>
        
        <div className='card'>
            <div className='images'>
                <img className="small" src={product.img} alt={product.name}></img>
            </div>
            <div className='details'>
                <h1>{product.name}</h1><br />
                <h1>{product.price} rupees</h1>
                <Link to="/cart"><button className='addtocartbutton' onClick={()=>onAdd(product)}>ADD TO CART</button></Link>
            </div>
        </div>
        
    </div>
    </main>
  )
}

