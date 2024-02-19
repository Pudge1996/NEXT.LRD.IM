import "/styles/globals.css";
import React from "react";
import Layout from "/components/layout";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';
import useLanguageSetting from '/utils/useLanguageSetting';
import { appWithTranslation, useTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config'
import withServerSideTranslations from '/utils/withServerSideTranslations';

export const getServerSideProps = withServerSideTranslations(["common", "components", "pages"]);

function MyApp({ Component, pageProps }) {
  useLanguageSetting();
  const { t } = useTranslation('common');
  return (
    <>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <ThemeProvider attribute="class" storageKey="theme">
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig)
