import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HiThumbUp } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi
import { getAllPosts } from "/utils/mdx";
import blogCategoriesData from "/data/blog/blogCategoriesData";
import Date from "/components/common/Date";
import generateRssFeed from "/utils/generateRSSFeed";
import { useTranslation, Translation } from "react-i18next";

export default function blog({ posts }) {
  const { t } = useTranslation(["common", "pages"]);
  const { i18n } = useTranslation();
  const dataForCurrentLanguage =
    blogCategoriesData[i18n.language] || blogCategoriesData["zh-Hans"]; // 假设默认语言是英语
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <Head>
        <title>
          {t("common.header.blog", { ns: "common" })} -{" "}
          {t("common.information.pageTitleSuffix", { ns: "common" })}
        </title>
      </Head>
      <div className="layout flex flex-col">
        {/* 置顶博文 */}
        <div className="flex flex-col">
          <Link
            href="/blog/2022-05-14"
            className="flex flex-col group ring-default"
            alt="1"
          >
            <div
              className={`relative mb-5 rounded-lg select-none h-[144px] sm:h-[300px] overflow-hidden img-loading-bg ${
                isLoaded ? "" : "img-loading-spin"
              }`}
            >
              <Image
                src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/blogimg/2022-05-14-e0efbeed2ca0/01.png"
                alt=""
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                priority
                width={678}
                height={300}
                className="absolute top-[50%] translate-y-[-50%]"
              />
            </div>
            <p className="text-[22px] font-semibold my-0 group-hover:text-blue-700 group-active:text-blue-900 dark:group-active:text-blue-500 dark:group-hover:text-blue-400 leading-snug">
              高级排版功能：Case-Sensitive Forms 是什么？
            </p>
            <p className="mt-1 mb-0 text-secondary text-base elis-2">
              自从转换到 Figma
              工作后，我发现在部分字体下的字体设置里，有一个选项叫「Case-Sensitive
              Forms」，来回切换后，发现了一些有意思的现象。经过一段时间的查阅资料和实践后，获得了新的认识，遂写下这篇笔记来记录这有趣的现象。
            </p>
          </Link>
        </div>

        {/* 博客分类 */}
        <div className="flex gap-4 items-center my-4 mb-5 md:my-8 md:mt-7">
          <span className="text-tertiary select-none whitespace-nowrap text-sm">
            {t("blog.sortByCategory", { ns: "pages" })}
          </span>
          <hr className="my-0 w-full" />
        </div>

        <div className="flex flex-row flex-wrap gap-3">
          {dataForCurrentLanguage.map((data, index) => (
            <Link
              href={`/blog/categories/${data.url}`}
              className={`flex flex-col gap-[2px] btn-base py-3 px-4 sm:px-5 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 rounded sm:rounded-md grow ${
                i18n.language === "en"
                  ? "w-[calc((100%-1.5rem)/2)] min-h-[56px] sm:min-h-fit"
                  : "w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-1.5rem)/3)]"
              }`}
              key={index}
            >
              <p className="my-0 text-sm sm:text-base md:text-md font-semibold md:truncate grow">
                {data.name}
              </p>
              <p className="my-0 hidden sm:block text-sm text-tertiary">
                <Translation>
                  {(t, { i18n }) => (
                    <>
                      {i18n.language === "en" && <>{data.num} posts</>}
                      {!(i18n.language === "en") && (
                        <>共&thinsp;{data.num}&thinsp;篇</>
                      )}
                    </>
                  )}
                </Translation>
              </p>
            </Link>
          ))}
        </div>

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
                    <>
                      {i18n.language === "en" && <>{t("blog.recommendedText", { ns: "pages" })} {post.frontmatter.recommend}{" "}
                </>}
                      {!(i18n.language === "en") && (
                        <>{post.frontmatter.recommend}&thinsp;
                        {t("blog.recommendedText", { ns: "pages" })}</>
                      )}
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
  const posts = getAllPosts().posts;
  await generateRssFeed();

  return {
    props: { posts },
  };
};
