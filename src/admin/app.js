import favicon from './extensions/favicon.png';


export default {
  config: {
    head: {
      favicon: favicon,
    },
    auth: {
      logo: favicon,
    },
    menu: {
      logo: favicon,
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Sonang Labs',
        'app.components.LeftMenu.navbrand.title': 'Sonang Labs',
        "Auth.form.welcome.title": "Welcome to Sonang Labs!",
        "Auth.form.welcome.subtitle": "Log in to Sonang Labs",
      }
    },
    tutorials: false
  },
  bootstrap(app) {
    console.log(app);
  },
};
