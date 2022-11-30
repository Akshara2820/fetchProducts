import React ,{useState} from 'react';

export const CartContext = React.createContext({});

function CartProvider(props:any) {
    const [cart,setCart] = useState([]);
    const [toggle,setToggle] = useState(false)
    const [search,setSearch] = useState('')
    const [count, setCount] =  useState(0)
  return (
    <CartContext.Provider value={{cart,setCart,toggle,setToggle,search,setSearch,count, setCount}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;