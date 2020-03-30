import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const Unregistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }
                    return <UserForm onSubmit={onSubmit} title='Registrate' />
                  }
                }
              </RegisterMutation>
              <UserForm onSubmit={activateAuth} title='Inicia Sesión' />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
