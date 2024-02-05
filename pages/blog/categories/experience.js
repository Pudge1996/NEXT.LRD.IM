import Head from "next/head";
import Link from "next/link";
import { HiThumbUp } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi
import { getCategoriesExperience } from "/utils/mdx";
import blogCategoriesData from "/data/blog/blogCategoriesData";
import Date from "/components/common/Date"
import { useTranslation, Translation } from "react-i18next";

export default function cateExperience({ posts }) {
  const { t } = useTranslation(["common", "pages"]);
  const { i18n } = useTranslation();
  const dataForCurrentLanguage = blogCategoriesData[i18n.language] || blogCategoriesData["zh-Hans"];

  return (
    <>
      <Head>
        <title>{dataForCurrentLanguage[1].name} - {t("common.header.blog", { ns: "common" })} - {t("common.information.pageTitleSuffix", { ns: "common" })}</title>
        <meta name="description" content={dataForCurrentLanguage[1].desc} />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:title" content={`${dataForCurrentLanguage[1].name} - ${t("common.header.blog", { ns: "common" })} - ${t("common.information.pageTitleSuffix", { ns: "common" })}`} />
        <meta property="og:description" content={dataForCurrentLanguage[1].desc} />
      </Head>
      <div className="layout series">
        {/* 博客列表 */}
        <h1>{dataForCurrentLanguage[1].name}</h1>
        <p>{dataForCurrentLanguage[1].desc}</p>

        <hr />

        <div className="flex flex-col gap-8">
        {posts.map((post, index) => (
            <section key={index} className="flex flex-col">
              <Link
                href={post.frontmatter.recommendLink}
                className={` ${
                  post.frontmatter.recommendLink ? "flex" : "hidden"
                } w-fit  gap-1 items-center force-link text-rose-500 hover:text-rose-500 sm:hover:text-rose-600 active:text-rose-700 sm:active:text-rose-700 ring-default font-semibold `}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiThumbUp className="text-lg" />
                <Translation>
                  {(t, { i18n }) => (
                    <>{i18n.language === "en" && <>{t("blog.recommendedText", { ns: "pages" })} {post.frontmatter.recommend}</>}
                      {!(i18n.language === "en") && <>{post.frontmatter.recommend}&thinsp;{t("blog.recommendedText", { ns: "pages" })}</>}
                    </>
                  )}
                </Translation>
              </Link>
              <Link
                href={`/blog/${post.slug}`}
                className="hover:no-underline group ring-default"
                alt={post.frontmatter.title}
              >
                <p className="text-[22px] font-semibold my-0 group-hover:text-blue-700 group-active:text-blue-900 dark:group-active:text-blue-500 dark:group-hover:text-blue-400 leading-snug">
                  {post.frontmatter.title}
                </p>
                <p className="mt-1 mb-0 text-secondary text-base elis-2">
                  {post.frontmatter.description}
                </p>
              </Link>
              <time className="mt-1 text-tertiary">
                <Date dateString={post.frontmatter.date} />
              </time>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getCategoriesExperience();

  return {
    props: { posts },
  };
};
