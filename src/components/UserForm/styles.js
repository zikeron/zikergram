import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 30px;
  max-width: 480px;
  margin: auto auto 8px auto;
  left: 0;
  right: 0;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &:focus {
     border: 2px solid #49a8de;
     border-radius: 30px;
     outline: none;
  }
  &[disable] {
    opacity: .3
  }
`

export const Button = styled.button`
  align-items: center;
  background: #49a8de;
  border-radius: 30px;
  color: #fff;
  height: 32px;
  max-width: 480px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: block;
  width: 100%;
  text-align: center;
  &[disable] {
    opacity: .3
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`
