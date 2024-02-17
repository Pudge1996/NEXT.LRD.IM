import React from "react";
import Head from "next/head";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImgList from "/data/project/ProjectImgList";
import ProjectTemplateV1 from "/components/project/ProjectTemplateV1";
import { useTranslation } from 'next-i18next'
import withServerSideTranslations from '/utils/withServerSideTranslations';

export const getServerSideProps = withServerSideTranslations(['common']);

export default function watsons() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const dataForCurrentLanguage = ProjectItemData[i18n.language] || ProjectItemData['zh-Hans'];
  const title = dataForCurrentLanguage[0].projects[0].title;
  const desc = dataForCurrentLanguage[0].projects[0].desc;
  const Images = ProjectImgList.filter(
    ({ groupName }) => groupName === "watsons"
  )
    .map(({ images }) => images)
    .flat();
  const items = [
    { buttonName: '双十二视觉', imageLink: '1' },
    { buttonName: '试用中心改版', imageLink: '6' },
    { buttonName: 'BI 平台优化', imageLink: '12' },
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
