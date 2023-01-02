import React from "react"
import {useState} from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'
import { render } from "@testing-library/react"
import { Button } from "@mui/material"
import './css/signup.css'

const Register=(props)=>{ 

    let history=useNavigate();
    const [data,setData]=useState({
        username:"",
        create_password:"",
        confirm_password:"",
        email:"",
        phone_number:""
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});

        // console.log(data)
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData={
            username:data.username,
            create_password:data.create_password,
            confirm_password:data.confirm_password,
            email:data.email,
            phone_number:data.phone_number
        }
        axios.post('https://6392dd4711ed187986a2f456.mockapi.io/datastore',sendData)
        .then((result)=>{
            if (result.data.status == "Invalid")
            alert('Invalid user');
            else{
                history('/login');
            }
        })
    }

    

    render()
    {

        return(
            <>
                <div className="main-box">
                    <form onSubmit={submitForm}>
                        <center>
                        <div className="row1">
                            <div className="col1"><h1>SIGN UP</h1></div>
                        </div>
                        <div className="row1">
                            <div className="col1">
                                <label for="Username" style={{fontSize:"30px"}}>Enter UserName</label></div>
                            <div className="col1">
                                <input type="text" name="username" className="Username"
                                onChange={handleChange} value={data.username} style={{width:"150px",height:"30px",borderRadius:"30px", fontSize:"20px"}}
                                />
                            </div>
                        </div>

                        <div className="row1">
                            <div className="col1">
                                <label for="Createpass" style={{fontSize:"30px"}}> Create Password</label></div>
                            <div className="col1">
                                <input type="password" name="create_password"className="Createpass"
                                onChange={handleChange} value={data.create_password} style={{width:"150px",height:"30px",borderRadius:"30px", fontSize:"20px"}}
                                />
                            </div>
                        </div>

                        <div className="row1">
                            <div className="col1">
                                <label for="confirmpass" style={{fontSize:"30px"}}>Confirm Password</label></div>
                            <div className="col1">
                                <input type="password" name="confirm_password"className="confirmpass"
                                onChange={handleChange} value={data.confirm_password} style={{width:"150px",height:"30px",borderRadius:"30px", fontSize:"20px"}}
                                />
                            </div>
                        </div>

                        <div className="row1">
                            <div className="col1">
                                <label for="email" style={{fontSize:"30px"}}>Email Id</label></div>
                            <div className="col1">
                                <input type="email" name="email"className="email"
                                onChange={handleChange} value={data.email} style={{width:"150px",height:"30px",borderRadius:"30px", fontSize:"20px"}}
                                />
                            </div>
                        </div>

                        <div className="row1">
                            <div className="col1">
                                <label for="phno" style={{fontSize:"30px"}}>Phone Number</label>
                                </div>
                            <div className="col1">
                                <input type="tel" name="phone_number"className="phno"
                                onChange={handleChange} value={data.phone_number} style={{width:"150px",height:"30px",borderRadius:"30px", fontSize:"20px"}}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="row1">
                            <div className="col">
                                <input type='submit'name="submit" value="Create account" style={{background:"black",fontSize:"25px", color:"lime",borderRadius:"50px",border:"6px solid lime",height:"50px",width:"150px"}}></input><br/><br/>
                            </div>
                            <Button className="loginbtn" variant="contained" style={{background:"black",color:"red",borderRadius:"50px",border:"6px solid red",width:"100px",height:"30px"}} onClick={()=>{history("/login")}}>back</Button>
                        </div>
                        </center>
                    </form>
                </div>


            </>
        )
    }
}

export default Register;