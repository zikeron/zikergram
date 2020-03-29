import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input type='email' placeholder='Email' {...email} />
      <input type='password' placeholder='********' {...password} />
      <button>Iniciar sesión</button>
    </form>
  )
}
