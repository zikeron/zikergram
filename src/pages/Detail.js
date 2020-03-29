import React from 'react'
import { PhotoCardByQuery } from '../container/PhotoCardByQuery'

export const Detail = ({ detailId }) => {
  return (
    <PhotoCardByQuery id={detailId} />
  )
}
