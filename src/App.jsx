import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

function App() {
  return<>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
}

export default App
