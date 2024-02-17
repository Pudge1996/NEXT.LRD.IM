import { useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import Cookie from 'js-cookie';
import { useRouter } from 'next/router'; // 导入useRouter

const useLanguageSetting = () => {
  const { i18n } = useTranslation();
  const router = useRouter(); // 使用useRouter获取路由实例
  
  useEffect(() => {
    const setLanguage = (locale) => {
      i18n.changeLanguage(locale).then(() => {
        i18n.reloadResources(locale).then(() => {
            console.log(`Resources reloaded for ${locale}`);
        });
        document.documentElement.lang = locale;
        Cookie.set("NEXT_LOCALE", locale, { path: '/', sameSite: 'strict' }); // 更新Cookie
      });
    };
    router.push(router.pathname, router.asPath, { shallow: false });
    
    

    const handleRouteChange = () => {
        // 尝试从Cookies获取用户设置的语言
        const cookieLocale = Cookie.get("NEXT_LOCALE");
        let finalLocale = cookieLocale || "en"; // 修改默认语言为英文
      
        if (!cookieLocale) {
          let browserLanguage = navigator.language || navigator.userLanguage; // 兼容不同浏览器
          // 对于以“zh”开头的语言进行特别处理
          if (browserLanguage.startsWith("zh")) {
            // 针对不同地区的中文设置不同的默认值
            if (browserLanguage.toLowerCase().includes("cn") || browserLanguage.toLowerCase().includes("sg")) {
              finalLocale = "zh-Hans"; // 简体中文
            } else if (browserLanguage.toLowerCase().includes("tw") || browserLanguage.toLowerCase().includes("hk")) {
              finalLocale = "zh-Hant"; // 繁体中文
            } else {
              // 如果无法明确判断为简体或繁体中文的其他情况，默认使用简体中文
              finalLocale = "zh-Hans";
            }
          } // 如果不是以"zh"开头，则已经在初始设置中将finalLocale设为"en"
        }
      
        // 根据最终确定的Locale设置语言
        setLanguage(finalLocale);
      };

    // 监听路由变化
    router.events.on('routeChangeComplete', handleRouteChange);

    // 初始化时也执行一次语言设置
    handleRouteChange();

    // 组件卸载时移除监听器
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [i18n]); // 添加router.events作为依赖项
};

export default useLanguageSetting;