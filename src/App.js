import React from 'react'
import { GlobalStyle } from './GlobalStyles'
import { ListOfCategories } from './components/LisfOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
