import React, { useState } from 'react'
import styled from 'styled-components';
import {ImCart} from 'react-icons/im'
import AddToCart from './cart';

function Header() {
    const [addCart,setAddCart] = useState(false)
    console.log(addCart,'ssss');
    

    const handelOpen= () =>{
        setAddCart((s:any) => !s)
    }

  return (
    <div>
        <Contanier>
            <div>
                <div className='flex justify-end px-10' onClick={handelOpen}> <ImCart/> </div>
            </div>
            {addCart ? <AddToCart /> :''}
        </Contanier>
    </div>
  )
}

export default Header;
const Contanier = styled.div`
padding: 20px;
margin: auto;

`