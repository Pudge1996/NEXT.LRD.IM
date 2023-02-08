import React, { useState } from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImgList from "/data/project/ProjectImgList";
import ProjectImage from "/components/project/ProjectImage";

export default function qlchat() {
  const title = ProjectItemData[1].projects[0].title;
  const desc = ProjectItemData[1].projects[0].desc;
  const Images = ProjectImgList.filter(
    ({ groupName }) => groupName === "qlchat"
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
      <div className="layout project-v2 flex flex-col gap-4 md:gap-12">
        <section className="top-info">
          <h1 className="">{title}</h1>
          <p className="">{desc}</p>
        </section>
        <section className="content">
          {Images.map((img, index) => (
            <ProjectImage src={img} id={index} key={index} />
          ))}
        </section>
      </div>
    </>
  );
}
