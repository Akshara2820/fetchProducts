import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './component/header'
import Products from './component/products'
import Login from './login'
import CartProvider from './context/context'

export default function Home() {
  return (
    <div>
      <Login/>
    </div>
  )
}
