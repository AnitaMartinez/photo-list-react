import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

export const App = () => {
  const currentQueryStringNavigation = window.location.search
  const urlParams = new window.URLSearchParams(currentQueryStringNavigation)
  const detailIdNavigation = urlParams.get('detail')

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      {
        detailIdNavigation
          ? <PhotoCardWithQuery id={detailIdNavigation} />
          : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pet/:id' element={<Home />} />
            </Routes>
            )
      }
    </BrowserRouter>
  )
}
