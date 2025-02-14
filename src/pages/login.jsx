import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoginBanner from '../components/loginBanner'




const Login = ({setAuthanticatied ,authenticated}) => {
const [email ,setEmail]=useState("user1@hotmail.com")
const [password ,setPassword]=useState('123456789')
const [Loading ,setLoading] = useState(false)
const isAuthenticated = localStorage.getItem("authantacited")
const navigate = useNavigate()
    const loginAuth = async()=>{
        setLoading(true);
if(email ==="user1@hotmail.com" && password==='123456789'){
    toast.success("login successfully")
    navigate("/")
    setLoading(false)
     localStorage.setItem("authantacited" ,true)
    setAuthanticatied(true)
}else{
        toast.error("Incorrect Password or Username!");
        setLoading(false);
      
}
    }
    console.log(authenticated ,"login");
    if(isAuthenticated){
        return <Navigate to="/"/>
    }
    if(Loading){
        return <Loading/>
    }
  return (
    <div className='bg-login'>
        <LoginBanner>
            <form className='login-form' >
             
                     <label htmlFor="email">email</label>
                <input type="email" className='input-custom' id='email' onChange={(e)=>setEmail(e.target.value)} defaultValue={email}/>
             
           
                    <label htmlFor="password">password</label>
                <input type="password" className='input-custom' id='password' onChange={(e)=>setPassword(e.target.value)} defaultValue={password}/>
           
            
            </form>
            <button className='btn-primary' onClick={loginAuth}> sign in </button>
        </LoginBanner>
    </div>
  )
}

export default Login