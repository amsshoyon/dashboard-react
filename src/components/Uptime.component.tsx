import { styled } from '@mui/material'
import { random } from 'lodash'

const myArray = [...Array(30)]
const Container = styled('div')`
  display: flex;

  ${[...Array(30)].map(
    (e, i) =>
      `
   > div:nth-of-type(${i}) {
    animation-delay: ${random(2.5)}s;
  }
  `,
  )}
`
const Bar = styled('div')`
  height: 20px;
  background: linear-gradient(180deg, rgba(0, 133, 41, 1), rgb(56, 183, 84));
  flex: 1;
  background-size: 100% 400%;
  animation: gradient 2s ease-in-out infinite;
  margin: 0 5px;

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`

export const Uptime = () => {
  return (
    <Container>
      {[...Array(30)].map((e, i) => (
        <Bar key={i} />
      ))}
    </Container>
  )
}
