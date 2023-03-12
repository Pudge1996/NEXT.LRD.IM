import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import TableContents from "/components/blog/TableContents";
import Date from "/components/common/Date";
import BlogFooter from "/components/blog/BlogFooter";
import TableContents_Mobile from "/components/blog/TableContents_Mobile";

import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "/utils/mdx";
import {
  IoList
} from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
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
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {frontmatter.title} - {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.tags} />

        {/* For Soical Meida (openGraph) */}
        <meta
          property="og:title"
          content={`${frontmatter.title} - ${siteMetadata.title}`}
        />
        <meta property="og:description" content={frontmatter.description} />
      </Head>
      <div className="layout blog-content">
        <div className="flex flex-col gap-0 xl:gap-7">
          <h1 className="mb-3 sm:mb-4 xl:mb-7 text-3xl sm:text-4xl xl:text-5xl">
            {frontmatter.title}
          </h1>
          <div className="flex xl:hidden gap-3 mb-7">
            <div className="flex gap-[6px] xl:gap-3 items-center flex-grow">
              <div className="flex items-center xl:items-start flex-row xl:flex-col grow gap-1 xl:gap-2 text-base text-secondary">
                <div className="whitespace-nowrap">
                {siteMetadata.author}
                </div>
                <div className="">
                  发布于 <Date dateString={frontmatter.date} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          {/* <div className="hidden xl:flex min-w-[216px] flex-col gap-4 mr-12 items-end">
            <button onClick={() => router.back()} className="flex sticky top-24 items-center btn-base btn-md gap-2 ring-default text-tertiary hover:text-primary">
              <IoReturnDownBack className="text-lg" />
              <span className="text-base">返回</span>
            </button>
          </div> */}

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
          <aside className="hidden xl:flex min-w-[216px] flex-col gap-4 ml-12">
            <section>
              <div className="flex flex-col gap-3 py-1">
                <div className="flex gap-2 items-center">
                  <div className="w-11 h-11 relative rounded-full overflow-hidden img-loading-bg">
                    <Image
                      src={siteMetadata.authorImg}
                      alt="头像"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="flex flex-col grow gap-2">
                    <div className="font-medium leading-none">李瑞东</div>
                    <div className="text-sm text-secondary leading-none">
                      发布于 <Date dateString={frontmatter.date} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className="my-2" />
            <section className="sticky top-24">
              <h5 className="text-lg font-semibold mb-3">目录</h5>
              <TableContents />
            </section>
          </aside>
        </div>
      </div>
      <div className="fixed block xl:hidden bg-color right-8 bottom-20 sm:right-12 sm:bottom-24 ring-default sm:hover:text-primary active:text-primary btn-base btn-icon border border-neutral-200 dark:border-neutral-800 transition-colors">
        <IoList className="text-xl" />
        <TableContents_Mobile />
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
