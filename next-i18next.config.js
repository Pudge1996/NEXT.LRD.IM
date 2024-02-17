const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend= require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

const isBrowser = typeof window !== 'undefined'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  debug: true,
  backend: {
    backendOptions: isBrowser ? [
      { expirationTime: isDev ? 0 : 60 * 60 * 1000 },
      { loadPath: '/locales/{{lng}}/{{ns}}.json' }
    ] : [],
    backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [],
  },
  partialBundledLanguages: isBrowser && true,
  react: {
    useSuspense: false,
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'zh-Hant', 'en'],
    localeDetection: false,
  },
  fallbackNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: {
    default: ['zh-Hans'],
  },
  ns: ['common', 'pages'],
  serializeConfig: false,
  use: isBrowser ? [ChainedBackend] : [],
}