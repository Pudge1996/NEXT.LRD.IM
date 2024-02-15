// useLanguageSetting.js
import React from 'react';
import Router from 'next/router';

const changeLanguage = (locale) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("i18nextLng", locale);
    document.documentElement.lang = locale;
  }
};

const useLanguageSetting = () => {
  console.log('222222222222222')
  React.useEffect(() => {
    const handleRouteChange = () => {
      const savedLocale = localStorage.getItem("i18nextLng") || navigator.language || "en";
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