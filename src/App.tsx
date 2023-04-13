import { styled } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard/DashboardPage.component'
import classNames from 'classnames'
import React from 'react'
import { AppBackground } from '@/components/AppBackground.component'
import { Notifications } from '@/components/Notifications.component'
import { PageLayout } from '@/components/PageLayout.component'

const AppContainer = styled('div')`
  color: ${(props) => (props.theme.palette.mode === 'light' ? '#000' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const App = () => {
  return (
    <>
      <Notifications />
      <AppBackground className="app-background" />
      <AppContainer
        className={classNames({
          app: true,
        })}
      >
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<DashboardPage />} />

            <Route path="*" element={<DashboardPage />} />
          </Route>
        </Routes>
      </AppContainer>
    </>
  )
}
