import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import { darkTheme, lightTheme } from '@/styles/material.theme'
import { MemoizedAppGlobalStyles } from '@/styles/appStyles'
import { useAppSelector } from '@/store/store'

type ThemeProviderProps = {
  children: React.ReactNode
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const darkMode = useAppSelector((state) => state.userSettings.darkMode)
  const themeToUse = darkMode ? darkTheme : lightTheme

  return (
    <MuiThemeProvider theme={themeToUse}>
      <MemoizedAppGlobalStyles darkMode={darkMode} />

      {children}
    </MuiThemeProvider>
  )
}
