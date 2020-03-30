import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet/es/Helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title> Zikergram </title>
        <meta name='description' content='Con zikergram puedes compartir todas las fotos de tus mascotas' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
