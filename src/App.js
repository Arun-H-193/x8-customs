import './App.css';
import Front from './front';
import Passwordreset from './passwordreset';
import Recoverpage from './recoverpage';
import Rigs from './rigs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './cart';
import Keyboard from './keyboard';
import Mouse from './mouse';
import Monitor from './monitor';
import Firstpage from './Firstpage';
import Login from './login';
import Fourthpage from './fourthpage';
import Register from './signup';
import Passreset from './passreset'
import Aboutus from './aboutus';
function App() {
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
        <Route path='/rigs' element={<Rigs />}></Route>
        <Route path='/keyboard' element={<Keyboard />}></Route>
        <Route path='/mouse' element={<Mouse />}></Route>
        <Route path='/monitor' element={<Monitor />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
      </Routes>
      
  </BrowserRouter>
    </div>
  );
}

export default App;
