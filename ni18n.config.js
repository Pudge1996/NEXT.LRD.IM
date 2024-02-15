import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'

const supportedLngs = ['zh-Hans', 'zh-Hant', 'zh', 'en']
export const ni18nConfig = {
  supportedLngs,
  ns: ['common','components', 'pages'],
  fallbackLng: 'zh-Hans',
  debug: true,
  savemissing: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  interpolation: {
    escapevalue: false, // not needed for react!!
  },
  react: {
    useSuspense: false
  }
  };

i18n
.use(HttpBackend) // 在这里使用 use 方法添加 HttpBackend
.use(initReactI18next) // 将 i18n 实例传递给 react-i18next
.init(ni18nConfig);
