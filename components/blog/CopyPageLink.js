import React from "react";
import { useTranslation } from "react-i18next";

export default function CopyPageLink({ pageTitle }) {
  const { t } = useTranslation("components");
  const copyButton = React.useRef(null);

  React.useEffect(() => {
    copyButton.current.addEventListener("click", () => {
      // 获取当前页面的超链接
      const currentURL = window.location.href;
      // const currentPageTitle = document.title;
      const copyText = pageTitle + ' ' + currentURL;

      // 将文本写入剪贴板
      navigator.clipboard.writeText(copyText).then(
        () => {
          console.log("已复制到剪贴板");
        },
        (err) => {
          console.error("无法复制到剪贴板: ", err);
        }
      );
    });
  }, []);

  return (
    <button
      aria-label={t("blog.BlogFooter.copyLink")}
      type="button"
      role="button"
      title={t("blog.BlogFooter.copyLink_title")}
      ref={copyButton}
      className="w-full h-full absolute bg-transparent inset-0 ring-default"
    ></button>
  );
}
