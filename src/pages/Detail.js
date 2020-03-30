import React from 'react'
import { PhotoCardByQuery } from '../container/PhotoCardByQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardByQuery id={detailId} />
    </Layout>
  )
}
