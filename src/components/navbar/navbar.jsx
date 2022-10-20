import React from 'react'
import logo from '../../assets/logo.svg'
import './navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
        <img src={logo}/>
        Estatery
        </div>
        <div className='items'>
            <a href=""><span className='rent'>Rent</span></a>
            <a href="">Buy</a>
            <a href="">Sell</a>
            <a href="">Manage Property<RiArrowDropDownLine size='1.5rem'/></a>
            <a href="">Resources<RiArrowDropDownLine size='1.5rem'/></a>
        </div>
        <div className='buttons'>
            <button style={{color:'rgb(48, 3, 69)', border:'1px solid rgb(213, 201, 220)',backgroundColor:'white'}}>Login</button>
            <button style={{color:'white', border:'1px solid rgb(213, 201, 220)',backgroundColor:'rgb(84, 9, 119)'}}>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Navbar