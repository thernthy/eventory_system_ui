import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './lang/en.json';
import translationKH from './lang/kh.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    kh: { translation: translationKH },
  },
  lng: 'kh',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
