import i18n from './../localization/i18n'
import { TOptions } from 'i18next'

export const translateWithGlobal = (key: string, additionalProps?: TOptions) => {
  if (!additionalProps) {
    return i18n.t(key)
  }
  return i18n.t(key, additionalProps)
}
