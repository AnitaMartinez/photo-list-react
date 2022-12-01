import React from 'react'
import { GlobalStyle } from './GlobalStyles'
import { ListOfCategories } from './components/LisfOfCategories'
import { PhotoCard } from './components/PhotoCard'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </div>
)
