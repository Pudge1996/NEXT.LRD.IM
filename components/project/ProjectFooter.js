import React from "react";
import Link from "next/link";
import ContactCard from "/components/common/ContactCard";

export default function ProjectFooter() {
  return (

      <section className="flex flex-col gap-4 sm:gap-6 p-4 mb-6 sm:p-6 rounded-lg mt-4 sm:mt-0 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="flex flex-col gap-1">
          <div className="text-lg font-semibold">李瑞东</div>
          <div className="text-secondary">
            <span>5 年工作经验的 UI/UX 设计师，拥有<strong>国际化</strong>、<strong>自研组件/图标库搭建</strong>、<strong>数据可视化</strong>和<strong>体验度量</strong>等实践经验，同时也有大型企业服务产品和跨境电商的业务<span className="whitespace-nowrap">背景。</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
        <Link
              href="/me"
              title="个人简历"
              aria-label="点击查看李瑞东的简历"
              target="_blank"
              className="flex gap-1 justify-center items-center w-full flex-1 sm:w-max btn-base btn-lg bg-neutral-900 dark:bg-white sm:hover:bg-black dark:sm:hover:bg-neutral-200  text-neutral-100 dark:text-neutral-800 select-none text-center"
            >
              查看简历
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-[1em]"
              >
                <path
                  fillRule="evenodd"
                  d="M14.3398 1.69922C13.9336 1.29297 13.4518 1.03255 12.8945 0.917969C12.3424 0.798177 11.707 0.738281 10.9883 0.738281H4.99609C4.28776 0.738281 3.65495 0.798177 3.09766 0.917969C2.54557 1.03255 2.06641 1.29297 1.66016 1.69922C1.25911 2.09505 0.998698 2.56901 0.878906 3.12109C0.764323 3.67318 0.707031 4.30339 0.707031 5.01172V10.9648C0.707031 11.6836 0.764323 12.3216 0.878906 12.8789C0.998698 13.431 1.25911 13.9049 1.66016 14.3008C2.06641 14.707 2.54557 14.9674 3.09766 15.082C3.65495 15.2018 4.29036 15.2617 5.00391 15.2617H10.9883C11.707 15.2617 12.3451 15.2018 12.9023 15.082C13.4596 14.9674 13.9388 14.707 14.3398 14.3008C14.7409 13.9049 14.9987 13.431 15.1133 12.8789C15.2331 12.3216 15.293 11.6836 15.293 10.9648V5.03516C15.293 4.31641 15.2331 3.68099 15.1133 3.12891C14.9987 2.57161 14.7409 2.09505 14.3398 1.69922ZM13.7305 4.81641V11.1758C13.7305 11.5872 13.694 11.9674 13.6211 12.3164C13.5482 12.6602 13.4049 12.9414 13.1914 13.1602C12.9779 13.3737 12.694 13.5169 12.3398 13.5898C11.9909 13.6628 11.6133 13.6992 11.207 13.6992H4.79297C4.38672 13.6992 4.00651 13.6628 3.65234 13.5898C3.30339 13.5169 3.01953 13.3737 2.80078 13.1602C2.58724 12.9414 2.44401 12.6602 2.37109 12.3164C2.30339 11.9674 2.26953 11.5872 2.26953 11.1758V4.83203C2.26953 4.41536 2.30339 4.03255 2.37109 3.68359C2.44401 3.33464 2.58724 3.05339 2.80078 2.83984C3.01432 2.62109 3.29818 2.47786 3.65234 2.41016C4.01172 2.33724 4.39974 2.30078 4.81641 2.30078H11.207C11.6133 2.30078 11.9909 2.33724 12.3398 2.41016C12.694 2.48307 12.9779 2.6263 13.1914 2.83984C13.4102 3.05339 13.5534 3.33464 13.6211 3.68359C13.694 4.03255 13.7305 4.41016 13.7305 4.81641ZM10.4414 10.0273C10.6393 10.0273 10.7956 9.96224 10.9102 9.83203C11.0299 9.69661 11.0898 9.52474 11.0898 9.31641V5.68359C11.0898 5.41276 11.0169 5.21224 10.8711 5.08203C10.7305 4.95182 10.5378 4.88672 10.293 4.88672H6.63672C6.42318 4.88672 6.2513 4.94661 6.12109 5.06641C5.99609 5.18099 5.93359 5.33724 5.93359 5.53516C5.93359 5.73828 5.9987 5.89974 6.12891 6.01953C6.25911 6.13411 6.43099 6.19141 6.64453 6.19141H7.95703L9.01953 6.06641L7.87109 7.11328L5.14453 9.84766C4.99349 9.9987 4.91797 10.1654 4.91797 10.3477C4.91797 10.5612 4.98307 10.7331 5.11328 10.8633C5.24349 10.9883 5.40755 11.0508 5.60547 11.0508C5.72005 11.0508 5.81901 11.0326 5.90234 10.9961C5.99089 10.9544 6.07161 10.8971 6.14453 10.8242L8.87109 8.10547L9.91016 6.97266L9.79297 8.08203V9.32422C9.79297 9.54297 9.85286 9.71484 9.97266 9.83984C10.0924 9.96484 10.2487 10.0273 10.4414 10.0273Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="/"
              title="我查看我的所有作品"
              aria-label="跳转到首页"
              className="flex gap-2 justify-center items-center flex-1 btn-base text-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors">
              所有作品
            </Link>
          <div className="flex-1 btn-base text-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors">
            <ContactCard />
            <div className="flex gap-2 justify-center items-center">
              联系我
            </div>
          </div>
         
        </div>
      </section>
  );
}
