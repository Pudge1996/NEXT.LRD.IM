import React from "react";
import ContactCard from "/components/common/ContactCard";
import CopyPageLink from "/components/blog/CopyPageLink";
import { IoPerson, IoLink } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import { event } from "nextjs-google-analytics";

export default function BlogFooter({pageTitle}) {
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
          <div className="text-lg font-semibold">🎉 你觉得这篇文章怎样？</div>
          <div className="text-secondary md:break-keep">
            <span className="hidden sm:inline">有没有引起你灵魂深处的共鸣？如果有其他看法，我在这里留下了联系<span className="whitespace-nowrap">方式。</span>觉得这篇文章还不错，欢迎分享给<span className="whitespace-nowrap">朋友！</span></span>
            <span className="inline sm:hidden">我在这里留下了联系<span className="whitespace-nowrap">方式。</span>如果觉得这篇文章还不错，欢迎分享给<span className="whitespace-nowrap">朋友！</span></span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div onClick={handleSubmit} className="flex-1 btn-base text-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors">
            <ContactCard />
            <div className="flex gap-2 justify-center items-center">
              <IoPerson />
              联系作者
            </div>
          </div>
          <div className="flex-1 btn-base text-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors">
            <CopyPageLink pageTitle={pageTitle} />
            <div className="flex gap-2 justify-center items-center">
              <IoLink />
              复制链接
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
