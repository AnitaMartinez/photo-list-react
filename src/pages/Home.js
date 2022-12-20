import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/LisfOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

export const Home = () => {
  const { id } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
