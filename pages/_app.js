import "/styles/globals.css";
import React from "react";
import Layout from "/components/layout";
import useLanguageSetting from '/utils/useLanguageSetting';
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config'


function MyApp({ Component, pageProps }) {
  useLanguageSetting();
  return (
    <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig)
