import React from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImgList from "/data/project/ProjectImgList";
import ProjectTemplateV1 from "/components/project/ProjectTemplateV1";
import { useTranslation } from "react-i18next";

export default function analytics() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const dataForCurrentLanguage = ProjectItemData[i18n.language] || ProjectItemData['zh-Hans'];
  const title = dataForCurrentLanguage[2].projects[1].title;
  const desc = dataForCurrentLanguage[2].projects[1].desc;
  const Images = ProjectImgList.filter(
    ({ groupName }) => groupName === "analytics"
  )
    .map(({ images }) => images)
    .flat();
  const items = [
    { buttonName: '改版背景', imageLink: '1' },
    { buttonName: '设计思路和方案', imageLink: '4' },
    { buttonName: '数据反馈', imageLink: '13' },
    { buttonName: '表格优化', imageLink: '16' },
    { buttonName: '布局优化', imageLink: '30' },
  ];
  
  return (
    <>
      <Head>
        <title>
          {title} - {t("common.information.pageTitleSuffix")}
        </title>
        <meta name="description" content={desc} />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>
      <ProjectTemplateV1 title={title} desc={desc} Images={Images} items={items}/>
    </>
  );
}