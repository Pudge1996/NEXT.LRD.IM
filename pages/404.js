import Head from "next/head";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found - {siteMetadata.title}</title>
      </Head>

      <div className="layout text-center h-[600px] flex flex-col items-center justify-center">
        <div>
          <div className="text-6xl sm:text-8xl mb-2 sm:mb-4 select-none inline-block motion-safe:hover:animate-[bounce_0.2s_ease-in-out_infinite] will-change-auto">🙇</div>
          <h1 className="px-6">唔好意思<span className="tracking-[-0.35em]">，</span>这里<span className="whitespace-nowrap">没有内容<span className="absolute tracking-[-0.35em]">。</span></span></h1>
        </div>
        <p className="mb-0 mt-4 leading-normal text-secondary break-keep">
          我的网站在不久前进行了重构，导致部分链接失效了。<br/>猜你可能会想访问我的
          <Link href="/blog" className="whitespace-nowrap">设计博客</Link>。
        </p>
      </div>
    </>
  );
}
