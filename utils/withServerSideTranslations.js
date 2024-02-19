import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { parseCookies } from 'nookies';

// withServerSideTranslations HOF，现在接受一个可选的extraGetServerSideProps函数
export default function withServerSideTranslations(namespacesRequired, extraGetServerSideProps = null) {
  return async (context) => {
    const cookies = parseCookies(context);
    const cookieLocale = cookies['NEXT_LOCALE'];
    const acceptLanguage = context.req.headers['accept-language'];
    let finalLocale = cookieLocale || context.locale;

    if (!cookieLocale && acceptLanguage) {
      finalLocale = getPreferredLocale(acceptLanguage, ['zh-Hans', 'zh-Hant', 'en'], context.locale);
    }

    const i18nProps = await serverSideTranslations(finalLocale, namespacesRequired);

    // 新增: 如果提供了额外的getServerSideProps逻辑，则调用它并获取额外的props
    let extraProps = {};
    if (extraGetServerSideProps) {
      extraProps = await extraGetServerSideProps(context);
    }

    return {
      props: {
        ...i18nProps,
        ...(extraProps.props || {}), // 确保extraProps.props存在，否则使用空对象
      },
    };
  };
}

function getPreferredLocale(acceptLanguageHeader, supportedLocales, defaultLocale) {
  const firstLocale = acceptLanguageHeader.split(',')[0].split(';')[0].trim();

  if (firstLocale.startsWith("zh")) {
    return firstLocale.includes("CN") || firstLocale.includes("SG") ? "zh-Hans" : "zh-Hant";
  } else if (supportedLocales.includes(firstLocale)) {
    return firstLocale;
  }
  return defaultLocale;
}
