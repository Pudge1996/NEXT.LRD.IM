import React from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImgList from "/data/project/ProjectImgList";
import ProjectTemplateV1 from "/components/project/ProjectTemplateV1";

export default function qlchat() {
  const title = ProjectItemData[1].projects[0].title;
  const desc = ProjectItemData[1].projects[0].desc;
  const Images = ProjectImgList.filter(
    ({ groupName }) => groupName === "qlchat"
  )
    .map(({ images }) => images)
    .flat();
  const items = [
    { buttonName: '备课改版', imageLink: '2' },
    { buttonName: '数据反馈', imageLink: '9' },
    { buttonName: '组件库流程', imageLink: '12' },
    { buttonName: '图标交付规范', imageLink: '20' },
  ];
  
  return (
    <>
      <Head>
        <title>
          {title} - {siteMetadata.title}
        </title>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={desc} />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>
      <ProjectTemplateV1 title={title} desc={desc} Images={Images} items={items}/>
    </>
  );
}
