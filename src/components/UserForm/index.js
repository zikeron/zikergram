import React from 'react'
import { useInputValue } from '../../Hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input type='email' placeholder='Email' {...email} />
        <Input type='password' placeholder='********' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
