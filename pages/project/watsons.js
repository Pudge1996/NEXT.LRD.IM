import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/ProjectItemData";
import ProjectImgList from "/data/ProjectImgList";
import Zoom from "next-image-zoom";

export default function watsons() {
  const Title = ProjectItemData[0].projects[0].title;
  const Desc = ProjectItemData[0].projects[0].desc;
  const [isLoaded, setIsLoaded] = useState(false);
  const Images = ProjectImgList
  .filter(({ groupName }) => groupName === "watsons")
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
      <div className="layout project-v2 flex flex-col gap-4 md:gap-12">
        <section className="top-info">
          <h1 className="">{Title}</h1>
          <p className="">{Desc}</p>
        </section>
        <section className="content">
        {Images.map((img, index) => (
        <figure>
            {/* 大图片，无滚动 */}
            <div
              className={`relative rounded-lg min-h-[120px] ${
                isLoaded ? "" : "img-loading-spin"
              } `}
              id={index}
            >
              <Zoom
                src={img}
                index={index}
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
