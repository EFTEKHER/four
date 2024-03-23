import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { img1 } from './Home';

import { useSelector ,useDispatch} from 'react-redux';

const Cart = () => {
  const dispatch=useDispatch();
  const {cartItems,subTotal,
    shipping,
    tax,
    total,}=useSelector((state)=>state.cart)

  
  const increment=(id)=>{
    dispatch({type:"addToCart",payload:{id}});
    dispatch({type:"calculate"})
  }
  const decrement=(id)=>{
    dispatch({type:"removeFromCart",payload:{id}});
    dispatch({type:"calculate"})
  }
  const deleteHandler=(id)=>{dispatch({type:'deleteAll',payload:id});
  dispatch({type:"calculate"})
}
  return (
    <div className='cart'>
      <main>
     { cartItems.length>0?(
      cartItems.map(i=>(
        <CartItem imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        qty={i.quantity}
        id={i.id} 
        key={i.id} 
        decrement={decrement}
        increment={increment}
        deleteHandler={deleteHandler}      
        />
      ))  
     ): (<h1>No items yet</h1>)
    
    
    }
      </main>
      <aside><h2>subtotal:${subTotal}</h2>
      <h2>shipping:${shipping}</h2>
      <h2>tax:${tax}</h2>
      <h2>total:${total}</h2>
      </aside>
    </div>
  )
}

export default Cart

const CartItem=({imgSrc,name,price,qty,decrement,increment,deleteHandler,id})=>(
  <div className="cartItem">
  <img src={imgSrc} alt="Item" />
  <article>
  <h3>Name:{name}</h3>
  <p>price:${price}</p>

  </article>
  <div>
  <button onClick={()=>decrement(id)}>-</button>
  <p>{qty}</p>
  <button onClick={()=>increment(id)}>+</button>
  </div>
  <AiFillDelete onClick={(()=>deleteHandler(id))}/>
  </div>
)