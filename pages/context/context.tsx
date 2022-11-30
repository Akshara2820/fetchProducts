import React ,{useState} from 'react';

export const CartContext = React.createContext({});

function CartProvider(props:any) {
    const [cart,setCart] = useState([]);
    const [toggle,setToggle] = useState(false)
    const [search,setSearch] = useState('')
  return (
    <CartContext.Provider value={{cart,setCart,toggle,setToggle,search,setSearch}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;