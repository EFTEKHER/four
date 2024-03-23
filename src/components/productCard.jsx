const productCard=({name,id,price,imgSrc,handler})=>(
    <div className='productCard'>
    <img src={imgSrc} alt={name}/>
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})} >Add to cart</button>
    
    </div>
  )

  export default productCard;