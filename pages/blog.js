import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HiThumbUp } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi
import { getAllPosts } from "/utils/mdx";
import siteMetadata from "/data/siteMetadata";
import blogCategoriesData from "/data/blog/blogCategoriesData";
import Date from "/components/common/Date";
import generateRssFeed from '/utils/generateRSSFeed';


export default function blog({ posts }) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <Head>
        <title>博客 - {siteMetadata.title}</title>
      </Head>
      <div className="layout flex flex-col">
        {/* 置顶博文 */}
        <div className="flex flex-col">
          <Link
            href="/blog/2022-05-14"
            className="flex flex-col group ring-default"
            alt="1"
          >
            <div className={`relative mb-5 rounded-lg select-none h-[144px] sm:h-[300px] overflow-hidden img-loading-bg ${
            isLoaded ? "" : "img-loading-spin"
          }`}>
              <Image
                src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/blogimg/2022-05-14-e0efbeed2ca0/01.png"
                alt=""
                onLoad={() => setIsLoaded(true)}
                onError={() => setIsLoaded(true)}
                priority
                width={678}
                height={300}
                className='absolute top-[50%] translate-y-[-50%]'
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </div>
            <p className="text-[22px] font-semibold my-0 group-hover:text-blue-700 group-active:text-blue-900 dark:group-active:text-blue-500 dark:group-hover:text-blue-400 leading-snug">
              高级排版功能：Case-Sensitive Forms 是什么？
            </p>
            <p className="mt-1 mb-0 text-secondary text-base elis-2">
            自从转换到 Figma 工作后，我发现在部分字体下的字体设置里，有一个选项叫「Case-Sensitive Forms」，来回切换后，发现了一些有意思的现象。经过一段时间的查阅资料和实践后，获得了新的认识，遂写下这篇笔记来记录这有趣的现象。
            </p>
          </Link>
        </div>

        {/* 博客分类 */}
        <div className="flex gap-4 items-center my-7 sm:mt-10">
          <span className="text-tertiary select-none break-keep">
            按分类浏览
          </span>
          <hr className="my-0 w-full" />
        </div>

        <div className="flex flex-row flex-wrap gap-3">
          {blogCategoriesData.map((data, index) => (
            <Link
              href={`/blog/categories/${data.url}`}
              className="flex flex-col gap-[2px] btn-base py-2 sm:py-3 px-4 sm:px-6 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 rounded-lg w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-1.5rem)/3)] grow"
              key={index}
            >
              <p className="my-0 text-base sm:text-lg font-semibold elis-1">
                {data.name}
              </p>
              <p className="my-0 hidden sm:block text-base text-tertiary">
                共&thinsp;{data.num}&thinsp;篇
              </p>
            </Link>
          ))}
        </div>

        {/* 博客列表 */}
        <div className="flex gap-4 items-center my-7 sm:mt-10">
          <span className="text-tertiary select-none break-keep">
            从新到旧浏览
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
                {post.frontmatter.recommend}
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
