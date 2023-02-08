import "/styles/globals.css";
import Layout from "/components/layout";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={siteMetadata.description} />

        {/* For Soical Meida (openGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta name="og:type" content="summary" />
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <GoogleAnalytics
        trackPageViews={{ ignoreHashChange: true }}
        gaMeasurementId="G-8X76MNPDC2"
        strategy="beforeInteractive"
      />

      <ThemeProvider attribute="class" storageKey="theme">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
