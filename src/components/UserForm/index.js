import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} />
        <Input type='password' placeholder='********' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
