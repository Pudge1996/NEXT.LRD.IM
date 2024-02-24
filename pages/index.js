import React from "react";
import { useTranslation, Translation } from 'next-i18next'
import withServerSideTranslations from '/utils/withServerSideTranslations';

export const getServerSideProps = withServerSideTranslations(["common", "components", "pages"]);

function EnIntroduction() {
  return(
    <>
      <p className="mb-3 mt-3 sm:mt-6 text-wrap">
      A Designer.
      </p>
    </>
  )
}
function ZhHantIntroduction() {
  return(
    <>
      <p className="mb-3 mt-3 sm:mt-6 text-wrap">
      設計師。
      </p>
    </>
  )
}
function ZhHansIntroduction() {
  return(
    <>
      <p className="mb-3 mt-3 sm:mt-6 text-wrap">
        设计师。
      </p>
    </>
  )
}


const Project = () => {
  const { t } = useTranslation(["common", "pages"]);
  const introductionMap = {
    'zh-Hans': <ZhHansIntroduction />,
    'zh-Hant': <ZhHantIntroduction />,
    'default': <EnIntroduction />, // 默认组件
  };
  return (
    <>
      <div className="layout project">
        <section className="mb-14">
          <h1 className="">{t("common.information.author", { ns: 'common' })}</h1>
          <Translation>
            {(t, { i18n }) => (
              <div>
                {introductionMap[i18n.language] || introductionMap['default']}
              </div>
            )}
          </Translation>
        </section>
      </div>
      </>
  );
}

const Index = () => {
  return (
      <Project />
  );
};

export default Index;