import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import ChainedBackend from 'i18next-chained-backend'
import resourcesToBackend from 'i18next-resources-to-backend'
import { cloneDeep, merge } from 'lodash'
import defaultLocale from './defaultTranslations.json'
import { environment } from '../constants/environment'

const backend: any = {
  backends: [
    HttpBackend,
    resourcesToBackend((language, namespace, callback) => {
      callback(null, defaultLocale)
    }),
  ],
  backendOptions: [
    {
      loadPath: `${environment.API.LANGUAGE_HTTP_URI}/{{lng}}`,
      parse(data: string): { [p: string]: any } {
        const dataFromBackend = JSON.parse(data)
        const result = cloneDeep(defaultLocale)
        merge(result, dataFromBackend.values ?? {})
        return result
      },
    },
  ],
}

i18n
  .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    backend: backend,
    returnNull: false,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
export default i18n
