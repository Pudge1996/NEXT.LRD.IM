import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ContactCard from "/components/ContactCard";
import CopyPageLink from "/components/CopyPageLink";

import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import { IoLogoRss, IoPersonAdd, IoLink } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import Zoom from "next-image-zoom";
import remarkUnwrapImages from 'remark-mdx-images';


const BlogLink = ({ as, href, ...otherProps }) => {
  return (
    <Link legacyBehavior as={as} href={href}>
      <a {...otherProps} target="_blank" rel="noopener noreferrer" />
    </Link>
  );
};

// const BlogImg = ({ as, src, alt, title, ...otherProps }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   return (
//     <>
//       <span
//         className={` block relative rounded-lg overflow-hidden min-h-[200px] img-loading-bg ${
//           isLoaded ? "" : "img-loading-spin"
//         } `}
//       >
//         <Image
//           {...otherProps}
//           as={as}
//           src={src}
//           alt={alt}
//           title={title}
//           layout="fill"
//           onLoad={() => setIsLoaded(true)}
//           onError={() => setIsLoaded(true)}
//         ></Image>
//       </span>

//       <span className="empty:hidden text-center text-secondary block text-sm mt-2">
//         {alt}
//       </span>
//     </>
//   );
// };

const BlogImg = ({ as, src, alt, title, ...otherProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Zoom
        src={src}
        alt={alt}
        title={title}
        layout={"fill"}
        objectFit={"contain"}
        className="cursor-zoom-in"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      ></Zoom>

      <span className="empty:hidden text-center text-secondary block text-sm mt-2">
        {alt}
      </span>
    </>
  );
};

// const CodeBlock = () => {
//   <>
//   <div className="bg-red-500 w-5 h-5 absolute"></div>
//   </>
// }

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => {return getMDXComponent(code)}, [code]);
  return (
    <>
      <Head>
        <title>
          {frontmatter.title} - {siteMetadata.title}
        </title>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={siteMetadata.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta name="og:type" content="summary" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />

        {/* For Twitter */}
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <div className="layout blog-content">
        <section className="flex flex-col gap-2 sm:gap-1">
          <h1>{frontmatter.title}</h1>
          <div className="flex flex-row flex-wrap gap-2 justify-between items-center">
            <div className="text-tertiary">
              <span>{frontmatter.author}</span> ·{" "}
              <span>{frontmatter.date}</span> 首发于{" "}
              <Link
                href={frontmatter.mediumLink}
                className="text-tertiary force-link hover:link-color"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </Link>
            </div>
            <div className="flex-row gap-1 items-center text-tertiary hidden sm:flex">
              {/* RSS订阅 */}
              <Link
                href="https://lrd.im/feed"
                target="_blank"
                aria-label="订阅博客 RSS"
                title="订阅博客 RSS"
                className="ring-default sm:hover:text-priamry active:text-priamry relative btn-base btn-icon"
              >
                <IoLogoRss className="text-lg" />
              </Link>

              {/* 联系方式 */}
              <div className="ring-default sm:hover:text-priamry active:text-priamry relative btn-base btn-icon">
                <IoPersonAdd className="text-xl" />
                <ContactCard />
              </div>

              <div className="ring-default sm:hover:text-priamry active:text-priamry relative btn-base btn-icon">
                <IoLink className="text-xl" />
                <CopyPageLink />
              </div>
            </div>
          </div>
        </section>
        <Component
          components={{
            // a: BlogLink,
            // img: Image,
          }}
        />
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
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
