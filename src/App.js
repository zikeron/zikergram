import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
// import { Favorites } from './pages/Favorites'
import { NotFound } from './pages/NotFound'
import { User } from './pages/User'
import { Unregistered } from './pages/Unregistered'
import { Redirect, Router } from '@reach/router'
import { Navbar } from './components/Navbar'
import { Context } from './Context'

const Favorites = React.lazy(() => import('./pages/Favorites'))

export const App = () => {
  const { isAuth } = useContext(Context)
  console.log('isAuth', !isAuth)
  return (
    <Suspense fallback={<div></div>}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <Unregistered path='/login' />}
        {!isAuth && <Redirect from='/favorites' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favorites path='/favorites' />
        <User path='/user' />
      </Router>
      <Navbar />
    </Suspense>
  )
}
