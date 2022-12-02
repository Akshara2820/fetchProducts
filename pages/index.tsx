import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './component/header'
import Products from './component/products'
import Login from './login'
import CartProvider from './context/context'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './signup'
import { useEffect, useState } from 'react'

export default function Home() {
 
  // useEffect(() =>{
  //   setIsLoggedIn(true)
  // },[])
  return (
    <div>
      
      <Login/>
    </div>
  )
}
