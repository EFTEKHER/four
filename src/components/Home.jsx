import React from 'react'
 import toast from 'react-hot-toast';
 import {  useDispatch } from 'react-redux';
export const img1="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-silver-m1-2020_GEO_EMEA_LANG_DE?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621710000";
const productList=[{
  name: "Macbook Air",
  price: 11000,
  imgSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-silver-m1-2020_GEO_EMEA_LANG_DE?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621710000",
  id: 2,
},
{
  name: "Macbook Pro 13-inch",
  price: 15000,
  imgSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-silver-m1-2020_GEO_EMEA_LANG_DE?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621710000",
  id: 3,
},
{
  name: "Macbook Pro 16-inch",
  price: 22000,
  imgSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-silver-m1-2020_GEO_EMEA_LANG_DE?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621710000",
  id: 4,
}

]
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

const Home = () => {
const dispatch=useDispatch();


  const addToCartHandler=(options)=>{
    dispatch({type:"addToCart",payload:options})
    dispatch({type:"calculate"})
    toast.success("Added to Cart ");
    console.log(options);
   
  }
  return (
    <div className='home'>
    {productList.map((i) => (
      <ProductCard
        key={i.id}
        imgSrc={i.imgSrc}
        name={i.name}
        price={i.price}
        id={i.id}
        handler={addToCartHandler}
      />
    ))} 
    </div>
  )
}




export default Home
