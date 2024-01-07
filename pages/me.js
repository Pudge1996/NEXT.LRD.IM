import Head from 'next/head'
import siteMetadata from "/data/siteMetadata";
import Link from "next/link";


export default function me() {
  const fileUrl = 'https://lrdim.oss-cn-shenzhen.aliyuncs.com/resources/resume-20221123.pdf';
  return (
    
    <div className="">
       <Head>
        <title>简历 - {siteMetadata.title}</title>
      </Head>

      <main className="resume max-w-2xl mx-auto pt-8 sm:pb-12 sm:pt-14 px-5 md:px-3">
        
        <h1 className="mb-5 sm:mb-10">
          李瑞东
        </h1>

        {/* 个人信息 */}
        <section className='resume-info flex flex-col gap-6 sm:gap-8'>
          <section>
            <h2>个人简介</h2>
            <p>我是一名 5 年工作经验的 UI/UX 设计师，曾就职于 ONES 国际化业务团队和欢聚集团 SHOPLINE 商家管理后台设计团队。拥有<strong>国际化、自研组件/图标库搭建、数据可视化和体验度量等</strong>实践经验，同时也有大型企业服务产品和跨境电商的业务背景。</p>
            <p>在职期间独立挖掘产品设计的机会点，完成多个 UI 专项探索，并推动多个设计自驱项目。对提升产品的用户体验，以及产研降本提效作出自己的贡献。</p>
          </section>
          <section>
            <h2>教育背景</h2>
            <p>艺术学学士，主修现代数字媒体设计</p>
            <p>毕业于<Link href="https://baike.baidu.com/item/%E6%B1%9F%E6%B1%89%E5%A4%A7%E5%AD%A6/343825" target="_blank" rel="noopener noreferrer" title="江汉大学 - 百度百科">江汉⼤学</Link>（2014 - 2018）</p>
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
            <p>2023.2 - 2023.8</p>    
            <div>
            <div>
              <p><Link href="https://ones.cn/" target="_blank" rel="noopener noreferrer" title="ONES 海外官网">ONES</Link></p>    
              <p>UI/UX 设计师，深圳</p>    
            </div>
            <ul>
              <li>负责 ONES 国际化业务体验设计，包含新用户引导流程、应用商店付费流程优化及系统多语言功能等功能的持续迭代等；</li>  
              <li>负责团队协同与任务管理工具 <Link href="https://ones.cn/products/task" target="_blank" rel="noopener noreferrer" title="ONES Task 产品介绍页">ONES Task</Link> 的前期需求挖掘和迭代，涉及 Design&nbsp;Token 实践和权限系统改造等；</li>  
              <li>发起部门分享会，分享内容包含：竞品本地化设计策略分析、网页性能优化等。</li>
            </ul>    
            </div>
          </section>
          <section>
            <p>2021.9 - 2022.11</p>    
            <div>
            <div>
              <p><Link href="https://joyy.com/" target="_blank" rel="noopener noreferrer" title="欢聚集团官网">欢聚集团</Link></p>    
              <p>UI 设计师，广州</p>    
            </div>
            <ul>
              <li>独立负责 <Link href="https://shoplineapp.cn/" target="_blank" rel="noopener noreferrer" title="SHOPLINE 官网">SHOPLINE</Link> 商家后台数据业务和 App 项目的全流程设计；</li>  
              <li>主导图表、<Link href="/project/analytics" target="_blank" title="SHOPLINE 数据透视表改版方案">表格</Link>等复杂组件的体验升级设计及方案落地，有效提升后台系统的可扩展性和使用屏效；</li>  
              <li>负责 B 端体验标准化<Link href="/project/analytics-guide" target="_blank" title="SHOPLINE 数据体验标准化方案">项目</Link>：横向检视平台数据场景，与 UX 设计师协作统一数据展示标准；</li>  
              <li>负责 App 端基础&业务<Link href="/project/slapp-components" target="_blank" title="SHOPLINE App 组件库方案">组件库</Link>搭建和交互模式探索。拥有基于东南亚地区商家特点而作出对应设计决策的实践经验；</li>
              <li>支持 SHOPLINE 开放平台：应用商店独立化项目，针对商家和开发者这两个角色的核心诉求找到设计发力点并提供完整<Link href="/project/sl-appstore" target="_blank" title="SHOPLINE 开放平台设计方案">方案</Link>；</li>
              <li>归纳国际化设计规范。结合外部成熟经验和公司业务所需作出合适的指引，并与广州、杭州和港台的设计同事<Link href="/blog/2022-01-02" target="_blank" title="多语言设计分享">分享设计经验</Link>。</li>
            </ul>    
            </div>
          </section>
          <section>
            <p>2020.7 - 2021.9</p>    
            <div>
            <div>
              <p><Link href="https://pc.qlchat.com/" target="_blank" rel="noopener noreferrer" title="千聊官网">千聊</Link></p>
              <p>UI 设计师，广州</p>
            </div>
            <ul>
              <li>负责千聊 B 端及<Link href="/project/qlchat" target="_blank" title="千聊 PPT 课程优化方案">课堂</Link>（音视频互动）业务。把控线上效果的质量，协助达成产品目标；</li>  
              <li>建立千聊首个成型且落地的自研 UI <Link href="/project/qlchat" target="_blank" title="千聊组件库方案">组件库</Link>，推进高效的组件交付流程，提升设计、验收、跨部门合作的效率</li>  
              <li>负责从零开始设计 SaaS 平台「<Link href="/project/ytscrm" target="_blank" title="鱼棠 SCRM 官网">鱼棠 SCRM</Link>」。在 Ant Design 的生态下制定并落实设计规范。根据数据反馈，提出并落地更符合用户预期的<Link href="/project/ytscrm" target="_blank" title="鱼棠 SCRM 海报改版方案">设计方案</Link>；</li>  
              <li>以<Link href="/blog/2021-04-09" target="_blank" title="分享会文稿 - 李瑞东的设计博客">分享会</Link>或 wiki 文档的方式沉淀设计经验，与团队一起进步。</li>  
            </ul>    
            </div>
          </section>
          <section>
            <p>2018.3 - 2020.4</p>    
            <div>
            <div>
              <p><Link href="https://www.watsons.com.cn/" target="_blank" rel="noopener noreferrer" title="屈臣氏中国官网">屈臣氏集团</Link></p>       
              <p>UI 设计师，广州</p>
            </div>
            <ul>
              <li>参与屈臣氏 App 界面设计，涉及产品迭代、深色模式、动效及制定维护 UI 规范等；</li>  
              <li>负责部分<Link href="/project/watsons" target="_blank" title="银联双十二活动设计方案">活动落地页</Link>的设计。主导<Link href="/project/watsons" target="_blank" title="屈臣氏试用中心改版方案">试用中心改版</Link>，基于不同设备特点作出相应的设计方案；</li>  
              <li>负责<Link href="/project/watsons" target="_blank" title="屈臣氏BI平台设计方案">内部 BI 数据平台</Link>的界面设计，提出并落地更优的设计方案。</li> 
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
              <p>熟练使用 Figma 和 Sketch 等设计软件，丰富的响应式适配和网页文字排版实践经验，熟悉 Win/Mac 平台浏览器差异</p>
            </section>
            <section>
              <strong>动效设计</strong>
              <p>拥有丰富的 Lottie 和 Framer 动效设计经验，以及基础的 After Effects / Principle 设计界面动画的能力</p>
            </section>
            <section>
              <strong>数据分析</strong>
              <p>拥有基础的定量分析能力，能够结合数据反馈和业务目标来调整设计策略、探索<Link href="/project/ytscrm" target="_blank" title="打开鱼棠 SCRM 设计项目方案">设计方案</Link></p>
            </section>
            <section>
              <strong>英语能力</strong>
              <p>基础读写顺畅，<Link href="https://www.pearsonpte.com/pte-academic" target="_blank" title="PTE Academic 官网首页">PTE Academic</Link> 总分 86（听 89 · 读 80 · 说 79 · 写 90）</p>
            </section>
            <section>
              <strong>前端实现</strong>
              <p>了解基础前端知识如 React、Next.js 和 Tailwind CSS，有开发并维护<Link href="/" target="_blank" title="李瑞东的个人网站">个人网站</Link>和 Chrome 浏览器插件的经验</p>
            </section>
          </section>

          
      </main>
    </div>
  )
}
