import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import zh from './locales/zh.json'
import zhTW from './locales/zh-TW.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'
import ar from './locales/ar.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      },
      'zh-TW': {
        translation: zhTW
      },
      es: {
        translation: es
      },
      fr: {
        translation: fr
      },
      ru: {
        translation: ru
      },
      ar: {
        translation: ar
      }
    },
    lng: (typeof localStorage !== 'undefined' && localStorage.getItem('i18nextLng')) || 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
