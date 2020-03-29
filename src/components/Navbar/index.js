import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md'

const SIZE = '32px'

export const Navbar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favorites'> <MdFavorite size={SIZE} /></Link>
      <Link to='/user'><MdPerson size={SIZE} /></Link>
    </Nav>
  )
}
