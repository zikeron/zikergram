import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { User } from './pages/User'
import { Unregistered } from './pages/Unregistered'
import { Router } from '@reach/router'
import { Navbar } from './components/Navbar'
import Context from './Context'

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
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favorites path='/favorites' />
                <User path='/user' />
              </Router>
              : <Router>
                <Unregistered path='/favorites' />
                <Unregistered path='/user' />
              </Router>
        }
      </Context.Consumer>
      <Navbar />
    </>
  )
}
