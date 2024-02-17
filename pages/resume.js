import React from "react";
import { useTranslation } from 'next-i18next'
import { parseCookies } from 'nookies';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js'
import Link from 'next/link'

// Get preferred language on the server side.

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const cookieLocale = cookies['NEXT_LOCALE'];

  let finalLocale = context.locale;

  if (!cookieLocale) {
    const acceptLanguage = context.req.headers['accept-language'];
    const supportedLocales = ['zh-Hans', 'zh-Hant', 'en'];
    finalLocale = getPreferredLocale(acceptLanguage, supportedLocales, context.locale);
  } else {
    finalLocale = cookieLocale;
  }

  // It loads 'common' and 'pages' succeed, but still shows translation keys on the page.
  return {
    props: {
      ...(await serverSideTranslations(finalLocale, ['common', 'pages'], nextI18NextConfig)),
    },
  };
};

// Try to send a correct language code to server-side by handling Accept-Language Header 

function getPreferredLocale(acceptLanguageHeader, supportedLocales, defaultLocale) {
  const locales = acceptLanguageHeader
    .split(',')
    .map((lang) => {
      const [locale, priority] = lang.trim().split(';q=');
      return { locale: locale.split('-')[0], priority: priority ? parseFloat(priority) : 1 };
    })
    .sort((a, b) => b.priority - a.priority);

  for (let { locale } of locales) {
    if (locale.startsWith("zh")) {
      if (supportedLocales.includes("zh-Hans") || supportedLocales.includes("zh-Hant")) {
        return locale.includes("CN") || locale.includes("SG") ? "zh-Hans" : "zh-Hant";
      }
    } else if (supportedLocales.includes(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}


const Resume = () => {
  const { t } = useTranslation(['common'])
  
  return (
    <>
      <div className="layout project">
        <h1 className="">{t("common.pages.resume", { ns: 'common' })}</h1>
        <p>
        {t("common.information.desc", { ns: 'common' })}
        </p>
        <Link href="/">{t("common.pages.homepage", { ns: 'common' })} ➡️</Link>
      </div>
      </>
  );
}

// Use "ready" attempting to load translation resources before showing content, but don't work

const ResumePage = () => {
  const { ready } = useTranslation();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
      <Resume />
  );
};

export default ResumePage;