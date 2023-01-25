import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ContactCard from "/components/ContactCard";
import CopyPageLink from "/components/CopyPageLink";
import TableContents from "/components/TableContents";
import Date from "/components/Date";
import BlogFooter from "/components/BlogFooter";
import TableContents_Mobile from "/components/TableContents_Mobile";

import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import { IoLogoRss, IoPersonAdd, IoLink, IoList } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
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
  const [isLoaded, setIsLoaded] = useState(false);
  if (typeof props.children !== "string" && props.children.type === "img") {
    return (
      <figure>
        <div
          className={`relative rounded-lg min-h-[120px] ${
            isLoaded ? "" : "img-loading-spin"
          } `}
        >
          <Zoom
            src={props.children.props.src}
            alt={props.children.props.alt}
            title={props.children.props.title}
            objectFit="contain"
            layout="fill"
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

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => {
    return getMDXComponent(code);
  }, [code]);
  return (
    <>
      <Head>
        <title>
          {frontmatter.title} - {siteMetadata.title}
        </title>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.tags} />
        <link rel="icon" href="/favicon.ico" />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta name="og:type" content="summary" />
        <meta property="og:title" content={`${frontmatter.title} - ${siteMetadata.title}`} />
        <meta property="og:description" content={frontmatter.description} />

        {/* For Twitter */}
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <div className="layout blog-content">
        <div className="flex flex-col gap-4 sm:gap-7">
          <h1>{frontmatter.title}</h1>
          <div className="flex xl:hidden gap-3 mb-4 sm:mb-2">
            <div className="flex gap-3 items-center flex-grow">
              <div className="w-11 h-11 relative rounded-full overflow-hidden">
                <Image
                  src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/blogimg/2022-08-17-f2c1f5bfbb8d/01.png"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col grow gap-2">
                <div className="font-medium leading-none">李瑞东</div>
                <div className="text-sm text-secondary leading-none">
                  发布于 <Date dateString={frontmatter.date} />
                </div>
              </div>
            </div>
            {/* <div className="flex items-center btn-base text-base btn-md bg-neutral-100 dark:bg-neutral-900 sm:hover:bg-neutral-200 relative text-center px-4 whitespace-nowrap">
              <ContactCard />
              <span>联系作者</span>
            </div> */}
          </div>

          <div className="flex flex-row flex-wrap gap-2 mt-2 justify-between items-center hidden">
            <div className="text-tertiary">
              <span>{frontmatter.author}</span> ·{" "}
              <span>
                {" "}
                <Date dateString={frontmatter.date} />
              </span>{" "}
              首发于{" "}
              {/* <Link
                href={frontmatter.mediumLink}
                className="text-tertiary force-link hover:link-color"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </Link> */}
            </div>
            <div className="flex-row gap-1 items-center text-tertiary">
              {/* RSS订阅 */}
              <Link
                href="https://lrd.im/feed"
                target="_blank"
                aria-label="订阅博客 RSS"
                title="订阅博客 RSS"
                className="ring-default sm:hover:text-primary active:text-primary relative btn-base btn-icon"
              >
                <IoLogoRss className="text-lg" />
              </Link>

              {/* 联系方式 */}
              <div className="ring-default sm:hover:text-primary active:text-primary relative btn-base btn-icon">
                <IoPersonAdd className="text-xl" />
                <ContactCard />
              </div>

              <div className="ring-default sm:hover:text-primary active:text-primary relative btn-base btn-icon">
                <IoLink className="text-xl" />
                <CopyPageLink />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="min-w-full mdx-bundle">
            <Component
              components={{
                a: BlogLink,
                p: Paragraph,
                h2: BlogH2,
                h3: BlogH3,
              }}
            />
            <BlogFooter />
          </div>
          <aside className="hidden xl:flex min-w-[220px] mt-7 flex-col gap-4 ml-12">
            <section>
              {/* <h5>本文作者</h5> */}
              <div className="flex flex-col gap-3 py-1">
                <div className="flex gap-2 items-center">
                  <div className="w-11 h-11 relative rounded-full overflow-hidden">
                    <Image
                      src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/blogimg/2022-08-17-f2c1f5bfbb8d/01.png"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col grow gap-2">
                    <div className="font-medium leading-none">李瑞东</div>
                    <div className="text-sm text-secondary leading-none">
                      发布于 <Date dateString={frontmatter.date} />
                    </div>
                  </div>
                </div>
                {/* <div className="min-w-full sm:w-max btn-base text-base btn-md bg-neutral-100 dark:bg-neutral-900 sm:hover:bg-neutral-200 relative text-center whitespace-nowrap">
                  <ContactCard />
                  联系作者
                </div> */}
              </div>
            </section>
            <hr />
            <section className="sticky top-24">
              <h5>目录</h5>
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
