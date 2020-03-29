import { css, keyframes } from 'styled-components'

export const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opcaity: 0
  }
  
  to {
    filter: blur(0);
    opcaity: 1
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyFrames} ${type};`

const rotateFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
 `

export const rotate = () => css`
  animation: 1.5s ${rotateFrames} linear infinite;
`
