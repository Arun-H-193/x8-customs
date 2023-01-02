import { Link } from "react-router-dom";
import './css/passreset.css'

const Passreset=()=>{
return(
    <div>
        <div className="background" >
        </div>
        <h1 className="verify" style={{color:"white", textAlign:"center"}} >Verify its you,</h1><br></br>
        <p className="resettext">Before moving ahead kindly verify your identity by entering the code received via your email below</p>
       
        <input className="code" type="text" maxLength="1"></input>
        
        <input className="code1" type="text" maxLength="1"></input>
        <input className="code2" type="text" maxLength="1"></input>
        <input className="code3" type="text" maxLength="1"></input>
        <input className="code4" type="text" maxLength="1"></input>
        <input className="code5" type="text" maxLength="1"></input>
        <Link to='/pwdreset'><button className="reset" type="submit">VERIFY</button></Link>
        {/*<Link to='resendOtp()'>Resend OTP</Link>*/}
       
      
        
</div>

)
}
export default Passreset;