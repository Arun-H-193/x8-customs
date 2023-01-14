import React from 'react'
import Product from './product';
import './css/rigscopy.css'
export default function Rigs(props){
  const {products,onAdd}=props;
  return (
    <div className='products'>
      <div className='namesidehalfproductrigs'>
        <h1>RIGS</h1>
      </div>
      <div className='rightsidehalfproductrigs'>
        {products.map((product)=>(
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
        </div>
    </div>
  )
}