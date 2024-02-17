import React from "react";
import ContactCard from "/components/common/ContactCard";
import CopyPageLink from "/components/blog/CopyPageLink";
import { IoPerson, IoCopy } from "react-icons/io5";
import { event } from "nextjs-google-analytics";
import { useTranslation, Translation } from 'next-i18next'

function EnContent() {
  return(
    <>
      <span className="hidden sm:inline">Did this resonate with your soul? If you have different opinions, contact information is provided here <span className="whitespace-nowrap">for you.</span><br />Feel free to share this article with your friends if you <span className="whitespace-nowrap">enjoyed it!</span></span>
      <span className="inline sm:hidden">Contact information is provided here <span className="whitespace-nowrap">for you.</span><br />Feel free to share this article with your friends if you <span className="whitespace-nowrap">enjoyed it!</span></span>
    </>
  )
}
function ZhHantContent() {
  return(
    <>
      <span className="hidden sm:inline">是否觸動了您內心深處的共鳴？如果您有其他看法，我在這裡留下了聯絡<span className="whitespace-nowrap">方式。</span>覺得這篇文章還不錯的話，歡迎分享給<span className="whitespace-nowrap">朋友。</span></span>
      <span className="inline sm:hidden">我在這裡留下了聯絡<span className="whitespace-nowrap">方式。</span>覺得這篇文章還不錯的話，歡迎分享給<span className="whitespace-nowrap">朋友！</span></span>
    </>
  )
}
function ZhHansContent() {
  return(
    <>
      <span className="hidden sm:inline">是否引起了灵魂深处的共鸣？如果有其他看法，我在这里留下了联系<span className="whitespace-nowrap">方式。</span>觉得这篇文章还不错，欢迎分享给<span className="whitespace-nowrap">朋友。</span></span>
      <span className="inline sm:hidden">我在这里留下了联系<span className="whitespace-nowrap">方式。</span>如果觉得这篇文章还不错，欢迎分享给<span className="whitespace-nowrap">朋友！</span></span>
    </>
  )
}

export default function BlogFooter({pageTitle}) {
  const { t } = useTranslation("components");
  const contentnMap = {
    'zh-Hans': <ZhHansContent />,
    'zh-Hant': <ZhHantContent />,
    'default': <EnContent />, // 默认组件
  };
  const handleSubmit = () => {
    event("click_Contact", {
      category: "Contact",
      value: "click_Contact",
    });

  };
  return (
    <>
      <section className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg mt-7 sm:mt-14 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="flex flex-col gap-1">
          <div className="text-lg font-semibold">{t("blog.BlogFooter.title")}</div>
          <div className="text-secondary md:break-keep text-wrap">
          <Translation>
            {(t, { i18n }) => (
              <div>
                {contentnMap[i18n.language] || contentnMap['default']}
              </div>
            )}
          </Translation>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div onClick={handleSubmit} className="flex-1 btn-base text-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors">
            <ContactCard />
            <div className="flex gap-2 justify-center items-center">
              <IoPerson />
              {t("blog.BlogFooter.contact")}
            </div>
          </div>
          <div className="flex-1 btn-base text-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors">
            <CopyPageLink pageTitle={pageTitle} />
            <div className="flex gap-2 justify-center items-center">
              <IoCopy />
              {t("blog.BlogFooter.copyLink")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}