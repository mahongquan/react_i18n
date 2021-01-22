import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import SyncBackend from 'i18next-fs-backend';
i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(SyncBackend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hello: 'Hello world',
          change: 'Change language',
          title:"title_en",
          description:{part1:"part1.en",part2:"part2_en"}
        },
      },
      de: {
        translation: {
          hello: 'Hej världen',
          change: 'Byt språk',
          title:"title_de",
          description:{part1:"part1.de",part2:"part2_de"}
        },
      },
    },
  });

export default i18n;
