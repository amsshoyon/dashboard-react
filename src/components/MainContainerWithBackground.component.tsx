import React from 'react'
import { styled } from '@mui/material'

const Main = styled('main')`
  flex: 1;
  padding: 60px 32px 32px 64px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
const ContentContainer = styled(`div`)`
  display: flex;
  flex-shrink: 0;
  background-color: transparent !important;
  flex-direction: column;
`

type MainContainerWithBackgroundProps = {
  className?: string
  children?: React.ReactNode
}
export const MainContainerWithBackground = ({ className, children }: MainContainerWithBackgroundProps) => {
  return (
    <Main className={className}>
      <ContentContainer>{children}</ContentContainer>
    </Main>
  )
}
