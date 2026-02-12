import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from '../assets/locales/en/translation.json';
import translationES from '../assets/locales/es/translation.json';
import translationFR from '../assets/locales/fr/translation.json';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'es', 'fr', 'de'];


const options = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

  lookupQuerystring: 'lang',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true
};

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    fallbackLng,
    debug: false,
    // whitelist: availableLanguages,
    detection: options,
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;