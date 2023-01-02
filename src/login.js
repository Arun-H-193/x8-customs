import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import './css/login.css'
const Login=()=>{
    let navigate =useNavigate(); 

    const [user,setUser]=useState({username:'',password:''})

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});

    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData={
            username:user.username,
            password:user.password
        }
        axios.get('https://6392dd4711ed187986a2f456.mockapi.io/datastore',sendData)
        .then((result)=>{
            if (result.data.status ===''){
                window.localStorage.setItem('username',result.data.username);
                window.localStorage.setItem('password',result.data.password);
                navigate('/component/Home');
            }
          
                
            
        })
    }
    return(
        <>
            <div className="login">
                <form method="post" name="loginform" onSubmit={submitForm}>
                    <div className="signin">
                        <div className="row">
                            <div className="col"><h1>SIGN IN</h1></div>
                        </div>
                        <div className="row">
                            <div classname="user">
                                <label for="loginusername">username</label>
                                <input type="text" name="username" className="loginusername"onChange={handleChange} value={user.username} style={{borderRadius:"10px",height:"30px",marginLeft:"20px",width:"150px", fontSize:"20px"}}
                                />
                            </div>
                        
                        </div>
                        <br/>
                        <div className="row">
                            <div classname="pass">
                                <label for="loginpass">Password</label>
                                <input type="password" name="password" className="loginpass"onChange={handleChange} value={user.password} style={{borderRadius:"10px",height:"30px",marginLeft:"20px",width:"150px", fontSize:"20px"}}
                                /> 
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div classname="col"></div>
                            <div className="col">
                                <Link to='/front'><input type="submit" name="submit" value="LOGIN" style={{fontSize:"24px",fontWeight:"bold",background:"red",color:"white",borderRadius:"50px",height:"50px",width:"150px",borderColor:"red"}}></input></Link>
                            </div>
                        </div>
                    </div>
                </form>
                <br />
                <div className="links">
                    <Link to="/recoverpage"style={{color:'aqua', fontSize:"24px"}}>forgot password?</Link><br/><br/>
                    <Link to="/signup"style={{color:'aqua', fontSize:"24px"}}>Create account</Link>
                </div>
            
            </div>
        </>
    )
}

export default Login;