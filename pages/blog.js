import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HiThumbUp } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi
import { getAllPosts } from "/utils/mdx";
import blogCategoriesData from "/data/blog/blogCategoriesData";
import Date from "/components/common/Date";
import generateRssFeed from '/utils/generateRSSFeed';
import { useTranslation, Translation } from 'next-i18next'
import withServerSideTranslations from '/utils/withServerSideTranslations';

// export const getServerSideProps = withServerSideTranslations(["common", "components", "pages"]);

async function extraGetServerSideProps(context) {
  const posts = getAllPosts().posts;
  await generateRssFeed();

  return {
    props: { posts },
  };
}

// 使用调整后的HOC并传递额外的逻辑
export const getServerSideProps = withServerSideTranslations(['common', 'components', 'pages'], extraGetServerSideProps);

export default function blog({ posts }) {
  const { t } = useTranslation(["common", "pages"]);
  const { i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <Head>
        <title>
          {t("common.header.blog", { ns: "common" })} - {t("common.information.pageTitleSuffix", { ns: "common" })}
        </title>
      </Head>
      <div className="layout flex flex-col">

        {/* 博客列表 */}
        <div className="flex gap-4 items-center my-4 mt-5 md:my-6 md:mt-8">
          <span className="text-tertiary select-none whitespace-nowrap text-sm">
            {t("blog.sortByDate", { ns: "pages" })}
          </span>
          <hr className="my-0 w-full" />
        </div>
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

// export const getStaticProps = async () => {
//   const posts = getAllPosts().posts;
//   await generateRssFeed();

//   return {
//     props: { posts },
//   };
// };
