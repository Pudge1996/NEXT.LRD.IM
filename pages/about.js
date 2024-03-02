import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation, Translation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ["common", "components", "pages"],
      nextI18NextConfig
    )),
  },
})


function EnAbout() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <div className="layout about flex flex-col gap-6">
      <section>
      <h1 className="">{t("common.header.about")}</h1>
      <p className="mb-3 mt-3 sm:mt-6">
        There are numerous things for me to accomplish...
        <br />
        To learn about my work experience, visit my <Link href="/me" target="_blank" title={t("common.pages.resume")}>{t("common.pages.resume")}</Link>. <br />Contact me at: <span className="select-all whitespace-nowrap">lrdbuff@gmail.com</span>
      </p>
      </section>
      <section>
        <h2 className="text-[22px] font-semibold">The Site</h2>
        <p className="mt-2 sm:mt-3">
        LRD.IM is my personal website, documenting my design projects, blog, and more, serving as a crucial part of my career. Since its launch on December 31, 2017, it has undergone 3 significant redesigns and refactors. The current version of the website has been developed using <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">Next.js</Link> and <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS">Tailwind&nbsp;CSS</Link>.
        </p>
        
      </section>
      <section>
        <h2 className="text-[22px] font-semibold">Other</h2>
        <p className="mt-2 mb-3">
        View the revision history of this site in the <Link href="/updates" title={t("common.pages.update", { ns: "common"})}>{t("common.pages.updates", { ns: "common" })}</Link>.
        </p>
      </section>
    </div>
  );
}
function ZhHansAbout() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <div className="layout about flex flex-col gap-6">
      <section>
      <h1 className="">{t("common.header.about")}</h1>
      <p className="mb-3 mt-3 sm:mt-6">
        還有很多事情要做的設計師...
        <br />
        想了解我的工作經歷，請訪問我的<Link href="/me" target="_blank" title={t("common.pages.resume")}>{t("common.pages.resume")}</Link>。聯繫我：<span className="select-all whitespace-nowrap">lrdbuff@gmail.com</span>
      </p>
      </section>
      <section>
        <h2 className="text-[22px] font-semibold">关于本站</h2>
        <p className="mt-2 sm:mt-3">
        LRD.IM 是我的个人网站，记录我的设计作品、博客等，是我设计师生涯中很重要的<span className="whitespace-nowrap">一部分。</span>自&thinsp;2017&thinsp;年&thinsp;12&thinsp;月&thinsp;31&thinsp;日建站至今，已经经历了&thinsp;3&thinsp;次 “大型” 改版重构，现在你所看到的网站是使用 <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">Next.js</Link> 和 <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS">Tailwind CSS</Link> 搭建<span className="whitespace-nowrap">而成。</span>
        </p>
        
      </section>
      <section>
        <h2 className="text-[22px] font-semibold">其他</h2>
        <p className="mt-2 mb-3">
        在<Link href="/updates" title={t("common.pages.update", { ns: "common" })}>{t("common.pages.updates", { ns: "common" })}</Link>中查看站点的改版<span className="whitespace-nowrap">记录。</span>
        </p>
      </section>
    </div>
  );
}
function ZhHantAbout() {
  const { t } = useTranslation(["common", "pages"]);
  return (
    <div className="layout about flex flex-col gap-6">
      <section>
      <h1 className="">{t("common.header.about")}</h1>
      <p className="mb-3 mt-3 sm:mt-6">
        還有很多事情要做的設計師...
        <br />
        想了解我的工作經歷，請訪問我的<Link href="/me" target="_blank" title={t("common.pages.resume")}>{t("common.pages.resume")}</Link>。聯繫我：<span className="select-all whitespace-nowrap">lrdbuff@gmail.com</span>
      </p>
      </section>
      <section>
        <h2 className="text-[22px] font-semibold">关于本站</h2>
        <p className="mt-2 sm:mt-3">
        LRD.IM 是我的个人网站，记录我的设计作品、博客等，是我设计师生涯中很重要的<span className="whitespace-nowrap">一部分。</span>自&thinsp;2017&thinsp;年&thinsp;12&thinsp;月&thinsp;31&thinsp;日建站至今，已经经历了&thinsp;3&thinsp;次 “大型” 改版重构，现在你所看到的网站是使用 <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">Next.js</Link> 和 <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS">Tailwind CSS</Link> 搭建<span className="whitespace-nowrap">而成。</span>
        </p>
        
      </section>
      <section>
        <h2 className="text-[22px] font-semibold">其他</h2>
        <p className="mt-2 mb-3">
        在<Link href="/updates" title={t("common.pages.update", { ns: "common" })}>{t("common.pages.updates", { ns: "common" })}</Link>中查看站点的改版<span className="whitespace-nowrap">记录。</span>
        </p>
      </section>
    </div>
  );
}

export default function about() {
  const { t } = useTranslation(["common", "pages"]);
  const aboutMap = {
    'zh-Hans': <ZhHansAbout />,
    'zh-Hant': <ZhHantAbout />,
    'default': <EnAbout />,
  };
  return (
    <>
      <Head>
        <title>{t("common.header.about")} - {t("common.information.pageTitleSuffix")}</title>
      </Head>
      <Translation>
        {(t, { i18n }) => (
          <div>
            {aboutMap[i18n.language] || aboutMap['default']}
          </div>
        )}
      </Translation>
    </>
  );
}