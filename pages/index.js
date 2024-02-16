import React, { Suspense } from "react";
import { useTranslation } from 'next-i18next'
import { parseCookies } from 'nookies';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withNamespaces } from 'react-i18next';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";
import ContactCard from "/components/common/ContactCard";
import ProjectItemData from "/data/project/ProjectItemData";
import Tooltips from "/components/common/Tooltips";

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const cookieLocale = cookies['NEXT_LOCALE'];

  // 默认情况下使用i18next的defaultLocale
  let finalLocale = context.locale;

  if (!cookieLocale) {
    // 如果没有cookie，尝试根据Accept-Language预测
    const acceptLanguage = context.req.headers['accept-language'];
    const supportedLocales = ['en', 'zh-Hans', 'zh-Hant']; // 假设这是您支持的语言列表
    finalLocale = getPreferredLocale(acceptLanguage, supportedLocales, context.locale);
  } else {
    // 如果有cookie，优先使用cookie中的语言设置
    finalLocale = cookieLocale;
  }

  return {
    props: {
      ...(await serverSideTranslations(finalLocale, ['common', 'components', 'pages'])),
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

const ProjectItems = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className=" flex flex-col-reverse gap-8">
      {ProjectItemData.map((company, index) => (
        <div key={index} className="last:hidden">
          {/* 公司 Company 列表 */}
          <div className="flex gap-3 py-3 sm:py-4 text-lg sm:text-[22px] items-center font-medium  bg-color  top-[62px] sm:top-[58px] transition-[background-color] z-[1]">
            <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] relative overflow-hidden rounded border-[0.5px] dark:border-transparent img-loading-bg transition-colors">
              <Image
                // 公司图片
                src={company.img}
                alt={company.name}
                className="select-none"
                fill
                sizes="100vw" />
            </div>
            <Link
              href={company.url}
              aria-label={company.name}
              target="_blank"
              rel="noopener noreferrer"
              className="ring-default link-color-none force-link"
            >
              {company.name}
            </Link>
          </div>

          {/* 作品 Project 列表 */}
          <div className="flex flex-wrap gap-8 sm:max-md:gap-6 mt-0 sm:mt-2">
            {company.projects &&
              company.projects.map((project, index) => (
                <div className="sm:w-[calc(50%-1rem)]" key={index}>
                  <Link
                    href={project.url} // 待办
                    aria-label={company.name}
                    className="group flex flex-col ring-default"
                  >
                    <div className={`relative aspect-video mb-3 rounded-lg select-none  overflow-hidden img-loading-bg ${isLoaded ? '' : 'img-loading-spin'}`}>
                      <Image
                        // 项目图片
                        src={project.img}
                        alt={project.title}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setIsLoaded(true)}
                        className="rounded-lg"
                        // fill
                        // sizes="100vw"
                        width={608}
                        height={342}
                         />
                    </div>

                    <h3 className="text-lg font-semibold leading-tight mb-1 sm:group-hover:text-blue-600 group-active:text-blue-800 sm:group-active:text-blue-800 dark:sm:group-hover:text-blue-400 dark:group-active:text-blue-500 sm:dark:group-active:text-blue-500">
                      {project.title}
                    </h3>
                    <div className="leading-snug text-secondary">
                      {project.desc}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Project = () => {
  const { t } = useTranslation(['common'])
//   function ProjectItems() {
//   const [isLoaded, setIsLoaded] = React.useState(false);
//   return (
//     <div className=" flex flex-col-reverse gap-8">
//       {ProjectItemData.map((company, index) => (
//         <div key={index} className="last:hidden">
//           {/* 公司 Company 列表 */}
//           <div className="flex gap-3 py-3 sm:py-4 text-lg sm:text-[22px] items-center font-medium  bg-color  top-[62px] sm:top-[58px] transition-[background-color] z-[1]">
//             <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] relative overflow-hidden rounded border-[0.5px] dark:border-transparent img-loading-bg transition-colors">
//               <Image
//                 // 公司图片
//                 src={company.img}
//                 alt={company.name}
//                 className="select-none"
//                 fill
//                 sizes="100vw" />
//             </div>
//             <Link
//               href={company.url}
//               aria-label={company.name}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ring-default link-color-none force-link"
//             >
//               {company.name}
//             </Link>
//           </div>

//           {/* 作品 Project 列表 */}
//           <div className="flex flex-wrap gap-8 sm:max-md:gap-6 mt-0 sm:mt-2">
//             {company.projects &&
//               company.projects.map((project, index) => (
//                 <div className="sm:w-[calc(50%-1rem)]" key={index}>
//                   <Link
//                     href={project.url} // 待办
//                     aria-label={company.name}
//                     className="group flex flex-col ring-default"
//                   >
//                     <div className={`relative aspect-video mb-3 rounded-lg select-none  overflow-hidden img-loading-bg ${isLoaded ? '' : 'img-loading-spin'}`}>
//                       <Image
//                         // 项目图片
//                         src={project.img}
//                         alt={project.title}
//                         onLoad={() => setIsLoaded(true)}
//                         onError={() => setIsLoaded(true)}
//                         className="rounded-lg"
//                         // fill
//                         // sizes="100vw"
//                         width={608}
//                         height={342}
//                          />
//                     </div>

//                     <h3 className="text-lg font-semibold leading-tight mb-1 sm:group-hover:text-blue-600 group-active:text-blue-800 sm:group-active:text-blue-800 dark:sm:group-hover:text-blue-400 dark:group-active:text-blue-500 sm:dark:group-active:text-blue-500">
//                       {project.title}
//                     </h3>
//                     <div className="leading-snug text-secondary">
//                       {project.desc}
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
  
  return (
    <>
      <Head>
        <title>首页 - {siteMetadata.title}</title>
      </Head>
      <div className="layout project">
        <section className="mb-14">
          <h1 className="">{t("common.information.author", { ns: 'common' })}</h1>
          <p className="mb-3 mt-3 sm:mt-6">
            5 年工作经验的 UI/UX 设计师<Tooltips>2 年 C 端 UI 设计师 (2018-2020) <br/> 3 年 B 端 UI/UX 设计师 (2020-2023)</Tooltips>，曾就职于 ONES 国际化部门和欢聚集团 SHOPLINE 设计
            <span className="whitespace-nowrap">团队。</span>
          </p>
          <p className="mt-3">
          拥有国际化、自研组件/图标库搭建、数据可视化和体验度量等实践<span className="whitespace-nowrap">经验，</span>同时也有<span className="whitespace-nowrap">企业服务</span>、研发管理和跨境电商 SaaS 产品的业务
            <span className="whitespace-nowrap">背景。</span>
          </p>
          <div className="flex items-center flex-col sm:flex-row gap-3 text-lg">
            <Link
              href="/me"
              title="个人简历"
              aria-label="点击查看李瑞东的简历"
              target="_blank"
              className="flex gap-1 justify-center items-center w-full sm:w-max btn-base btn-lg bg-neutral-900 dark:bg-white sm:hover:bg-black dark:sm:hover:bg-neutral-200  text-neutral-100 dark:text-neutral-800 select-none text-center"
            >
              查看简历
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-[1em]"
              >
                <path
                  fillRule="evenodd"
                  d="M14.3398 1.69922C13.9336 1.29297 13.4518 1.03255 12.8945 0.917969C12.3424 0.798177 11.707 0.738281 10.9883 0.738281H4.99609C4.28776 0.738281 3.65495 0.798177 3.09766 0.917969C2.54557 1.03255 2.06641 1.29297 1.66016 1.69922C1.25911 2.09505 0.998698 2.56901 0.878906 3.12109C0.764323 3.67318 0.707031 4.30339 0.707031 5.01172V10.9648C0.707031 11.6836 0.764323 12.3216 0.878906 12.8789C0.998698 13.431 1.25911 13.9049 1.66016 14.3008C2.06641 14.707 2.54557 14.9674 3.09766 15.082C3.65495 15.2018 4.29036 15.2617 5.00391 15.2617H10.9883C11.707 15.2617 12.3451 15.2018 12.9023 15.082C13.4596 14.9674 13.9388 14.707 14.3398 14.3008C14.7409 13.9049 14.9987 13.431 15.1133 12.8789C15.2331 12.3216 15.293 11.6836 15.293 10.9648V5.03516C15.293 4.31641 15.2331 3.68099 15.1133 3.12891C14.9987 2.57161 14.7409 2.09505 14.3398 1.69922ZM13.7305 4.81641V11.1758C13.7305 11.5872 13.694 11.9674 13.6211 12.3164C13.5482 12.6602 13.4049 12.9414 13.1914 13.1602C12.9779 13.3737 12.694 13.5169 12.3398 13.5898C11.9909 13.6628 11.6133 13.6992 11.207 13.6992H4.79297C4.38672 13.6992 4.00651 13.6628 3.65234 13.5898C3.30339 13.5169 3.01953 13.3737 2.80078 13.1602C2.58724 12.9414 2.44401 12.6602 2.37109 12.3164C2.30339 11.9674 2.26953 11.5872 2.26953 11.1758V4.83203C2.26953 4.41536 2.30339 4.03255 2.37109 3.68359C2.44401 3.33464 2.58724 3.05339 2.80078 2.83984C3.01432 2.62109 3.29818 2.47786 3.65234 2.41016C4.01172 2.33724 4.39974 2.30078 4.81641 2.30078H11.207C11.6133 2.30078 11.9909 2.33724 12.3398 2.41016C12.694 2.48307 12.9779 2.6263 13.1914 2.83984C13.4102 3.05339 13.5534 3.33464 13.6211 3.68359C13.694 4.03255 13.7305 4.41016 13.7305 4.81641ZM10.4414 10.0273C10.6393 10.0273 10.7956 9.96224 10.9102 9.83203C11.0299 9.69661 11.0898 9.52474 11.0898 9.31641V5.68359C11.0898 5.41276 11.0169 5.21224 10.8711 5.08203C10.7305 4.95182 10.5378 4.88672 10.293 4.88672H6.63672C6.42318 4.88672 6.2513 4.94661 6.12109 5.06641C5.99609 5.18099 5.93359 5.33724 5.93359 5.53516C5.93359 5.73828 5.9987 5.89974 6.12891 6.01953C6.25911 6.13411 6.43099 6.19141 6.64453 6.19141H7.95703L9.01953 6.06641L7.87109 7.11328L5.14453 9.84766C4.99349 9.9987 4.91797 10.1654 4.91797 10.3477C4.91797 10.5612 4.98307 10.7331 5.11328 10.8633C5.24349 10.9883 5.40755 11.0508 5.60547 11.0508C5.72005 11.0508 5.81901 11.0326 5.90234 10.9961C5.99089 10.9544 6.07161 10.8971 6.14453 10.8242L8.87109 8.10547L9.91016 6.97266L9.79297 8.08203V9.32422C9.79297 9.54297 9.85286 9.71484 9.97266 9.83984C10.0924 9.96484 10.2487 10.0273 10.4414 10.0273Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div
              className="w-full sm:w-max btn-base btn-lg bg-neutral-100 dark:bg-neutral-900 sm:hover:bg-neutral-200 relative text-center"
            >
            <ContactCard />
              联系我 👋🏻
            </div>
          </div>
        </section>
        <hr className="hidden sm:block mt-12" />
        <section>
          <h2 className="mb-3 sm:hidden text-4xl sm:text-5xl font-semibold">
            作品
          </h2>
          <ProjectItems />
        </section>
        <section className="mt-6 sm:mt-0">
          <h2 className="mb-3 hidden text-4xl sm:text-5xl font-semibold">
            联系方式
          </h2>
        </section>
      </div>
      </>
  );
}

const Index = () => {
  const { ready } = useTranslation('common', { useSuspense: false });

  if (!ready){
    return (<div>Loading...</div>)
  };

  return (
    <Suspense fallback={<div>Loading...</div>}> {/* 在资源加载时显示的占位内容 */}
      <Project />
    </Suspense>
  );
};

export default Index;





// export const getServerSideProps = async (context) => {
//   let { locale } = context;
//   const cookies = parseCookies(context);
//   const userLocale = cookies['NEXT_LOCALE'] || locale; // 优先使用Cookie中的语言设置

//   // 这里不再需要额外的逻辑来调整userLocale，
//   // 因为我们假设在客户端设置的NEXT_LOCALE总是有效的

//   return {
//     props: {
//       ...(await serverSideTranslations(userLocale, ['common', 'components', 'pages'])),
//     },
//   };
// };

// export const getServerSideProps = async (context) => {
//   let { locale } = context;
//   const cookies = parseCookies(context);
//   let userLocale = cookies['NEXT_LOCALE'];

//   if (!userLocale) {
//     // 这里是简化的逻辑，您可能需要根据实际情况进行复杂的语言匹配和选择
//     const acceptLanguage = context.req.headers["accept-language"];
//     userLocale = acceptLanguage ? acceptLanguage.split(',')[0].split('-')[0] : locale;
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(userLocale, ['common', 'pages'])),
//     },
//   };
// };

// export async function getServerSideProps({ locale }) {
//   return {
//     props: {
//       // 这里使用 locale 确保加载正确的语言资源
//       ...(await serverSideTranslations(locale, ['common', 'pages'])),
//     },
//   };
// }

// export async function getServerSideProps({ req }) {
//   const cookies = cookie.parse(req.headers.cookie || "");
//   let finalLocale = cookies['NEXT_LOCALE'];

//   if (!finalLocale) {
//     const acceptLanguageHeader = req.headers['accept-language'];
//     const parsedLanguages = acceptLanguageParser.parse(acceptLanguageHeader);
//     const supportedLanguages = ['zh-Hans', 'zh-Hant', 'en'];
//     const matchedLanguage = parsedLanguages.find(lang => supportedLanguages.includes(lang.code));

//     finalLocale = matchedLanguage ? matchedLanguage.code : 'zh-Hant'; // 'en'作为回退语言
//   }

//   return {
//     props: {
//       ...(await serverSideTranslations(finalLocale, ['common', 'components'])),
//     },
//   };
// }