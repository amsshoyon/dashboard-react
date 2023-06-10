import { styled } from '@mui/material'
import classNames from 'classnames'
import './styles/global.css'
import { Notifications } from '@/components/Notifications.component'
import { PageRoutes } from './routes'

const AppContainer = styled('div')`
  color: ${(props) => (props.theme.palette.mode === 'light' ? '#000' : '#fff')};
  background-color: ${(props) => (props.theme.palette.mode === 'light' ? '#fff' : '#000028')};
`

export const App = () => {
  return (
    <>
      <Notifications />
      <AppContainer className={classNames({ app: true, 'leading-normal': true })}>
        <PageRoutes />
      </AppContainer>
    </>
  )
}
