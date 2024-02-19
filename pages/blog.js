import React from "react";
import Link from "next/link";
import { getAllPosts } from "/utils/mdx";
import generateRssFeed from '/utils/generateRSSFeed';
import { useTranslation } from 'next-i18next'
import Date from "/components/common/Date";
// import withServerSideTranslations from '/utils/withServerSideTranslations';

// Loading copy from server-side
// export const getServerSideProps = withServerSideTranslations(["common", "components", "pages"]);

export default function blog({ posts }) {
  const { t } = useTranslation(["common", "pages"]);

  return (
    <>
      <div className="layout flex flex-col">
        <div className="flex gap-4 items-center my-4 mt-5 md:my-6 md:mt-8">
          <span className="text-tertiary select-none whitespace-nowrap text-sm">
            {t("blog.sortByDate", { ns: "pages" })}
          </span>
          <hr className="my-0 w-full" />
        </div>
        {/* Post list */}
        <div className="flex flex-col gap-8">
          {posts.map((post, index) => (
            <section key={index} className="flex flex-col">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:no-underline group ring-default"
                alt={post.frontmatter.title}
              >
                <p className="text-[22px] font-semibold my-0 group-hover:text-blue-700 group-active:text-blue-900 dark:group-active:text-blue-500 dark:group-hover:text-blue-400 leading-snug">
                  {post.frontmatter.title}
                </p>
                <time className="mt-1 text-tertiary">
                <Date dateString={post.frontmatter.date} />
              </time>
              </Link>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}


// Loading posts from utils/mdx
export const getStaticProps = async () => {
  const posts = getAllPosts().posts;
  await generateRssFeed();

  return {
    props: { posts },
  };
};
