// index.js 里面的公司和作品列表

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import companyData from "/data/companyData";


export default function ProjectItems() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      {companyData.map((company) => (
        // 公司 Company 列表
        <div>
          <div className="flex gap-3 py-3 sm:py-4 text-lg sm:text-[22px] items-center font-medium  bg-color  top-[62px] sm:top-[58px] transition-[background-color] z-[1]">
            <div className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] relative overflow-hidden rounded border-[0.5px] dark:border-transparent img-loading-bg transition-colors">
              <Image
                // 公司图片
                src={company.title} // 待办 src={company.img}
                alt={company.name}
                layout="fill"
                className="select-none"
              />
            </div>
            <Link
              href={company.link} // 待办
              aria-label={company.name}
              target="_blank"
              rel="noopener noreferrer"
              className="ring-default link-color-none force-link"
            >
              {company.name}
            </Link>
          </div>

          {/* 作品 Project 列表 */}
          <div className="flex flex-wrap gap-8 sm:max-md:gap-6 mt-0 sm:mt-2">
            {company.projects &&
              company.projects.map((project) => (
                <div className="sm:w-[calc(50%-1rem)]">
                  <Link
                    href={project.link} // 待办
                    aria-label={company.name}
                    className="group flex flex-col ring-default"
                  >
                    <div className={` relative aspect-video mb-3 rounded-lg select-none  overflow-hidden img-loading-bg ${isLoaded ? '' : 'img-loading-spin'}`}>
                      <Image
                        // 项目图片
                        src={project.title} // 待办 src={project.img}
                        alt={project.title}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setIsLoaded(true)}
                        layout="fill"
                        className="rounded-lg"
                      />
                    </div>

                    <h3 className="text-lg font-semibold leading-tight mb-1 sm:group-hover:text-blue-600 group-active:text-blue-800 sm:group-active:text-blue-800 dark:sm:group-hover:text-blue-400 dark:group-active:text-blue-500 sm:dark:group-active:text-blue-500">
                      {project.title}
                    </h3>
                    <div className="leading-snug text-secondary">
                      {project.desc}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}


