import { createTheme, ThemeOptions } from '@mui/material'

export enum FONTS {
  SansSerif = 'NotoSansSemiCondensed',
  Serif = 'Roboto',
}

export enum TYPOGRAPHY_CLASS {
  Display01 = 'app-typography-display-01',
  Display02 = 'app-typography-display-02',
  SubHeading = 'app-typography-subheading',
  Paragraph01 = 'app-typography-paragraph-01',
  Paragraph02 = 'app-typography-paragraph-02',
  Paragraph03 = 'app-typography-paragraph-03',
  Caption = 'app-typography-caption',
  Footer = 'app-typography-footer',
}

export interface CustomThemeParts {
  customColors?: {
    gradients?: {
      grey?: string
      light?: string
      main?: string
      dark?: string
    }
    backgrounds?: {
      grey?: string
      light?: string
      main?: string
      dark?: string
    }
    primaryPetrol?: string
    borderTableBottom?: string
  }
  customBorders?: {
    borderCellBottom?: string
  }
}
export interface CustomTheme extends CustomThemeParts, ThemeOptions {}

const sharedSettings: CustomTheme = {
  palette: {
    primary: {
      100: '#DEF3FC',
      200: '#AEE0F9',
      300: '#8DD4F6',
      400: '#6CC7F3',
      500: '#5CC1F2',
      600: '#53AEDA',
      700: '#4A9AC2',
      800: '#4087A9',
      900: '#377491',
      910: '#254D61',
      920: '#1C3A49',
      930: '#122730',
      940: '#091318',
      boxShadow: '',
      main: '#53AEDA',
    },
    secondary: {
      100: '#F4DFEE',
      200: '#E4B2D7',
      300: '#D883BC',
      400: '#D056A2',
      500: '#CD3E8C',
      600: '#BD3871',
      700: '#A5316B',
      800: '#902C65',
      900: '#69215A',
      boxShadow: '',
      main: '#CD3E8C',
    },
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000',
    },
    accent: {
      100: '#FDF3DF',
      200: '#F9E1B2',
      300: '#F7CE85',
      400: '#F5BB5C',
      500: '#F3AD44',
      600: '#F1A037',
      700: '#EC9533',
      800: '#E4852F',
      900: '#DC772B',
      boxShadow: '',
      main: '#DC772B',
    },
    success: {
      100: '#A0E9DB',
      200: '#5EDCC3',
      300: '#54CBAA',
      400: '#4EBC97',
      500: '#48AD86',
      600: '#429E78',
      700: '#3A8C66',
      800: '#337C57',
      900: '#275E3B',
      boxShadow: '',
      main: '#5EDCC3',
    },
    grey: {
      100: '#F9FAFB',
      200: '#EEF0F4',
      300: '#E0E4EB',
      400: '#D1D6E1',
      500: '#C1C8D7',
      600: '#B2BBCD',
      700: '#A2ADC3',
      800: '#939FB9',
      900: '#8392AF',
      910: '#5F6A80',
      920: '#434A59',
      930: '#303540',
      940: '#1D2026',
    },
  },
  typography: {
    fontFamily: `${FONTS.SansSerif}`,
  },
  customColors: {
    primaryPetrol: 'rgba(2, 175, 238, 1)',
    backgrounds: {
      light: '#FFFFFF',
      main: '#1A3E50',
      dark: '#01151F',
      grey: '#EEF0F4',
    },
    gradients: {
      grey: 'linear-gradient(145.74deg, #EEF0F4 42.81%, #C1C8D7 91.4%)',
      dark: 'linear-gradient(167deg, rgba(104, 173, 230, 0.31) 30.39%, rgba(48, 111, 171, 0.74) 86.76%)',
      light: 'linear-gradient(146.81deg, #68ADE6 29.77%, #306FAB 76.54%)',
      main: 'linear-gradient(147.74deg, #1F4366 31.26%, #051016 96.07%)',
    },
  },
}

export const lightTheme = createTheme({
  ...sharedSettings,
  palette: {
    mode: 'light',
    ...sharedSettings.palette,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          borderRadius: '12px',
        },
      },
    },
  },
  customColors: {
    ...sharedSettings.customColors,
    borderTableBottom: 'rgba(0, 0, 0, 0.2)',
  },
})

export const darkTheme = createTheme({
  ...sharedSettings,
  palette: {
    mode: 'dark',
    ...sharedSettings.palette,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#00141E',
          borderRadius: '0',
        },
      },
    },
  },
  customColors: {
    ...sharedSettings.customColors,
    borderTableBottom: '#142D3B',
  },
  customBorders: {
    borderCellBottom: 'rgba(255,255,255,0.03)',
  },
})
