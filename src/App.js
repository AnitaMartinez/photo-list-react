import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/LisfOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

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
          : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={1} />
            </>
            )
      }

    </div>
  )
}
