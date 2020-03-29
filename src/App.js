import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Navbar />
    </>
  )
}
