import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { PhotoCardByQuery } from './container/PhotoCardByQuery'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardByQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            </Router>
      }
    </>
  )
}
