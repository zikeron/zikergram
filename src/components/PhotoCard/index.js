import React from 'react'
import { Img, Button, ImageWrapper} from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImageWrapper>
        <Img src={src} alt='Cover image' />
      </ImageWrapper>
    </a>
    <Button>
      <MdFavoriteBorder size='32px' />{likes} likes!
    </Button>
  </article>
)
