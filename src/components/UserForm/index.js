import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Form, Error, Input, Title } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.value && password.value) {
      onSubmit({
        email: email.value,
        password: password.value
      })
    }
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} type='email' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='********' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  )
}
