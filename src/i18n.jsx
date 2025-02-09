import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from "./Locales/uzbek.json"
import ru from "./Locales/russian.json"
import eng from "./Locales/english.json"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    lng:'uz',
    resourcers:{
        uz:{translation:uz},
        ru:{translation:ru},
        eng:{translation:eng},

    }
   
  });
  export default i18n