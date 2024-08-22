import { useState } from 'react'

import './App.css'
import { Routes, Route, useOutlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Left from './Components/Left/Left'
import Blog from './Components/Blog/Blog'
import Center from './Components/Center/Center'
import Right from './Components/Right/Right'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import Layout from './Components/Layout/Layout'

function App() {
  // let outlet = useOutlet()
  // let outlet2 = useOutlet()

  return (
    <>
      <div id='routeContainer'>

        <Header />

        <Left />

        <Center />

        <Right />

        <Footer />

      </div>

    </>
  )
}

export default App
