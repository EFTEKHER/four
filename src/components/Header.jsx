import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import '../styles/header.scss'
import { useSelector } from 'react-redux';
const Header = () => {
  const {cartItems}=useSelector(state=>state.cart) 
  return (
    <nav>
      <h2>logo here..</h2>

      
<div>
<Link to={"/"}>Home</Link>
<Link to={"/cart"}>Cart</Link>
<FiShoppingBag/>
<p>{cartItems.length}</p>
 </div>

    </nav>
  )
}

export default Header
