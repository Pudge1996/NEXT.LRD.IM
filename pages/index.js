import React from "react";
import Head from "next/head";
import { useTranslation, Translation } from 'next-i18next'
import withServerSideTranslations from '/utils/withServerSideTranslations';

export const getServerSideProps = withServerSideTranslations(["common", "components", "pages"]);

function EnIntroduction() {
  return(
    <>
      <p className="mb-3 mt-3 sm:mt-6 text-wrap">
      A Designer.
      </p>
    </>
  )
}
function ZhHantIntroduction() {
  return(
    <>
      <p className="mb-3 mt-3 sm:mt-6 text-wrap">
      設計師。
      </p>
    </>
  )
}
function ZhHansIntroduction() {
  return(
    <>
      <p className="mb-3 mt-3 sm:mt-6 text-wrap">
        设计师。
      </p>
    </>
  )
}


const Project = () => {
  const { t } = useTranslation(["common", "pages"]);
  const introductionMap = {
    'zh-Hans': <ZhHansIntroduction />,
    'zh-Hant': <ZhHantIntroduction />,
    'default': <EnIntroduction />, // 默认组件
  };
  return (
    <>
      <Head>
        <title>{t("common.pages.homepage", { ns: "common" })} - {t("common.information.pageTitleSuffix", { ns: "common" })}</title>
      </Head>
      <div className="layout project">
        <section className="mb-14">
          <h1 className="">{t("common.information.author", { ns: 'common' })}</h1>
          <Translation>
            {(t, { i18n }) => (
              <div>
                {introductionMap[i18n.language] || introductionMap['default']}
              </div>
            )}
          </Translation>
        </section>
      </div>
      </>
  );
}

const Index = () => {
  return (
      <Project />
  );
};

export default Index;





// export const getServerSideProps = async (context) => {
//   const cookies = parseCookies(context);
//   const cookieLocale = cookies['NEXT_LOCALE'];

//   let finalLocale = cookieLocale || context.locale;

//   if (!cookieLocale) {
//     const acceptLanguage = context.req.headers['accept-language'];
//     finalLocale = getPreferredLocale(acceptLanguage, ['zh-Hans', 'zh-Hant'], 'en');
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(finalLocale, ['common', 'pages'])),
//     },
//   };
// };

// function getPreferredLocale(acceptLanguageHeader, supportedLocales, defaultLocale) {
//   const firstLocale = acceptLanguageHeader.split(',')[0].split(';')[0].trim();
  
//   if (firstLocale.startsWith("zh")) {
//     // 进一步确定是简体中文还是繁体中文
//     if (firstLocale.includes("CN") || firstLocale.includes("SG")) {
//       return "zh-Hans"; // 简体中文
//     } else {
//       return "zh-Hant"; // 繁体中文
//     }
//   } else if (supportedLocales.includes(firstLocale)) {
//     return firstLocale;
//   }

//   return defaultLocale; // 如果第一个语言不是中文，也不在supportedLocales中，返回默认语言（en）
// }