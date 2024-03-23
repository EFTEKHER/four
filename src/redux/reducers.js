import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("addToCart", (state, action) => {
      // Update specific property of the state based on action payload
      // For example:
      const item=action.payload;
      const isItemExist=state.cartItems.find((i)=>i.id === item.id)
      if(isItemExist) {
        state.cartItems.forEach(i=>{
            if(i.id === item.id) i.quantity+=1;
        })
      }
      else{
        state.cartItems.push(item);
      }

    })
    .addCase("removeFromCart", (state, action) => {
      const item=action.payload;
      const isItemExist=state.cartItems.find((i)=>i.id === item.id)
      if(isItemExist) {
        state.cartItems.forEach(i=>{
            if(i.id === item.id) {
              if(i.quantity!==1)
              {
                  i.quantity-=1;
              }
            };

           
        })
      }
      else{
        state.cartItems.pop(item);
      }
    })
    .addCase("deleteAll", (state, action) => {
      const itemIdToDelete = action.payload;
      console.log('deleteAll');
      state.cartItems = state.cartItems.filter((item) => item.id !== itemIdToDelete);
    })
    .addCase("calculate", (state, action) => {
      let sum=0;
      state.cartItems.forEach((item) =>(sum += item.price*item.quantity));
      state.subTotal=sum;
      state.shipping=(state.subTotal)>1000?0:200;
      state.tax=(state.subTotal*0.18);
      state.total=state.shipping+state.tax+state.subTotal
    })
   
    .addDefaultCase((state, action) => {
      // Default case if none of the action types match
      // Usually, you don't need to handle this unless necessary
    });
});

export default cartReducer;

