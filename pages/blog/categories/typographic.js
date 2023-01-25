import Head from "next/head";
import Link from "next/link";
import { IoHeart } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import { getCategoriesTypographic } from "../../../utils/mdx";
import siteMetadata from "../../../data/siteMetadata";
import blogCategoriesData from "../../../data/blogCategoriesData";
import Date from "../../../components/Date";

export default function cateTypographic({ posts }) {
  return (
    <>
      <Head>
        <title>{blogCategoriesData[0].name} - 博客 - {siteMetadata.title}</title>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={blogCategoriesData[0].desc} />
        <link rel="icon" href="/favicon.ico" />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta name="og:type" content="summary" />
        <meta property="og:title" content={`${blogCategoriesData[0].name} - 博客 - ${siteMetadata.title}`} />
        <meta property="og:description" content={blogCategoriesData[0].desc} />

        {/* For Twitter */}
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <div className="layout series">
        {/* 博客列表 */}
        <h1>{blogCategoriesData[0].name}</h1>
        <p>{blogCategoriesData[0].desc}</p>

        <hr />

        <div className="flex flex-col-reverse gap-8">
          {posts.map((post, index) => (
            <section className="flex flex-col">
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="hover:no-underline group ring-default"
                alt={post.frontmatter.title}
              >
                <p className="text-[22px] font-semibold my-0 group-hover:text-blue-700 group-active:text-blue-900 dark:group-active:text-blue-500 dark:group-hover:text-blue-400 leading-snug">
                  {post.frontmatter.title}
                </p>
                <p className="mt-1 mb-0 text-secondary text-base elis-1">
                  {post.frontmatter.description}
                </p>
              </Link>
              <div className="flex gap-1 items-center mt-1 text-tertiary">
                <time className="">
                  <Date dateString={post.frontmatter.date} />
                </time>
                <Link
                  href={post.frontmatter.recommendLink}
                  className="empty:hidden w-fit flex items-center link-color-none ring-default before:content-['·'] before:hover:text-tertiary before:mr-1 after:content-['推荐'] after:ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.frontmatter.recommend}
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getCategoriesTypographic();

  return {
    props: { posts },
  };
};
