import "/styles/globals.css";
import React from "react";
import { useRouter } from 'next/router';
import Layout from "/components/layout";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';
import useLanguageSetting from '/utils/useLanguageSetting';
import { appWithTranslation } from 'next-i18next'
import nextI18nConfig from '../next-i18next.config'
import Cookie from 'js-cookie';
import { useTranslation } from 'next-i18next';



function MyApp({ Component, pageProps }) {
  
  useLanguageSetting();
  // const { t } = useTranslation('common','components', 'pages');
  const { i18n } = useTranslation();
  const [initialized, setInitialized] = React.useState(i18n.isInitialized);

  React.useEffect(() => {
    if (!i18n.isInitialized) {
      // 如果i18n未初始化，则监听初始化事件
      const handleI18nInitialized = () => {
        setInitialized(true);
      };

      i18n.on('initialized', handleI18nInitialized);
      return () => {
        i18n.off('initialized', handleI18nInitialized);
      };
    }
    // 如果i18n已经初始化，则无需添加监听器
  }, []);

  if (!initialized) {
    return <div>Loading...</div>; // 或其他加载指示
  }
  return (
    <>
      <Head>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={siteMetadata.description} />

        {/* For Soical Meida (openGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta name="og:type" content="summary" />
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <ThemeProvider attribute="class" storageKey="theme">
        <Layout>
          <Component {...pageProps}/>
          <Analytics />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig)
