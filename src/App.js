import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pet/:id',
    element: <Home />
  }
]))

export const App = () => {
  const currentQueryStringNavigation = window.location.search
  const urlParams = new window.URLSearchParams(currentQueryStringNavigation)
  const detailIdNavigation = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailIdNavigation
          ? <PhotoCardWithQuery id={detailIdNavigation} />
          : <RouterProvider router={router} />
      }

    </div>
  )
}
