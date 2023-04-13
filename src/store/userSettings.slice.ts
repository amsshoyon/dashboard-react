import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFromLocalStorage, setInLocalStorage } from '../utils/localStorageUtils'
import i18n from '../localization/i18n'

export interface UserSettingsState {
  darkMode: boolean
  sidebarOpen: boolean
  language: string
}

const initialSidebarOpen = getFromLocalStorage('sidebarOpen') ?? false
const initialDarkMode = getFromLocalStorage('darkMode') ?? true
const setSidebarOpenCSSVariable = (newOpen: boolean) => {
  document.documentElement.style.setProperty('--sidebarWidth', newOpen ? '277px' : '103px')
}
setSidebarOpenCSSVariable(initialSidebarOpen)

const initialState: UserSettingsState = {
  darkMode: initialDarkMode,
  sidebarOpen: initialSidebarOpen,
  language: 'de',
}

export type SetDarkModeAction = PayloadAction<boolean>
export type SetSidebarOpenAction = PayloadAction<boolean>
export type SetLanguageAction = PayloadAction<string>

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    setDarkMode: (state, action: SetDarkModeAction) => {
      setInLocalStorage('darkmode', action.payload)
      state.darkMode = action.payload
    },
    setSidebarOpen: (state, action: SetSidebarOpenAction) => {
      setSidebarOpenCSSVariable(action.payload)
      setInLocalStorage('sidebarOpen', action.payload)
    },
    setLanguage: (state, action: SetLanguageAction) => {
      state.language = action.payload
      i18n.changeLanguage(state.language)
    },
  },
})
export default userSettingsSlice.reducer
