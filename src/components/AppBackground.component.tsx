import { styled } from '@mui/material'
import React from 'react'

const AppBackgroundContainer = styled('div')`
  position: fixed;
  background: ${(props) => (props.theme.palette.mode === 'light' ? '#F6F6F9' : '#091318')};
  z-index: -1;
  inset: 0;
  overflow: hidden;
`
const AppBackgroundImage = styled('div')`
  position: absolute;
  inset: 0;
  background-image: url('./assets/background/body-background.png');
  filter: saturate(0.8);
  background-position: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: cover;
  background-color: rgb(3, 12, 29) !important;
`

export interface AppBackgroundProps {
  className?: string
  styles?: React.CSSProperties
}

export const AppBackground = ({ className, styles }: AppBackgroundProps): React.ReactElement => {
  return (
    <AppBackgroundContainer className={className} style={styles}>
      <AppBackgroundImage />
    </AppBackgroundContainer>
  )
}
