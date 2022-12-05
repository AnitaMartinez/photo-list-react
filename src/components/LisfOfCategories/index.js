import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    fetch('https://petgram-server-ana.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = ({ fixed } = {}) => (
    <List className={fixed ? 'fixed' : ''} visible={showFixed}>
      {
        categories.map(category => {
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
