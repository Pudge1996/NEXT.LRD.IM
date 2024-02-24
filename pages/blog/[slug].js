import React from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import BlogFooter from "/components/blog/BlogFooter";
import { getAllPosts, getSinglePost } from "/utils/mdx";

const Post = ({ frontmatter }) => {
  return (
    <>
      <Head>
        <title>
          {frontmatter.title} - {siteMetadata.title}
        </title>
      </Head>
      <div className="layout blog-content">
          <h1 className="mb-3 text-3xl sm:text-4xl">
            {frontmatter.title}
          </h1>
        <div className="flex">
          <div className="min-w-full mdx-bundler">
            <Component />
            <BlogFooter pageTitle={frontmatter.title} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getInitialProps = async ({}) => {
  const title = document.title;
  return { title };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
