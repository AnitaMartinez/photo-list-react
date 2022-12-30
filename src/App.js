import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NavBar } from './components/NavBar'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />

      </Routes>
      <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              ? (
                <Routes>
                  <Route path='/favs' element={<Favs />} />
                  <Route path='/user' element={<User />} />
                </Routes>
                )
              : (
                <Routes>
                  <Route path='/favs' element={<NotRegisteredUser />} />
                  <Route path='/user' element={<NotRegisteredUser />} />
                </Routes>
                )
          )
        }
      </UserLogged>
      <NavBar />
    </BrowserRouter>
  )
}
