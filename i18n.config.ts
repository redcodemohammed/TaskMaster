import en from './locales/en.json'
import ar from './locales/ar.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'ar',
    messages: {
      en,
      ar
    }
  }
})
