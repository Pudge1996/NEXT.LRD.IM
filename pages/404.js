import Head from "next/head";
import Link from "next/link";
import { useTranslation, Translation } from "react-i18next";

export default function Custom404() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>
          {t("common.pages.404")} - {t("common.information.pageTitleSuffix")}
        </title>
      </Head>

      <div className="layout text-center h-[600px] flex flex-col items-center justify-center">
        <Translation>
          {(t, { i18n }) => (
            <div>
              {i18n.language === "en" && (
                <>
                  <div>
                    <div className="text-6xl sm:text-8xl mb-2 sm:mb-4 select-none inline-block motion-safe:hover:animate-[bounce_0.2s_ease-in-out_infinite] will-change-auto">
                    🙇
                    </div>
                    <h1 className="px-6">
                      404: <span className="whitespace-nowrap">Page not found</span>
                    </h1>
                  </div>
                  <p className="mb-0 mt-4 leading-normal text-secondary break-keep">
                  My site was recently refactored, which caused some links to break.{" "}
                  <div className="hidden md:block"> </div>
                  You might want to visit my{" "}
                    <Link href="/blog" className="whitespace-nowrap">
                    blog
                    </Link>.
                  </p>
                </>
              )}
              {i18n.language === "zh-Hant" && (
                <>
                  <div>
                    <div className="text-6xl sm:text-8xl mb-2 sm:mb-4 select-none inline-block motion-safe:hover:animate-[bounce_0.2s_ease-in-out_infinite] will-change-auto">
                      🙇
                    </div>
                    <h1 className="px-6">
                    不好意<span className="tracking-[-0.2em]">思，</span>這裡
                      <span className="whitespace-nowrap">
                      沒有內<span className="tracking-[-0.2em]">容</span>
                      <span className="absolute">。</span>
                      </span>
                    </h1>
                  </div>
                  <p className="mb-0 mt-4 md:px-10 leading-normal text-secondary sm:break-keep">
                    我的網站不久前進行了重構，導致部分連結失效了。
                    猜你可能會想造訪我的
                    <Link href="/blog" className="whitespace-nowrap">
                    部落格
                    </Link>
                    。
                  </p>
                </>
              )}
              {!(i18n.language === "en" || i18n.language === "zh-Hant") && (
                <>
                  <div>
                    <div className="text-6xl sm:text-8xl mb-2 sm:mb-4 select-none inline-block motion-safe:hover:animate-[bounce_0.2s_ease-in-out_infinite] will-change-auto">
                      🙇
                    </div>
                    <h1 className="px-6">
                      唔好意思<span className="tracking-[-0.35em]">，</span>这里
                      <span className="whitespace-nowrap">
                        没有内容
                        <span className="absolute tracking-[-0.35em]">。</span>
                      </span>
                    </h1>
                  </div>
                  <p className="mb-0 mt-4 md:px-10 leading-normal text-secondary sm:break-keep">
                    我的网站在不久前进行了重构，导致部分链接失效了。
                    猜你可能会想访问我的
                    <Link href="/blog" className="whitespace-nowrap">
                      设计博客
                    </Link>
                    。
                  </p>
                </>
              )}
            </div>
          )}
        </Translation>
      </div>
    </>
  );
}
