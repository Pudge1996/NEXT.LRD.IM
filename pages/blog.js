import React from "react";
import Link from "next/link";
import { getAllPosts } from "/utils/mdx";
import { useTranslation } from 'next-i18next'

// Loading copy from server-side, if I comment these codes, there will be a hydration error.
// import withServerSideTranslations from '/utils/withServerSideTranslations';
// export const getServerSideProps = withServerSideTranslations(["common", "components", "pages"]);

export default function blog({ posts }) {
  const { t } = useTranslation(["common", "pages"]);

  return (
    <>
      <div className="layout flex flex-col">
          <div className="text-tertiary whitespace-nowrap mb-4 text-sm">
            {t("blog.sortByDate", { ns: "pages" })}
          </div>
        {/* Post list */}
        <div className="flex flex-col gap-8">
          {posts.map((post, index) => (
              <Link
              key={index}
                href={`/blog/${post.slug}`}
                className="hover:no-underline group"
                alt={post.frontmatter.title}
              >
                <p className="font-semibold my-0 group-hover:text-blue-600">
                  {post.frontmatter.title}
                </p>
              </Link>
          ))}
        </div>
      </div>
    </>
  );
}


// Loading posts from utils/mdx
export const getStaticProps = async () => {
  const posts = getAllPosts().posts;

  return {
    props: { posts },
  };
};
