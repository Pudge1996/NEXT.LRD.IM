import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

const useLanguageSetting = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const setLanguage = (locale) => {
      i18n.changeLanguage(locale).then(() => {
        i18n.reloadResources(locale).then(() => {
          console.log(`Resources reloaded for ${locale}`);
        });
        document.documentElement.lang = locale;
        Cookie.set("NEXT_LOCALE", locale, { path: '/', sameSite: 'strict' }); // Store in Cookie
      });
    };
    

    const handleRouteChange = () => {
      // 尝试从Cookies获取用户设置的语言
      const cookieLocale = Cookie.get("NEXT_LOCALE");
      let finalLocale = cookieLocale || "en";
      
      if (!cookieLocale) {
        let browserLanguage = navigator.language || navigator.userLanguage;
        // Handle browser language code that start with 'zh'
        if (browserLanguage.startsWith("zh")) {
          if (browserLanguage.toLowerCase().includes("cn") || browserLanguage.toLowerCase().includes("sg")) {
            finalLocale = "zh-Hans"; // 简体中文
          } else if (browserLanguage.toLowerCase().includes("tw") || browserLanguage.toLowerCase().includes("hk")) {
            finalLocale = "zh-Hant"; // 繁体中文
          } else {
            finalLocale = "zh-Hans";
          }
        }
      }
      setLanguage(finalLocale);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    handleRouteChange();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [i18n, router.events]);
};

export default useLanguageSetting;
