import React, { useReducer } from 'react';

import {CASE_GET_CART} from "../helpers/cases";

export const cartContext = React.createContext()


const INIT_STATE = {
    cart: {},
  };
  
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CASE_GET_CART:
        return { ...state, cart: action.payload };
      default:
        return state;
    }
  };
  
  const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    function addProductToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          products: [],
          totalPrice: 0,
        };
      }
      let newProduct = {
        item: product,
        count: 1,
        subPrice: product.price,
      };
      let filteredCart = cart.products.filter(
        (item) => item.item.id === product.id
      );
      if (filteredCart.length > 0) {
        cart.products = cart.products.filter((item) => item.item.id !== product.id);
      } else {
        cart.products.push(newProduct);
      }
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    function getCart (){
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          products: [],
          totalPrice: 0,
        };
      }
      dispatch({
        type: CASE_GET_CART,
        payload: cart
      })
    }
    function deleteFromCart(id){
        let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          products: [],
          totalPrice: 0,
        };
      }
      cart.products = cart.products.filter((item) => item.item.id !== id)
      localStorage.setItem('cart', JSON.stringify(cart))
      getCart()
    }
    function checkItemInCart(id){
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = {
          products: [],
          totalPrice: 0,
        };
      }
      let filteredCart = cart.products.filter(
        (item) => item.item.id === id
      );
      return filteredCart.length > 0 ? true : false;
    }

    return (
      <cartContext.Provider
        value={{
          cart: state.cart,
          addProductToCart,
          getCart,
          deleteFromCart,
          checkItemInCart,
        }}
      >
        {children}
      </cartContext.Provider>
    );
  };
  
  export default CartContextProvider;