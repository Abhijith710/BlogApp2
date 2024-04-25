import React, { useState } from 'react'
import { Grid, TextField,Button,Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
    const[inputs,setInputs]=useState({});
    const Navigate = useNavigate();
    const inputHandler = (e) =>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
    const submitHandler=()=>{
        console.log('btn clicked',inputs)
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            if (res.data.message=="login successfull") {
                // console.log(person)
                const userId = res.data.person._id;
                sessionStorage.setItem("id",userId)
                Navigate('/view')
            }
        })
    }
  return (
    <div>
         <Typography variant='h3' style={{color:"red"}}>
            LOG IN FORM
        </Typography>
         <Grid item xs={12} sm={6} md={6}>
                    <TextField variant='outlined' label='Username' fullWidth
                    name='username' onChange={inputHandler}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                    <TextField variant='outlined' label='Password' fullWidth
                    name='password' onChange={inputHandler}/>
            </Grid>
            <Grid item sx={12} sm={12} md={12}>
                <Button variant='contained' color='secondary' onClick={submitHandler}>submit</Button>
            </Grid>
            <Grid item sx={12} sm={12} md={12}>
                <Link to={'/sign'}>New user click here</Link>            
            </Grid>

    </div>
  )
}
export default Login