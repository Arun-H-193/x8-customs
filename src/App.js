import './App.css';
import Front from './front';
import Passwordreset from './passwordreset';
import Recoverpage from './recoverpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Keyboard from './keyboard';
import Mouse from './mouse';
import Monitor from './monitor';
import Firstpage from './Firstpage';
import Login from './login';
import Fourthpage from './fourthpage';
import Register from './signup';
import Passreset from './passreset'
import Aboutus from './aboutus';
import { Data } from "./data";
import { useState } from 'react';
import Rigs from './rigscopy';
import Cart from './cart';
import Rigsog from './rigs';
function App() {
  const { products } = Data;
  const [cartItems,setCartItems] = useState([]);
  const onAdd = (products) => {
    const exist =cartItems.find(x=>x.id === products.id);
    if(exist){
      setCartItems(cartItems.map(x=>x.id===products.id?{...exist,qty:exist.qty+1}:x))
    }
    else{
      setCartItems([...cartItems,{...products,qty:1}]);
    }
  }
  const onRemove =(products) => {
    const exist=cartItems.find((x)=> x.id===products.id);
    if(exist.qty===1){
      setCartItems(cartItems.filter((x)=>x.id!==products.id));
    }
    else
    {
      setCartItems(cartItems.map(x=>x.id===products.id?{...exist,qty:exist.qty-1}:x))
    }
  }
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Firstpage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/fourthpage' element={<Fourthpage />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/front' element={<Front />}></Route>
        <Route path='/pwdreset' element={<Passwordreset />}></Route>
        <Route path='/otp' element={<Passreset />}></Route>
        <Route path='/recoverpage' element={<Recoverpage />}></Route>
        <Route path='/rigs' element={<Rigsog />}></Route>
        <Route path='/keyboard' element={<Keyboard />}></Route>
        <Route path='/mouse' element={<Mouse />}></Route>
        <Route path='/monitor' element={<Monitor />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path="/rigscopy" element={<Rigs onAdd={onAdd} products={products}/>}></Route>
        <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}></Route>
      </Routes>
      
  </BrowserRouter>
    </div>
  );
}

export default App;
