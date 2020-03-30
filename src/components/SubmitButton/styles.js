import styled from 'styled-components'

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
