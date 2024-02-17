import "/styles/globals.css";
import React from "react";
import Layout from "/components/layout";
import { ThemeProvider } from "next-themes";
import useLanguageSetting from '/utils/useLanguageSetting';
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config'

function MyApp({ Component, pageProps }) {
  // My getting language method
  useLanguageSetting();

  return (
    <>
      <ThemeProvider attribute="class" storageKey="theme">
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig)
