import "/styles/globals.css";
import Layout from "/components/layout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "/ni18n.config";
import { useTranslation } from "react-i18next";

function MyApp({ Component, pageProps }) {

  const { t } = useTranslation("common");
  const locale =
    typeof window !== "undefined"
      ? window.localStorage.getItem("MY_LANGUAGE")
      : null;

  useSyncLanguage(locale);

  return (
    <>
      <Head>
        <meta name="author" content={t("common.information.author")} />
        <meta name="description" content={t("common.information.desc")} />

        {/* For Soical Meida (openGraph) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("common.information.site")} />
        <meta
          property="og:description"
          content={t("common.information.desc")}
        />
        <meta
          property="og:image"
          content="https://lrdim.oss-accelerate.aliyuncs.com/resources/og_image.png"
        />
        <meta
          property="og:image:alt"
          content="Capturing the works, experiences, and insights from my design journey."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("common.information.site")} />
        <meta
          name="twitter:description"
          content={t("common.information.desc")}
        />
        <meta
          name="twitter:image"
          content="https://lrdim.oss-accelerate.aliyuncs.com/resources/og_image.png"
        />
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>
      <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
      <ThemeProvider attribute="class" storageKey="theme">
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);
