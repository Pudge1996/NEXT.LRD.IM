// utils/loadLocaleFromCookie.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nookies from 'nookies';

export async function loadLocaleFromCookie(context) {
  const cookies = nookies.get(context);
  const userLanguage = cookies.UserLanguage || context.locale || 'zh-Hans';

  return {
    ...(await serverSideTranslations(userLanguage, ['common', 'components', 'pages'])),
  };
}
