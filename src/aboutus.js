//import nvidia from './assets/nvidia.png';
import './css/aboutus.css'
import Logo from './images/x82.png'
const Aboutus=()=>{
    return(
    <div>
    <div className="Left" style={{backgroundColor:"#000000"}}>
        <h1 style={{color:"white", textAlign:"center"}} >ABOUT US</h1>
    </div>
        <div className="Right">
            <div className="Card">
                
                <h1 style={{color:"red", textAlign:"center", fontSize:"60px"}}>X8 CUSTOMS</h1>
                <p className='text'>X8 Customs was launched as a franchise to create customisable PC Machines at affordable prices. We have happy customers all across the world. Our machines are built with durability to withstand extreme performance because they are built using extreme standard components available in the market. We take no compromise in quality to ensure customer satisfaction</p>
               <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
               <h2 style={{textAlign:"left",textDecorationLine:"underline",color:"red"}}>CONTACT US</h2>
               <br /><br />
               <div className='abt'>
               <h4 className='team'>Team Blaze</h4>
               <h4 className='team'>CSE - A</h4>
               <h4 className='team'>Sri Krishna College of Technology</h4>
               <h4 className='team'>Kovaipudur, Coimbatore-641042</h4>
               </div>
                
                    
               
               <div className='brand'>
               <img src={require('./images/x82.png')} alt="X8" className='hp' />
               </div>
            </div>
        </div>

        
    </div>
    )
}
export default Aboutus