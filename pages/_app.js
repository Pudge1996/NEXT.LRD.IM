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
import nextI18NextConfig from '../next-i18next.config'
import { UserConfig } from 'next-i18next';

// const emptyInitialI18NextConfig = {
//   debug: true,
//   i18n: {
//     defaultLocale: nextI18NextConfig.i18n.defaultLocale,
//     locales: nextI18NextConfig.i18n.locales,
//   },
// };
export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const cookieLocale = cookies['NEXT_LOCALE'];

  // 默认情况下使用i18next的defaultLocale
  let finalLocale = context.locale;

  if (!cookieLocale) {
    // 如果没有cookie，尝试根据Accept-Language预测
    const acceptLanguage = context.req.headers['accept-language'];
    const supportedLocales = ['zh-Hans', 'zh-Hant', 'en']; // 假设这是您支持的语言列表
    finalLocale = getPreferredLocale(acceptLanguage, supportedLocales, context.locale);
  } else {
    // 如果有cookie，优先使用cookie中的语言设置
    finalLocale = cookieLocale;
  }

  return {
    props: {
      ...(await serverSideTranslations(finalLocale, ['common', 'components', 'pages'], nextI18NextConfig)),
    },
  };
};

function getPreferredLocale(acceptLanguageHeader, supportedLocales, defaultLocale) {
  const locales = acceptLanguageHeader
    .split(',')
    .map((lang) => {
      const [locale, priority] = lang.trim().split(';q=');
      return { locale: locale.split('-')[0], priority: priority ? parseFloat(priority) : 1 };
    })
    .sort((a, b) => b.priority - a.priority);

  for (let { locale } of locales) {
    // 简化的处理逻辑，您可以根据需要调整
    if (locale.startsWith("zh")) {
      if (supportedLocales.includes("zh-Hans") || supportedLocales.includes("zh-Hant")) {
        // 假设支持"zh-Hans"或"zh-Hant"，您可以根据实际情况调整
        return locale.includes("CN") || locale.includes("SG") ? "zh-Hans" : "zh-Hant";
      }
    } else if (supportedLocales.includes(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}

function MyApp({ Component, pageProps }) {
  useLanguageSetting();
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

export default appWithTranslation(MyApp, nextI18NextConfig)
