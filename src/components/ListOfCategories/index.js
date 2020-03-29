import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    window.fetch('https://zikergram-api.now.sh/categories')
      .then(json => json.json())
      .then(response => setCategories(response))
  }, [])
  return (
    <List>
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
}
