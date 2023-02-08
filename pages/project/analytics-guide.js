import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImage from "/components/project/ProjectImage";

export default function analyticsGuide() {
  const title = ProjectItemData[2].projects[3].title;
  const desc = ProjectItemData[2].projects[3].desc;

  return (
    <>
      <Head>
        <title>
          {title} - {siteMetadata.title}
        </title>
        <meta name="description" content={desc} />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>
      <div className="layout project-v2 flex flex-col gap-6">
        <section className="top-info">
          <h1 className="">{title}</h1>
          <p className="">{desc}</p>
        </section>
        <section className="content">
          <h2>背景</h2>
          <p>
            随着 SHOPLINE
            数据基建和业务逐步发展，站内越来越多业务需要有数据概览和分析的能力。
          </p>
          <p>
            <b>但大多数业务设计师并没有相关设计经验</b>
            ，团队内也没有相关的设计规范引导和规范设计师的产出，
            <b>无法保证各业务线数据模块的设计效率</b>、
            <b>质量和整体体验的一致性</b>。
          </p>
          <p>
            所以团队希望能沉淀出一套数据场景的设计规范文档，供各业务设计师使用时参考。
          </p>
          <h2>时间线</h2>
          <ProjectImage
            src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/analytics-guide/w_1920/01.png"
            size="small"
          />
          <hr />
          <h2>调研阶段</h2>
          <p>
            <b>1. 收集主站所有业务线的数据场景：</b>
            <br />
            了解各业务线里面，数据模块的业务目标、需要支持的功能，以及页面层级情况。尝试去归纳同类型业务场景以及找到典型问题，并预判本次专项能覆盖的范围。
          </p>
          <figure className="max-w-2xl">
            <iframe
              width="100%"
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRJLBl22hnVJF6_iyOanz3FNJJRjPc_eU7-HXMjypStaVk9m1WhlnyWEMimLUe-95QJQ2v8gNBfRvFW/pubhtml?gid=0&single=true&widget=true&headers=false"
              allowfullscreen
            ></iframe>
          </figure>
          <figcaption>
            Google 表格：收集到所有数据场景后整理出来的表格，可滚动查看。
          </figcaption>
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/analytics-guide/w_1920/02.png">
            页面归类，抽象成模版。
          </ProjectImage>
          <p>
            <b>2. 查阅数据展示的行业标准：</b>
            <br />
            了解数据各组成部分的行业标准。由于公司业务面向国际化，所以需要了解到特定地区的标准。
          </p>
          <p>
            <b>3. 搜集同类型产品的数据业务规范：</b>
            <br />
            了解竞品设计解法，结合自身产品受众和场景，对比不同做法之间的差异。
          </p>
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/analytics-guide/w_1920/03.png" />
          <hr />
          <h2>初稿阶段</h2>
          <p>
            基于当前站内的现状以及竞品资料分析，我希望文档能够帮助设计师了解：数据展示的通用规则、高频组件的使用方式、常见页面如何布局和适配等。确保数据模块的展示能够准确和一致。所以，该专项会由两个模块组成：
          </p>
          <p>
            <b>1. 数据规范：</b>
            <br />
            从数据业务出发，归纳出数据域本身的设计规范。如文案、货币单位、涨跌、表格样式、可交互组件等。
          </p>
          <p>
            <b>2. 设计模式：</b>
            <br />
            赋能到其他业务，针对常见业务场景和典型问题提供解决方案（包括场景枚举、通用布局、文本适配等），为各业务设计师提供指导建议和参考。
          </p>
          <p>
            执行<b>初稿阶段</b>
            我先确定文档结构和内容，枚举出所有涉及到的设计点，并找出一至两个核心内容进行细化。
          </p>
          <figure>
            <iframe
              width="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FE6ZMXES55cD4oREviZnHZC%2F%25E7%25BB%2593%25E6%259E%2584%25E5%2592%258C%25E5%2586%2585%25E5%25AE%25B9%3Fnode-id%3D0%253A1%26t%3DEHOrVgkMDQmY7IZE-1"
              allowfullscreen
            ></iframe>
          </figure>
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/analytics-guide/w_1920/04.png" />
          <p>
            到了这一步，我先与组长和关键业务设计师同步当前进度，沟通中了解是否有遗漏或未覆盖到的内容。
          </p>
          <h2>最终文档</h2>
          <p>最终的产出物包括：</p>
          <ul>
            <li>指导全站的数据展示规范；</li>
            <li>数据业务场景下的设计模式；</li>
            <li>交付给前端的组件文档；</li>
            <li>
              通用数据报告页的设计模版（面向设计实习生，用于支援日常数据需求）。
            </li>
          </ul>
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/analytics-guide/w_1920/05.png" />
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/analytics-guide/w_1920/06.png" />
          <p>该专项的内容较多，这里嵌入一份 Figma 设计稿供浏览参考。</p>
          <figure>
            <iframe
              width="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3oiYI6CWqOrbO4QKQsRf5K%2F%25E6%2595%25B0%25E6%258D%25AE%25E8%25A7%2584%25E8%258C%2583%25E6%2596%2587%25E6%25A1%25A3%3Fnode-id%3D0%253A1%26t%3DLfop65ZNToqkzugH-1"
              allowfullscreen
            ></iframe>
          </figure>
        </section>
      </div>
    </>
  );
}
