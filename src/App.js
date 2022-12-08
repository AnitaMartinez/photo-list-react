import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/LisfOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </div>
)
