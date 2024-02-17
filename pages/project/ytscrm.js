import React from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImgList from "/data/project/ProjectImgList";
import ProjectTemplateV1 from "/components/project/ProjectTemplateV1";
import { useTranslation } from 'next-i18next'
import withServerSideTranslations from '/utils/withServerSideTranslations';

export const getServerSideProps = withServerSideTranslations(['common']);

export default function ytscrm() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const dataForCurrentLanguage = ProjectItemData[i18n.language] || ProjectItemData['zh-Hans'];
  const title = dataForCurrentLanguage[1].projects[1].title;
  const desc = dataForCurrentLanguage[1].projects[1].desc;
  const Images = ProjectImgList.filter(
    ({ groupName }) => groupName === "ytscrm"
  )
    .map(({ images }) => images)
    .flat();
  const items = [
    { buttonName: '官网设计', imageLink: '2' },
    { buttonName: '数据驱动', imageLink: '4' },
    { buttonName: '表格优化', imageLink: '11' },
    { buttonName: '搭建组件库', imageLink: '15' },
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
