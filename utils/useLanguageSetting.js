// useLanguageSetting.js
import { useEffect } from 'react';
import Router from 'next/router';

const changeLanguage = (locale) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("MY_LANGUAGE", locale);
    document.documentElement.lang = locale;
  }
};

const useLanguageSetting = () => {
  console.log('222222222222222')
  useEffect(() => {
    const handleRouteChange = () => {
      const savedLocale = localStorage.getItem("MY_LANGUAGE") || navigator.language || "en";
      changeLanguage(savedLocale);
    };

    // 监听路由变化
    Router.events.on('routeChangeComplete', handleRouteChange);

    // 初始化语言设置
    handleRouteChange();

    // 组件卸载时取消监听
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
};

export default useLanguageSetting;
