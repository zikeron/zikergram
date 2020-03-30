import React from 'react'
import { Img, Grid, Link } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return <Grid>
    {
      favs.map(fav =>
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Img src={fav.src} />
        </Link>
      )
    }
  </Grid>
}
