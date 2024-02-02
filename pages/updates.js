import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import updatesData from "/data/common/updatesData";
import ContactCard from "/components/common/ContactCard";
import { useTranslation } from "react-i18next";

export default function updates() {
  const { t } = useTranslation("common");
  const [isLoaded, setIsLoaded] = useState(false);
  return <>
    <Head>
      <title>{t("common.pages.updates")} - {t("common.information.pageTitleSuffix")}</title>
    </Head>

    <div className="layout updates">
      <h1 className="">What's New</h1>
      <p className="mt-3 sm:mt-6 my-1">
        了解 LRD.IM 的新变化，以及发展历程。
      </p>
      <p className="flex mt-2 mb-0">
        <Link
          href="https://github.com/Pudge1996/NEXT.LRD.IM/issues"
          target="_blank"
          rel="noopener noreferrer"
          title="Github Issues"
        >
          反馈 Issues
        </Link>
        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        <span
          href="/updates"
          title="联系方式"
          className="relative link-color no-underline inline-block"
        >
          <ContactCard />
          与我联系
        </span>
      </p>
      
      <section className="flex flex-col gap-8 md:gap-20 mt-8 md:mt-14 pl-7 relative before:absolute before:w-[2px] before:bg-neutral-200 dark:before:bg-neutral-800 before:h-[calc(100%-12px)] before:left-2 before:mt-3 before:transition-all ">
        {updatesData.map((updates) => (
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <div className=" min-w-[12rem] md:sticky md:top-[60px] pb-1 md:pb-0 h-min">
              <time className="text-tertiary relative before:absolute before:w-4 before:h-4 before:bg-neutral-700 dark:before:bg-neutral-200 before:left-[-27px] before:top-[1.5px] before:rounded-full before:border-4 before:border-neutral-200 dark:before:border-neutral-800 before:shadow-[0_0_0_6px_rgba(255,255,255,1)] dark:before:shadow-[0_0_0_6px_rgba(0,0,0,1)] before:transition-all font-medium">
                {updates.date}
              </time>
              <h4 className="text-lg font-semibold">{updates.title}</h4>
            </div>
            <div className="flex flex-col flex-grow gap-2 md:gap-4">
              {updates.img && (
                <div
                  className={` relative aspect-video rounded-lg select-none  overflow-hidden img-loading-bg ${
                    isLoaded ? "" : "img-loading-spin"
                  } `}
                >
                  <Image
                    src={updates.img}
                    alt={updates.title}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(true)}
                    className="select-none object-cover"
                    // fill
                    // sizes="100vw"
                    width={992}
                    height={558}
                     />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <p className="my-0">{updates.desc}</p>
                {updates.linkURL && (
                  <Link
                    href={updates.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-color force-link-icon inline-flex items-center w-fit text-lg font-medium"
                  >
                    {updates.linkText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  </>;
}
