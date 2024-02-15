import Link from "next/link";
import DarkModeButton from "/components/common/DarkModeButton";
import SwitchLanguages from "/components/common/SwitchLanguages";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center sm:justify-between items-center gap-2 max-w-2xl px-3 py-12 sm:pt-6 mx-auto select-none text-tertiary text-sm sm:border-t border-neutral-200 dark:border-neutral-900 transition-[border-color]">
      <div>&copy; 李瑞东 2017-{currentYear}</div>
      <div className="hidden sm:flex justify-between items-center gap-2">
      <Link
          href="/updates"
          title="更新日志"
          className="flex justify-between items-center gap-1 ring-default"
        >
          What’s New
        </Link>
        
        <span> · </span>
        <Link
          href="https://lrd.im/feed.xml"
          title="订阅李瑞东的设计博客"
          target="_blank"
          className="flex justify-between items-center gap-1 ring-default"
        >
          RSS 订阅
        </Link>
        <span> · </span>
        <div className="flex justify-between items-center gap-1">
          <SwitchLanguages />
        </div>
        <span> · </span>
        <div className="flex justify-between items-center gap-1">
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}
