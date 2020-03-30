import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title> {title} | Zikergram </title>}
        {subtitle && <meta name={subtitle} content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title> {title} </Title>}
        {subtitle && <Subtitle> {subtitle} </Subtitle>}
        {children}
      </Div>
    </>
  )
}
