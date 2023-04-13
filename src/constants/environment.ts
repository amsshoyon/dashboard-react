const checkForEnvironmentVariable = (variable: string | undefined | boolean, csv = false): any => {
  if (variable && variable === 'undefined') {
    return undefined
  }

  if (variable === 'null') {
    return null
  }

  if (csv) {
    try {
      return (variable as string).split(',').map((x) => x.trim())
    } catch (error) {
      console.error("error parsing environment variable '%s' as csv: %o", variable, error)
      return null
    }
  }

  return variable
}

export interface Environment {
  version: string
  API: {
    API_HTTP_URI: string
    LANGUAGE_HTTP_URI: string
  }
  disableSplash: boolean
}

// @ts-ignore
const appVersion = __APP_VERSION__ || ''
const versionComponents: string[] = []
if (appVersion.length > 0) {
  versionComponents.push(appVersion)
}

export const environment: Environment = {
  version: versionComponents.join('-'),
  API: {
    API_HTTP_URI: checkForEnvironmentVariable(import.meta.env.VITE_API_HTTP_URI) || '',
    LANGUAGE_HTTP_URI: checkForEnvironmentVariable(import.meta.env.VITE_LANGUAGE_HTTP_URI) || '',
  },
  disableSplash: checkForEnvironmentVariable(import.meta.env.VITE_DISABLE_SPLASH) === 'true' || false,
}
