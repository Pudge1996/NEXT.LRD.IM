import "/styles/globals.css";
import Layout from "/components/layout";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={siteMetadata.description} />

        {/* For Soical Meida (openGraph) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content="https://lrdim.oss-accelerate.aliyuncs.com/resources/og_image.png" />
        <meta property="og:image:alt" content="Capturing the works, experiences, and insights from my design journey." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content="https://lrdim.oss-accelerate.aliyuncs.com/resources/og_image.png" />
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <ThemeProvider attribute="class" storageKey="theme">
        <Layout>
          <Component {...pageProps}/>
          <Analytics />
        </Layout>
      </ThemeProvider>
    </>
  );
}
