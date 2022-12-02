import React ,{useState} from 'react';

export const CartContext = React.createContext({});

function CartProvider(props:any) {
    const [cart,setCart] = useState([]);
    const [toggle,setToggle] = useState(false)
    const [search,setSearch] = useState('')
    const [count, setCount] =  useState(0)
    const [countItem , setCountItem] = useState(0)
    const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <CartContext.Provider value={{cart,setCart,toggle,setToggle,search,setSearch,count, setCount, countItem , setCountItem,isLoggedin, setIsLoggedIn}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;