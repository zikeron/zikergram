import React from 'react'
import { FavsByQuery } from '../container/GetFavorites'
import { Layout} from '../components/Layout'

export default () => {
  return (
    <>
      <Layout title='Favorites' subtitle='Esta es tu zona de imagenes favoritos'>
        <FavsByQuery />
      </Layout>
    </>
  )
}
