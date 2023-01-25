import Head from "next/head";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";

export default function Custom404() {
    return <>
    <Head>
        <title>404 找不到该页面 - {siteMetadata.title}</title>
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

      <div className="layout">
      <h1>404 - Page Not Found</h1>
      </div>

    </>
  }