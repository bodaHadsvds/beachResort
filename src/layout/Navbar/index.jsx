import React from 'react'
import logo from "../../images/logo.svg"
import {FaAlignRight} from "react-icons/fa"
import {BsFillSunFill ,BsFillMoonFill} from "react-icons/bs"
 import  { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RoomContext } from '../../context'
import { toast } from 'react-toastify'

 
 export default class Navbar extends Component {
    state={
     isOpen:false
    }
    static contextType = RoomContext;
    
    handleToggle = ()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    handleLogout =()=>{ 
 
      this.props.setAuthanticatied(false)
      localStorage.removeItem("authantacited")
      this.props.navigate("/login")
      toast.success("logout successfully")
    }
   
   render() {
    const { toggleDarkTheme  ,isDarkTheme} =this.context
console.log(this.props);
     return (
       <nav className='Navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/"> <img src={logo} alt="Beach Resort" /></Link>
                <button type='button' className='nav-btn' onClick={this.handleToggle}><FaAlignRight className='nav-icon'/></button>
            </div>
            <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"}>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/rooms">Room</NavLink></li>
            </ul>
<ul className='nav-right'>
   <li><button className='dark-toggle' onClick={toggleDarkTheme}> 
  {  isDarkTheme ?    <BsFillMoonFill  className='icon-toggle'/>:<BsFillSunFill className='icon-toggle'/> 
          
             }
            </button> </li> 
             <li>
                <button className='logout' onClick={()=>this.handleLogout()} >logout </button> 
             </li>
          
</ul>
         
        </div>
       </nav>
     )
   }
 }
 