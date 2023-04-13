import React, { useEffect, useMemo, useState } from 'react'
import { styled } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import { AppBackground } from '@/components/AppBackground.component'
import { BrandIcon } from '@/components/BrandIcon.component'

const SplashScreenDialog = styled(Dialog)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 20000;

  .MuiDialog-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .MuiDialog-paper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: none;
    box-shadow: none;
  }

  @keyframes scaleInBrandShape {
    0% {
      opacity: 0;
      width: 150vw;
      transform: rotate(0);
    }
    20% {
      opacity: 0.05;
      width: 150vw;
      transform: rotate(0);
    }
    80% {
      opacity: 0.05;
    }
    100% {
      width: 68px;
      opacity: 1;
      transform: translate(-46vw, -43vh);
    }
  }

  .brand-shape-1 {
    path {
      fill: #fff;
    }
    height: auto;
    opacity: 0;
    animation-delay: 0.5s;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @keyframes showAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .title {
    user-select: none;
    font-style: normal;
    font-weight: 800;
    font-size: 74px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: ${(props) => (props.theme.palette.mode === 'light' ? '#1E2237' : '#fff')};
    transform: translate(-13px, 37px);
  }

  .letter {
    opacity: 0;
    animation-delay: 1.8s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    &:nth-of-type(1) {
      animation-delay: 1.2s;
    }

    &:nth-of-type(2) {
      animation-delay: 1.4s;
    }

    &:nth-of-type(3) {
      animation-delay: 1.6s;
    }
  }

  &.open {
    .brand-shape-1 {
      animation-name: scaleInBrandShape;
    }

    .letter {
      animation-name: showAnimation;
    }
  }
`

function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay], // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

export interface SplashScreenProps {
  className?: string
  open: boolean
  projectTitle: string
}

export const SplashScreen = ({ className, open, projectTitle }: SplashScreenProps): React.ReactElement => {
  const titleCharacters = useMemo(() => {
    return projectTitle.split('')
  }, [projectTitle])

  const debouncedOpen = useDebounce(open, 600)

  return (
    <SplashScreenDialog
      open={open}
      keepMounted
      transitionDuration={{ enter: 0, exit: 600 }}
      fullScreen
      hideBackdrop={true}
      className={`${className ?? ''} ${open || debouncedOpen ? 'open' : ''}`}
    >
      <>
        <AppBackground />

        <BrandIcon />
        <div className={'title'}>
          {titleCharacters.map((char, index) => {
            return (
              <span key={index} className={'letter'}>
                {char}
              </span>
            )
          })}
        </div>
      </>
    </SplashScreenDialog>
  )
}
