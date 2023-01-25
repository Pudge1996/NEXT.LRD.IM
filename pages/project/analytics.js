import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/ProjectItemData";
import ProjectImgList from "/data/ProjectImgList";
import Zoom from "next-image-zoom";


export default function analytics() {
  const Title = ProjectItemData[2].projects[1].title;
  const Desc = ProjectItemData[2].projects[1].desc;
  const [isLoaded, setIsLoaded] = useState(false);
  const Images = ProjectImgList
  .filter(({ groupName }) => groupName === "analytics")
  .map(({ images }) => images)
  .flat();
  
  return (
    <>
      <Head>
        <title>
          {Title} - {siteMetadata.title}
        </title>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={Desc} />
        <link rel="icon" href="/favicon.ico" />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta name="og:type" content="summary" />
        <meta property="og:title" content={Title} />
        <meta property="og:description" content={Desc} />

        {/* For Twitter */}
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <div className="layout project-v2 flex flex-col gap-4 md:gap-10">
        <section className="top-info">
          <h1 className="">{Title}</h1>
          <p className="">{Desc}</p>
        </section>
        {/* <div className="mx-auto sticky top-[96px] z-[1] hidden sm:block transition-[background-colors] mb-3">
          <div className="px-[6px] py-1 flex gap-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 items-center">
            <Link href="#2" className="project-anchor btn-base btn-md text-base text-tertiary py-1 block hover:text-primary hover:font-medium ">背景和思路</Link>
            <div className="w-[2px] h-[0.8em] rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
            <Link href="#4" className="project-anchor btn-base btn-md text-base text-tertiary py-1 block hover:text-primary hover:font-medium">设计策略</Link>
          </div>
        </div> */}
        <section className="content">
        {Images.map((img, index) => (
        <figure>
            {/* 大图片，无滚动 */}
            <div
              className={`relative rounded-lg min-h-[120px] ${
                isLoaded ? "" : "img-loading-spin"
              } `}
            >
              <Zoom
                src={img}
                index={index}
                id={index}
                alt=""
                objectFit="contain"
                layout="fill"
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                backgroundColor="black"
                backgroundOpacity="0.8"
                fill="cover"
              ></Zoom>
            </div>
          </figure>
          ))}
        </section>
      </div>
    </>
  );
}
