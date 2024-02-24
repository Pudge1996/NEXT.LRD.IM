import React from "react";
import Link from "next/link";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import BlogFooter from "/components/blog/BlogFooter";

import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "/utils/mdx";
import { FiHash } from "react-icons/fi"; //https://react-icons.github.io/react-icons/icons?name=fi

import Zoom from "next-image-zoom";

const BlogLink = ({ as, href, ...otherProps }) => {
  const isAbsolutePath = href.startsWith("http") || href.startsWith("mailto");
  return (
    <Link
      href={href}
      as={as}
      {...otherProps}
      target={isAbsolutePath ? "_blank" : null}
      rel={isAbsolutePath ? "noopener noreferrer" : null}
      scroll={false}
    ></Link>
  );
};

const BlogH2 = (props) => {
  return (
    <h2 id={props.id}>
      <a href={"#" + props.id} className="group w-full">
        {props.children}{" "}
        <div className="text-neutral-500 hidden group-hover:inline-block align-[-0.125em]">
          <FiHash />
        </div>
      </a>
    </h2>
  );
};

const BlogH3 = (props) => {
  return (
    <h3 id={props.id}>
      <a href={"#" + props.id} className="group w-full">
        {props.children}{" "}
        <div className="text-neutral-500 hidden group-hover:inline-block align-[-0.125em]">
          <FiHash />
        </div>
      </a>
    </h3>
  );
};

const Paragraph = (props) => {
  // 图片脱离p标签，使用 Zoom
  const [isLoaded, setIsLoaded] = React.useState(false);
  if (typeof props.children !== "string" && props.children.type === "img") {
    return (
      <figure>
        <div
          className={`relative min-h-[120px] sm:border border-neutral-200 dark:border-neutral-800 rounded-lg transition-colors ${
            isLoaded ? "" : "img-loading-spin"
          } `}
        >
          <Zoom
            src={props.children.props.src}
            alt={props.children.props.alt}
            title={props.children.props.title}
            fill
            sizes="100vw"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            backgroundColor="black"
            backgroundOpacity="0.8"
            unoptimized={true}
          ></Zoom>
        </div>
        <figcaption>{props.children.props.title}</figcaption>
      </figure>
    );
  }
  return <p {...props} />;
};

const codePrefix = `
if (typeof process === 'undefined') {
  globalThis.process = { env: {} }
}
`;

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => {
    return getMDXComponent(codePrefix + code);
  }, [code]);
  return (
    <>
      <Head>
        <title>
          {frontmatter.title} - {siteMetadata.title}
        </title>
      </Head>
      <div className="layout blog-content">
        <div className="flex flex-col gap-0">
          <h1 className="mb-3 text-3xl sm:text-4xl xl:text-5xl xl:leading-[1.1]">
            {frontmatter.title}
          </h1>
        </div>
        <div className="flex">
          <div className="min-w-full mdx-bundler">
            <Component
              components={{
                a: BlogLink,
                p: Paragraph,
                h2: BlogH2,
                h3: BlogH3,
              }}
            />
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
