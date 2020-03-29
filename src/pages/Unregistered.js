import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const Unregistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
            <UserForm onSubmit={activateAuth} title='Registrate' />
            <UserForm onSubmit={activateAuth} title='Inicia Sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
