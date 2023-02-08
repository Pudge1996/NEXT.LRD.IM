import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { HiThumbUp } from "react-icons/hi"; //https://react-icons.github.io/react-icons/icons?name=hi
import { getAllPosts } from "/utils/mdx";
import siteMetadata from "/data/siteMetadata";
import blogCategoriesData from "/data/blog/blogCategoriesData";
import Date from "/components/common/Date";

export default function blog({ posts }) {
  return (
    <>
      <Head>
        <title>博客 - {siteMetadata.title}</title>
      </Head>
      <div className="layout flex flex-col">
        {/* 置顶博文 */}
        <div className="flex flex-col">
          <Link
            href="/blog/2022-08-17"
            className="flex flex-col gap-4hover:no-underline group ring-default"
            alt="1"
          >
            <div className="relative aspect-video mb-5 rounded-lg select-none h-[200px] sm:h-[300px] overflow-hidden img-loading-bg ">
              <Image
                src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/blogimg/2022-08-17-f2c1f5bfbb8d/01.png"
                alt=""
                fill
                priority
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <p className="text-[22px] font-semibold my-0 group-hover:text-blue-700 group-active:text-blue-900 dark:group-active:text-blue-500 dark:group-hover:text-blue-400 leading-snug">
              App 表单校验时机探索
            </p>
            <p className="mt-1 mb-0 text-secondary text-base elis-2">
              我在最近的工作中发现表单的校验时机通常是在三种方式内取舍：输入中、失焦后、提交时。这其中的差异还是挺耐人寻味的，有必要探索三者之间的各自优劣势和适用场景，于是乎就有了这篇文章。
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
        <div className="flex flex-col-reverse gap-8">
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
  return {
    props: { posts },
  };
};
