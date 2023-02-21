import { useEffect, useRef } from "react";

export default function CopyPageLink({ pageTitle }) {
  const copyButton = useRef(null);

  useEffect(() => {
    copyButton.current.addEventListener("click", () => {
      // 获取当前页面的超链接
      const currentURL = window.location.href;
      // const currentPageTitle = document.title;
      const copyText = pageTitle + currentURL;

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
      aria-label="复制本页链接"
      type="button"
      title="复制本页链接"
      ref={copyButton}
      className="w-full h-full absolute bg-transparent inset-0 ring-default"
    ></button>
  );
}
