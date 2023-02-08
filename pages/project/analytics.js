import React, { useState, useEffect } from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImgList from "/data/project/ProjectImgList";
import ProjectImage from "/components/project/ProjectImage";

export default function analytics() {
  const title = ProjectItemData[2].projects[1].title;
  const desc = ProjectItemData[2].projects[1].desc;
  const Images = ProjectImgList.filter(
    ({ groupName }) => groupName === "analytics"
  )
    .map(({ images }) => images)
    .flat();

  return (
    <>
      <Head>
        <title>
          {title} - {siteMetadata.title}
        </title>
        <meta name="description" content={desc} />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>
      <div className="layout project-v2 flex flex-col gap-4 md:gap-10">
        <section className="top-info">
          <h1 className="">{title}</h1>
          <p className="">{desc}</p>
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
            <ProjectImage src={img} id={index} key={index} />
          ))}
        </section>
      </div>
    </>
  );
}
