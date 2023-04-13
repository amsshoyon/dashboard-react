import '@mui/material'
import { CustomThemeParts } from './material.theme'

declare module '@mui/material' {
  interface Theme extends CustomThemeParts {}
  interface ThemeOptions extends CustomThemeParts {}

  interface PaletteColor {
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
    910?: string
    920?: string
    930?: string
    940?: string
    A100?: string
    A200?: string
    A400?: string
    A700?: string
    boxShadow?: string
    contrastText?: string
    dark?: string
    light?: string
    main?: string
  }
  interface Color {
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
    910?: string
    920?: string
    930?: string
    940?: string
    A100?: string
    A200?: string
    A400?: string
    A700?: string
    boxShadow?: string
    contrastText?: string
    dark?: string
    light?: string
    main?: string
  }
  interface Palette {
    accent?: Palette['primary']
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}
