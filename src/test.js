import React,{Component} from 'react'
import photo1 from './images/computer.jpeg'
import { Link } from 'react-router-dom'
import "./css/keyboard.css"
class Keyyboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hyperx:0,
      legion:0,
      razer:0,
      zebronics:0,
      redgear:0,
      asus:0
    }
  }
  handleClickhyperx=()=>{
      this.setState({
        hyperx:this.state.hyperx+1
      })
  }
  handleClicklegion=()=>{
      this.setState({
        legion:this.state.legion+1
      })
  }
  handleClickrazer=()=>{
      this.setState({
        razer:this.state.razer+1
      })
  }
  handleClickzebronics=()=>{
      this.setState({
        zebronics:this.state.zebronics+1
      })
  }
  handleClickredgear=()=>{
      this.setState({
        redgear:this.state.redgear+1
      })
  }
  handleClickasus=()=>{
      this.setState({
        razer:this.state.asus+1
      })
  }
  render()
  {
  return (
    <body>
    <div className='rigsfullpage'>
        <div className='namesidehalf'>
            <h1>KEYBOARD</h1>
        </div>
        <div className='products'>
          <div className='firstrow'>
            <div className='firstblock'>
              <img src={photo1} className="firstimage" alt="hyperx"></img>
              <Link to='/cart' onClick={this.handleClickhyperx}><figcaption>HYPER X</figcaption></Link>
            </div>
            <div className='secondblock'>
              <img src={photo1} className="firstimage" alt="legion"></img>
              <Link to='/cart' onClick={this.handleClicklegion}><figcaption>LEGION</figcaption></Link>
            </div>
            <div className='secondblock'>
              <img src={photo1} className="firstimage" alt="razer"></img>
              <Link to='/monitor' onClick={this.handleClickrazer}><figcaption>RAZER</figcaption></Link>
            </div>
            </div>
          <div className='secondrow'>
            <div className='firstblock'>
              <img src={photo1} className="firstimage" alt="zebronics"></img>
              <Link to='/monitor' onClick={this.handleClickzebronics}><figcaption>ZEBRONICS</figcaption></Link>
            </div>
            <div className='secondblock'>
              <img src={photo1} className="firstimage" alt="red gear"></img>
              <Link to='/monitor' onClick={this.handleClickredgear}><figcaption>RED GEAR</figcaption></Link>
            </div>
            <div className='secondblock'>
              <img src={photo1} className="firstimage" alt="asus"></img>
              <Link to='/monitor' onClick={this.handleClickasus}><figcaption>ASUS</figcaption></Link>
            </div>
            
            </div>
            <Link to="/"><button className="backbutton">BACK</button></Link>
            
        </div>
        

    </div>
    </body>
  )
  }
}
export default Keyyboard;
