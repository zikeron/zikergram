import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] =  useState(false)

  useEffect(() => {
    window.fetch('https://zikergram-api.now.sh/categories')
      .then(json => json.json())
      .then(response => setCategories(response))
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('onscroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => (
          <Item key={category.id}>
            <Category
              {...category}
            />
          </Item>)
        )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}
