import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-ana.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
    setLoading(true)
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    // para limpiar el efecto, el evento escuchador
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = ({ fixed } = {}) => (
    <List fixed={fixed} visible={showFixed}>
      {
        loading
          ? <Item key={loading}><Category /></Item> // TODO: add loading spinner svg
          : categories.map(category => {
            const { id } = category
            return (
              <Item key={id}><Category {...category} /></Item>
            )
          })
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {renderList({ fixed: true })}
    </>
  )
}
