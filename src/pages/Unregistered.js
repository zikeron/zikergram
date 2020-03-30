import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const Unregistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'User already exist'

                    return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrate' />
                  }
                }
              </RegisterMutation>
              <LoginMutation>
                {
                  (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables }).then(activateAuth)
                    }

                    const errorMsg = error && 'The password is not correct or the user does not exist'

                    return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión' onSubmit={onSubmit} />
                  }
                }
              </LoginMutation>
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
