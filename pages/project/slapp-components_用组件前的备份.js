import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectFooter from "/components/project/ProjectFooter";
import Zoom from "next-image-zoom";

export default function slappComponents() {
  const Title = ProjectItemData[2].projects[0].title;
  const Desc = ProjectItemData[2].projects[0].desc;
  const [isLoaded, setIsLoaded] = useState(false);

  return <>
    <Head>
      <title>
        {Title} - {siteMetadata.title}
      </title>
      <meta name="author" content={siteMetadata.author} />
      <meta name="description" content={Desc} />
      <link rel="icon" href="/favicon.ico" />

      {/* For Soical Meida (OpenGraph) */}
      <meta property="og:image" content="网站宽屏图（16:9）" />
      <meta property="og:image:alt" content="网站宽屏图的描述" />
      <meta name="og:type" content="summary" />
      <meta property="og:title" content={Title} />
      <meta property="og:description" content={Desc} />

      {/* For Twitter */}
      <meta name="twitter:site" content="@Pudge_1996" />
      <meta name="twitter:creator" content="@Pudge_1996" />
    </Head>
    <div className="layout project-v2 flex flex-col gap-6">
      <section className="top-info">
        <h1 className="">{Title}</h1>
        <p className="">{Desc}</p>
      </section>

      <section className="content">
        <h2>背景</h2>
        <p>
          SHOPLINE app 从今年 Q2
          开始投入资源发展。定位是为东南亚中小型商家提供轻量高效的移动端网站管理工具。这意味着里面会承载经过简化的
          Web
          端功能，比如快速创建订单、商品、营销策略等功能。以及面向东南亚地区的扫描
          Barcode 盘点库存、商品/订单串接到 WhatsApp、Messenger 等功能。
        </p>
        <p>
          需求量暴增的同时，在工作和协作中暴露了现有组件数量较少，且存在较多明显体验和视觉等问题。我认为需要花点时间根据产品定位来重新构建一套组件库。
          <b>
            用于指导业务设计，保障设计输出一致性，产研侧降本提效，以支持高速迭代的业务需求。
          </b>
        </p>
        <p>
          在该项目中，我独立负责所有组件设计及组件文档撰写。过程中发起与其他业务设计师的对接沟通会议，研讨能同时满足各自业务需要的的设计方案。并持续跟踪组件开发、验收直至上线。
        </p>
        <figure>
          <div
            className={`relative max-w-2xl rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Zoom
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/1-1.png"
              alt=""
              objectFit="contain"
              layout="fill"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              backgroundColor="black"
              backgroundOpacity="0.8"
              fill="cover"
            ></Zoom>
          </div>
        </figure>
        <figcaption>我接手之前的组件库文档</figcaption>
        <h2>文档结构</h2>
        <p>
          为了确保组件库足够可靠和好用，不能够简单地罗列
          Components，而是需要有清晰和完整的设计说明、用法指引等内容。
        </p>
        <p>
          所以我将组件文档结构分为
          <b>样式枚举、适配方案、交互描述、扩展用法</b>
          。基本上每个组件都会有以上的内容，以满足文档使用者的要求：
        </p>
        <ul>
          <li>设计侧：清晰了解组件的能力，判断某组件是否能支持当前需要；</li>
          <li>
            研发侧：了解组件的所有变式，代码中预留相应的可扩展性。明确适配和极端情况时的处理方式。
          </li>
        </ul>
        <figure className="scroll">
          <div
            className={`relative rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Image
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/2-1.png"
              alt=""
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              fill
              sizes="100vw" />
          </div>
        </figure>
        <figcaption>组件文档结构示例，可上下滚动查看。</figcaption>
        <h2>国际化适配</h2>
        <p>
          App 在东南亚市场投放，会支持到七种语言的切换。在年初的一次部门分享「
          <Link href="/blog/2022-01-02" target="_blank">
            多语言设计分享
          </Link>
          」中我也探索过，国际化适配中第一个要处理的问题是文本扩展。所以在需要花更多时间在适配策略上面，尽可能确保在任何语言上都能较好地展示信息。
        </p>
        <figure>
          <div
            className={`relative rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Zoom
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/3-1.png"
              alt=""
              objectFit="contain"
              layout="fill"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              backgroundColor="black"
              backgroundOpacity="0.8"
              fill="cover"
            ></Zoom>
          </div>
        </figure>
        <p>
          除了布局设计上需要花心思，有时候也需要一些设计方案或策略上的取舍。比如在
          app 中很常用的底部弹窗标题组件，我在多个方案的对比中，做出了决定。
        </p>
        <p>
          在最初没有组件库规范设计的时候，底部弹窗的做法五花八门，对于弹窗内的提交、退出等做法模糊不清。
        </p>
        <figure>
          <div
            className={`relative max-w-2xl rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Zoom
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/3-2.png"
              alt=""
              objectFit="contain"
              layout="fill"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              backgroundColor="black"
              backgroundOpacity="0.8"
              fill="cover"
            ></Zoom>
          </div>
        </figure>
        <p>
          设计师在工作中也常常犯难：「到底该按以往做法，当时重新做一个？」两种方式都有各自的困难。由于这个组件特别高频，所以我在组件库专项里专门对此进行探索。尝试找到一个能满足
          <b>产品特点</b>和<b>设计目标</b>的做法，之后作为标准去执行。
        </p>
        <figure>
          <div
            className={`relative rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Zoom
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/3-3.png"
              alt=""
              objectFit="contain"
              layout="fill"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              backgroundColor="black"
              backgroundOpacity="0.8"
              fill="cover"
            ></Zoom>
          </div>
        </figure>
        <h2>设计模式</h2>
        <p>与前几次做组件库不同，这次我对「设计模式」展开了探索。</p>
        <p>
          App 有一段时间需求量极多，在做业务需求的同时我逐渐发现有几种模式是特别常用的，比如从用
          <b>底部弹窗承载的列表</b>、<b>添加标签</b>、<b>离开&提交编辑</b>
          等等。这些在业务中频繁出现的场景，我认为抽象成各自的设计模式后，对降本提效和保障一致性都大有裨益。
        </p>
        <figure className="scroll large">
          <div
            className={`relative rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Image
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/4-1.png"
              alt=""
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              fill
              sizes="100vw" />
          </div>
        </figure>
        <figcaption>设计模式文档示例，可上下滚动查看。</figcaption>
        <p>
          B 端业务表单比较多，我当时在做到输入框组件时发现了对「校验时机」这个课题的知识储备还比较缺乏，无法提供到相对有说服力的方案，于是我便对「App
          表单校验时机」进行了相对理性的探索。
        </p>
        <figure>
          <div
            className={`relative  rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Zoom
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/4-2.png"
              alt=""
              objectFit="contain"
              layout="fill"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              backgroundColor="black"
              backgroundOpacity="0.8"
              fill="cover"
            ></Zoom>
          </div>
        </figure>
        <p>
          在得出结论后将其作为「使用建议」添加进组件库内，同时也将完整过程记录到我的
          <Link href="/blog/2022-08-17" target="_blank">
            设计博客
          </Link>
          里面。
        </p>
        <figure>
          <div
            className={`relative rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Zoom
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/4-3.png"
              alt=""
              objectFit="contain"
              layout="fill"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              backgroundColor="black"
              backgroundOpacity="0.8"
              fill="cover"
            ></Zoom>
          </div>
        </figure>
        <h2>最终成果</h2>
        <p>
          最终这一阶段的组件库包含六大类，共18个组件和4个设计模式。由于内容较多，附上
          Figma 供参考查看。
        </p>
        <figure>
          <iframe
            width="100%"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMKOjRpcPPbPf7AonMv5fk0%2FSHOPLINE-EC2.0-App-%25E7%25BB%2584%25E4%25BB%25B6%25E5%25BA%2593%3Fnode-id%3D0%253A1%26t%3Di0Kk6hj8oSs09Xyv-1"
            allowfullscreen
          ></iframe>
        </figure>
        <p>在设计侧完成，且与其他业务设计师同步过后，也需要跟研发侧同步。当时在做 app 需求时，设计师与研发侧合作的现状是这样的：</p>
        <ol>
            <li>设计师对 app 内已有的组件模糊不清。不清楚现在有什么样的组件。经常会问到「XX 功能有做成组件吗？」、「在哪里能看到？」等问题；</li>
            <li>方案中复用某个组件时交流成本较大。设计师计划使用一个组件时，给到的描述时「复用 XX 功能下 XX 页面的 XX 组件」。同一个业务内复用时或许还能勉强沟通，没有参与到组件的设计和研发用这种方式沟通效率较低；</li>
            <li>验收中需要重复标注问题，开发也要重复修复样式问题。样式相同的控件却需要花额外的时间去验收和标注，设计师和研发双方都耗费了时间和精力。</li>
        </ol>
        <p>为了改善现状，我推动客户端的研发在测试包里做一个组件库的 Demo 入口，里面会按照类型聚合所有组件。对研发来说工作量是将组件复制多一份。但由于很现实的原因，做这个事情需要工时和排期，所以只能在每个版本节奏中抽空实现，所以我也列了一份优先级清单，先做高频、重要的组件。</p>
        <figure className="large">
          <div
            className={`relative rounded-lg min-h-[120px] ${
              isLoaded ? "" : "img-loading-spin"
            } `}
          >
            <Zoom
              src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/projectimg/slapp-components/w_1920/5-1.png"
              alt=""
              objectFit="contain"
              layout="fill"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              backgroundColor="black"
              backgroundOpacity="0.8"
              fill="cover"
            ></Zoom>
          </div>
        </figure>
      </section>
      <ProjectFooter />
    </div>
  </>;
}
