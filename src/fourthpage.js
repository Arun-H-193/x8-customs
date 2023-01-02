import React from "react";
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom"


function Fourthpage(){
    const navigate = useNavigate();
    return(
        <div className="fourthpage">
            <div className="p4">
                <center>
                    <h1 className="h1fp">X8 CUSTOMS</h1>
                    <h3 className="h3fp">WELCOMES YOU !</h3>
                    <Button className="login" onClick={()=>{navigate("/login")}} variant="contained" size="large" color="error">LOGIN</Button>
                </center>
            </div>
        </div>
    )
}
export default Fourthpage; 