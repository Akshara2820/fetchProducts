import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './component/header'
import Products from './component/products'
import Login from './login'

export default function Home() {
  return (
    <div>
    <Header/>
      <Login/>
      <Products/>
    </div>
  )
}
