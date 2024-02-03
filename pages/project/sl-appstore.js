import React from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImage from "/components/project/ProjectImage";
import ProjectFooter from "/components/project/ProjectFooter";
import ProjectNav from "/components/project/ProjectNav";
import { useTranslation } from "react-i18next";


export default function slAppstore() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const dataForCurrentLanguage = ProjectItemData[i18n.language] || ProjectItemData['zh-Hans'];
  const title = dataForCurrentLanguage[2].projects[2].title;
  const desc = dataForCurrentLanguage[2].projects[2].desc;
  const items = [
    { buttonName: '项目概述', imageLink: '0' },
    { buttonName: '前期工作', imageLink: '1' },
    { buttonName: '设计发力点', imageLink: '2' },
    { buttonName: '项目产出', imageLink: '3' },
  ];

  return (
    <>
      <Head>
        <title>
          {title} - {t("common.information.pageTitleSuffix")}
        </title>
        <meta name="author" content={siteMetadata.author} />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
      </Head>
      <div className="layout project-v2 flex flex-col gap-6">
        <section className="top-info">
          <h1 className="">{title}</h1>
          <p className="">{desc}</p>
        </section>
        <ProjectNav items={items} />
        <section className="content">
          <h2 id="0">项目概述</h2>
          <p>
            SHOPLINE 平台的功能是有限的。而应用商店允许商家以安装插件的方式，扩展自己商店的能力，比如通过插件来实现智能选品、物流管理、深度自定义网店样式等。
          </p>
          <p>
            原本的应用商店是内嵌在 SHOLINE 商家后台内，而且里面的应用都是 SHOPLINE 内部研发出来的。随着产品发展，SHOPLINE 需要更丰富的开放能力来满足商家各种各样的需求，原本的做法已经无法支持业务发展。
          </p>
          <ProjectImage
            src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/1-1.png"
            size="small"
          >
            改版前的 SHOPLINE 应用详情页（左）和列表页（右）。
          </ProjectImage>
          <p>
            SHOPLINE
            应用商店需要对外开放，提供开发文档，接入第三方开发的应用。后续需要支持订阅（商业化）、评论、智能推荐等，会有一个完整的生态。所以需要将应用商店从管理后台里独立出来，以支持后续的业务发展。
          </p>
          <hr />
          <h2 id="1">前期工作</h2>
          <p>
            在工作前我找业务方、产品经理了解了 SHOPLINE
            开放平台的相关背景，同时也着重了解跟该需求相关的 SHOPLINE
            应用商店面向的人群，以及他们使用该服务的目的。简单归纳如下：
          </p>
          <ProjectImage
            src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/2-1.png"
            size="small"
          />
          <p>
            在正式开展设计之前进行竞品分析，主要对核心功能的交互体验，以及整体的主观感受进行资料整理及聚合分析，辅助设计决策。
          </p>
          <figure>
            <iframe
              width="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FKm6DUBwzmMWLAyiNGmnm2H%2FApp-Store-%25E7%258B%25AC%25E7%25AB%258B%25E5%258C%2596%25E7%25AB%259E%25E5%2593%2581%25E5%2588%2586%25E6%259E%2590%3Fnode-id%3D0%253A1%26t%3DJNAyqsDBTsxURQxm-1"
              allowfullscreen
            ></iframe>
          </figure>
          <figcaption>Figma 预览：竞品分析。</figcaption>
          <p>
            在分析过程中能比较明确感受到 Shopify
            的整体感受要比店匠好得多，结合自身业务，我也找到几个设计发力点。
          </p>
          <h2 id="2">设计发力点（面向开发者）</h2>
          <h3>帮助开发者提供优质素材</h3>
          <p>
            <b>策略 1：向开发者提供素材模版示例，提升网站整体品质</b>
            <br />
            在线网店的商家希望能够扩展自身业务或更高效的管理，而来到 SHOPLINE
            应用中心去寻找合适的工具。而这需要一批高质量的应用支持，但应用内部的功能情况设计师无法干预。
          </p>
          <p>
            在走查了现状以及对比过竞品之后，作为该平台的设计师，我认为可以先从应用的素材质量方面去入手。
          </p>
          <ProjectImage
            src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/3-1.png"
            size="small"
          >
            改版前的应用商店现状，文案、图片素材杂乱无章。
          </ProjectImage>

          <p>
            所以我整理了一份上架应用时所需素材的设计指南和模版，给到第三方应用的开发者。帮助开发者更好地在应用商店前台展示自己的应用，同时也保障应用商店内容的整体观感。
          </p>
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/3-2.png" />
          <h2>设计发力点（面向开发者）</h2>
          <h3>营造可靠，专业的体验感受</h3>
          <p>
            <b>策略 1：详情页布局和信息架构的设计</b>
            <br />
            商家是否安装一个应用，取决于该应用对其网店是否有帮助。所以详情页的质量对转化率有着较大影响，于是我对应用详情页作出了相当大的改动：展自身业务或更高效的管理，而来到
            SHOPLINE
            应用中心去寻找合适的工具。而这需要一批高质量的应用支持，但应用内部的功能情况设计师无法干预。
          </p>
          <ol>
            <li>移除「应用亮点」的配图素材；</li>
            <li>增加「应用截图」的曝光；</li>
            <li>始终暴露「安装应用」的触点。</li>
          </ol>
          <ProjectImage
            src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/3-3.png"
            scroll={true}
          >
            应用详情页的布局结构设计策略。可上下滚动查看。
          </ProjectImage>

          <p>
            <b>策略 2：设计推荐优质应用的模版</b>
            <br />
            在看到产品简单勾画出来的原型图后，我尝试代入到商家的角度，我发现按照产品的方案整个网站都很平，一直在机械式的罗列和枚举。但我想在应用商店内让商家感受到：这个应用商店很懂我，知道我需要哪些应用。
          </p>
          <p>
            中途我提议看根据商家当前网店的营业状态和品类/地区特点，智能推荐到恰当的应用给商家。但产品用了经典的理由来拒绝我这个想法：「MVP
            版本先简单做」。
          </p>
          <p>
            然后我转变了下思路，提供了一组用于展示推荐应用的模版，给到产品或运营穿插在应用商店内，打破原本冷冰冰的应用列表。一方面是视觉上能让网站整体观感会有起伏和韵律；另一方面恰当地曝光优质的应用能给到商家更多的帮助。
          </p>
          <ProjectImage
            src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/3-4.png"
            scroll={true}
          >
            应用商店首页的布局结构设计策略。可上下滚动查看。
          </ProjectImage>
          <p>
            <b>策略 3：打磨安装应用流程</b>
            <br />
            安装应用不应该成为商家的负担，其体验应该足够简单、清晰和直观。原本的应用安装的链路其实已经足够短，流程也很直观。
          </p>
          <p>
            但这次项目是将应用商店从电商后台内独立了出去，这意味着
            <b>登录场景</b>
            的介入。面对这种状况，我尝试去打磨流程中的细节，提供更佳的应用安装体验。
          </p>
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/3-5.png" />
          <h2 id="3">项目产出</h2>
          <p>「SHOPLINE 开放能力：应用商店独立化」项目最终输出的内容包括：</p>
          <ol>
            <li>完整的 SHOPLINE 应用商店设计方案和响应式布局适配方案；</li>
            <li>面向开发者的应用素材设计规范和模版；</li>
            <li>面向产品/运营的优质应用展示模版；</li>
            <li>面向产品/运营的应用商店 Banner 素材模版。</li>
          </ol>
          <ProjectImage src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/sl-appstore/w_1920/4-1.png" />
          <h2>Think More：还能做到更多吗？</h2>
          <p>
            在有限的时间和资源内完成需求后，我尝试去反问自己哪些地方是能够做得再多一点？提供给用户（商家/开发者）更多价值。
          </p>
          <ol>
            <li>
              如果通过「搜索」安装应用的转化率足够高，我们是否能提供一些搜索建议给到用户？当前方案下，搜索没有建议，也没有历史记录，这可能不够友好。
            </li>
            <li>
              登录流程能否进一步简化，比如在弹窗内实现？但是比较顾虑的是这种做法会与以往所有登录流程都不同，不确定会不会有技术或风控相关的阻力；
            </li>
            <li>
              应用内部的情况，设计师并非无法干预，仍然可以输出与 SHOPLINE
              设计语言相符的设计指南供开发者参考。
            </li>
          </ol>
        </section>
        <ProjectFooter />
      </div>
    </>
  );
}
