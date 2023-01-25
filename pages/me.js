import Head from 'next/head'
import siteMetadata from "/data/siteMetadata";
import Link from "next/link";


export default function me() {
  const fileUrl = 'https://lrdim.oss-cn-shenzhen.aliyuncs.com/resources/resume-20221123.pdf';
  return (
    
    <div className="">
       <Head>
        <title>简历 - {siteMetadata.title}</title>
        <meta name="author" content={siteMetadata.author} />
        <meta name="description" content={siteMetadata.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* For Soical Meida (OpenGraph) */}
        <meta property="og:image" content="网站宽屏图（16:9）" />
        <meta property="og:image:alt" content="网站宽屏图的描述" />
        <meta name="og:type" content="summary" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />

        {/* For Twitter */}
        <meta name="twitter:site" content="@Pudge_1996" />
        <meta name="twitter:creator" content="@Pudge_1996" />
      </Head>

      <main className="resume max-w-2xl mx-auto pt-8 sm:pb-12 sm:pt-14 px-5 md:px-3">
        
        <h1 className="mb-5 sm:mb-10">
          李瑞东
        </h1>

        {/* 个人信息 */}
        <section className='resume-info flex flex-col gap-6 sm:gap-8'>
          <section>
            <h2>个人简介</h2>
            <p>我是一名 4 年工作经验的 UI 设计师，曾就职于欢聚集团 SHOPLINE 商家管理后台设计团队。拥有<strong>国际化、App、自研组件/图标库搭建、数据可视化和体验度量等</strong>实践经验，同时也有音视频互动场景和 B/C 端跨境电商的业务背景。</p>
            <p>在职期间独立挖掘产品设计的机会点，完成多个 UI 专项探索，并推动多个设计自驱项目。对提升产品的用户体验，以及产研降本提效作出自己的贡献。</p>
          </section>
          <section>
            <h2>教育背景</h2>
            <p><Link href="/link" target="_blank" rel="noopener noreferrer" title="江汉大学 - 百度百科">江汉⼤学</Link> · 现代数字媒体设计（2014—2018 本科）</p>
          </section>
          <section className='contact'>
            <h2>联系方式</h2>
            <p><span>电话：</span><span className="select-all">189 2500 1685</span></p>
            <p><span>邮箱：</span><span className="select-all">lrdbuff@gmail.com</span></p>
            <p><span>网站：</span><span><Link href="/" target="_blank" title="李瑞东 LRD.IM">lrd.im</Link></span></p>
          </section>
        </section>

        <hr className='' />

        {/* 工作经验 */}
        <section className='resume-exp flex flex-col gap-6 sm:gap-8'>
          <section>
            <p>2021.9 - 2022.11</p>    
            <div>
            <div>
              <p><Link href="/link" target="_blank" rel="noopener noreferrer" title="欢聚集团官网">欢聚集团</Link></p>    
              <p>UI 设计师，广州</p>    
            </div>
            <ul>
              <li>独立负责 <Link href="/link" target="_blank" rel="noopener noreferrer" title="SHOPLINE 官网">SHOPLINE</Link> 商家后台数据业务和 App 项目的全流程设计。其中数据模块<Link href="/link" target="_blank" rel="noopener noreferrer" title="SHOPLINE 数据概览改版方案">改版</Link>后访客数环比提升近 50%；</li>  
              <li>主导图表、<Link href="/link" target="_blank" title="SHOPLINE 数据透视表改版方案">表格</Link>等复杂组件的体验升级设计及方案落地。提升后台的整体观感体验和使用屏效，获得内外部正向反馈；</li>  
              <li>完成 B 端体验标准化<Link href="/link" target="_blank" title="SHOPLINE 数据体验标准化方案">实践</Link>：横向走查平台内所有数据场景，与各域 UX 设计师对齐后归纳数据展示的标准方案，保障基础体验一致性；</li>  
              <li>App 端基础&业务<Link href="/link" target="_blank" title="SHOPLINE App 组件库方案">组件库</Link>搭建和交互模式探索。拥有基于东南亚地区商家特点而作出对应设计决策的实践经验；</li>
              <li>支持 SHOPLINE 开放平台：应用商店独立化项目，针对商家和开发者这两个角色的核心诉求找到设计发力点并提供完整<Link href="/link" target="_blank" title="SHOPLINE 开放平台设计方案">方案</Link>；</li>
              <li>归纳国际化设计规范。结合外部成熟经验和公司业务所需作出合适的指引，并与广州、杭州和港台的设计同事<Link href="/link" target="_blank" title="分享会文稿 - 李瑞东的设计博客">分享设计经验</Link>。</li>
            </ul>    
            </div>
          </section>
          <section>
            <p>2020.7 - 2021.9</p>    
            <div>
            <div>
              <p><Link href="/link" target="_blank" rel="noopener noreferrer" title="千聊官网">千聊</Link></p>
              <p>UI 设计师，广州</p>
            </div>
            <ul>
              <li>建立千聊首个成型且落地的自研 UI <Link href="/link" target="_blank" title="千聊组件库方案">组件库</Link>，探索出高效的组件交付流程，提升设计/验收、跨部门合作的效率；</li>  
              <li>负责千聊讲师端和<Link href="/link" target="_blank" title="千聊 PPT 课程优化方案">课堂业务</Link>，以及内部工作流程规范化；</li>  
              <li>负责从零开始设计 SaaS 平台「<Link href="/link" target="_blank" title="鱼棠 SCRM 官网">鱼棠 SCRM</Link>」。在 Ant Design 的生态下制定并落实设计规范。根据数据反馈，提出并落地更符合用户预期的<Link href="/link" target="_blank" title="鱼棠 SCRM 海报改版方案">设计方案</Link>（已验证）；</li>  
              <li>以<Link href="/link" target="_blank" title="分享会文稿 - 李瑞东的设计博客">分享会</Link>或 wiki 文档的方式沉淀设计经验，与团队一起进步。</li>  
            </ul>    
            </div>
          </section>
          <section>
            <p>2018.3 - 2020.4</p>    
            <div>
            <div>
              <p><Link href="/link" target="_blank" rel="noopener noreferrer" title="屈臣氏中国官网">屈臣氏集团</Link></p>       
              <p>UI 设计师，广州</p>
            </div>
            <ul>
              <li>参与屈臣氏 app、小程序的界面设计。包括产品基础功能迭代、动效设计、深色模式、维护 UI 规范等；</li>  
              <li>负责部分<Link href="/link" target="_blank" title="千聊 PPT 课程优化方案">活动落地页</Link>的设计。主导<Link href="/link" target="_blank" title="千聊 PPT 课程优化方案">试用中心改版</Link>，点击渗透率环比提升近 70%，活动参与率环比提升 30.5%；</li>  
              <li>负责<Link href="/link" target="_blank" title="千聊 PPT 课程优化方案">内部取数平台</Link>的交互&界面设计。</li> 
            </ul>    
            </div>
          </section>
          <section>
            <p>2017.7 - 2017.9</p>    
            <div>
            <div>
              <p className="text-neutral-900 dark:text-neutral-50">华南农业大学</p>    
              <p>UI&thinsp;&&thinsp;视觉设计师 (实习)，广州</p>
            </div>
            <ul>
              <li>负责「飞滴送水」App 项目的设计，完成用户端和配送端的原型及界面 UI 设计；</li>  
              <li>使用 Element UI 组件库完成后台管理系统界面设计。</li> 
            </ul>    
            </div>
          </section>
          </section>
          
          <hr className='' />
          
          {/* 技能模块 */}

          <section className="resume-skill flex flex-col md:flex-row flex-wrap gap-4 md:gap-8">
            <section>
              <strong>界面设计</strong>
              <p>熟练 Figma 和 Sketch，拥有国际化 / 响应式适配、深色 / 放大模式 App 的设计经验</p>
            </section>
            <section>
              <strong>动效设计</strong>
              <p>掌握 AE / Principle，丰富的 Lottie 动效设计<Link href="/link" target="_blank" title="博客《最近用 Bodymovin 导出动画遇到的问题和解决方法》">经验</Link>，是 LottieFiles 社区的<Link href="/link" target="_blank" rel="noopener noreferrer" title="受 LottieFiles.com 委托设计的多组图标">创作者</Link></p>
            </section>
            <section>
              <strong>数据分析</strong>
              <p>有基础的体验度量能力，能够结合数据反馈来调整设计策略，探索设计<Link href="/link" target="_blank" title="打开鱼棠 SCRM 设计项目方案">方案</Link></p>
            </section>
            <section>
              <strong>前端实现</strong>
              <p>了解网页实现方式，基于 Next.js 和 Tailwind&nbsp;CSS 搭建个人网站 <Link href="/link" target="_blank" title="李瑞东的个人网站">LRD.IM</Link></p>
            </section>
          </section>

          
      </main>
    </div>
  )
}
