import Head from "next/head";
import Link from "next/link";
import { HiThumbUp } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi
import { getCategoriesSoftware } from "/utils/mdx";
import siteMetadata from "/data/siteMetadata";
import blogCategoriesData from "/data/blog/blogCategoriesData";

import Date from "/components/common/Date"

export default function cateSoftware({ posts }) {
  return (
    <>
      <Head>
        <title>{blogCategoriesData[4].name} - 博客 - {siteMetadata.title}</title>
        <meta name="description" content={blogCategoriesData[4].desc} />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta property="og:title" content={`${blogCategoriesData[4].name} - 博客 - ${siteMetadata.title}`} />
        <meta property="og:description" content={blogCategoriesData[4].desc} />
      </Head>
      <div className="layout series">
        {/* 博客列表 */}
        <h1>{blogCategoriesData[4].name}</h1>
        <p>{blogCategoriesData[4].desc}</p>

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
  const posts = getCategoriesSoftware();

  return {
    props: { posts },
  };
};
