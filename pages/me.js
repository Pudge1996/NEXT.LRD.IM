import Head from 'next/head'
import siteMetadata from "/data/siteMetadata";
import Link from "next/link";
import Tooltips from "/components/common/Tooltips";


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
            <p>6 年 UI/UX 设计工作经验<Tooltips>2 年 C 端 UI 设计师 (2018-2020) <br/> 4 年 B 端 UI/UX 设计师 (2020-2024)</Tooltips>，现就职于 SHEIN 集团担任高级交互设计师。有企业服务、研发管理和跨境电商 SaaS 产品的业务背景。</p>
            <p>工作期间积累了<strong>国际化、设计系统搭建、数据可视化和体验度量等</strong>实践经验，并独立挖掘流程中的设计机会点，完成多个设计专项探索和设计自驱项目。</p>
          </section>
          <section>
            <h2>教育背景</h2>
            <p>毕业于<Link href="https://baike.baidu.com/item/%E6%B1%9F%E6%B1%89%E5%A4%A7%E5%AD%A6/343825" target="_blank" rel="noopener noreferrer" title="江汉大学 - 百度百科">江汉⼤学</Link> (2014-2018)</p>
            <p>艺术学学士，主修现代数字媒体设计</p>
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
            <h2>2024.2 - 至今</h2>    
            <div>
            <div>
              <p><Link href="https://www.sheingroup.com/" target="_blank" rel="noopener noreferrer" title="SHEIN 集团官网">SHEIN</Link></p>    
              <p>高级交互设计师，广州</p>    
            </div>
            </div>
          </section>
        <section>
            <h2>2023.2 - 2023.8</h2>    
            <div>
            <div>
              <p><Link href="https://ones.cn/" target="_blank" rel="noopener noreferrer" title="ONES 海外官网">ONES</Link></p>    
              <p>B 端 UI/UX 设计师，深圳</p>    
            </div>
            <ul>
              <li>负责 <Link href="https://ones.com/" target="_blank" rel="noopener noreferrer" title="ONES 海外官网">ONES 国际化</Link>业务体验设计，包含新用户引导流程、<Link href="/project/ones/app-subscription" target="_blank" title="ONES 应用支持订阅项目详情">应用商店付费流程设计</Link>及系统多语言功能等功能的持续迭代；</li>  
              <li>负责团队协同与任务管理工具 <Link href="https://ones.cn/products/task" target="_blank" rel="noopener noreferrer" title="ONES Task 产品介绍页">ONES Task</Link> 的前期需求挖掘和迭代，涉及权限系统改造和 Design&nbsp;Token 实践等；</li>  
              <li>发起部门分享会，分享内容包含：竞品的的本地化设计策略分析（日本和北美）、网页性能指标及其改进方式等。</li>
            </ul>    
            </div>
          </section>
          <section>
            <h2>2021.9 - 2022.11</h2>    
            <div>
            <div>
              <p><Link href="https://joyy.com/" target="_blank" rel="noopener noreferrer" title="欢聚集团官网">欢聚集团</Link></p>    
              <p>B 端 UI/UX 设计师，广州</p>    
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
            <h2>2020.7 - 2021.9</h2>    
            <div>
            <div>
              <p><Link href="https://pc.qlchat.com/" target="_blank" rel="noopener noreferrer" title="千聊官网">千聊</Link></p>
              <p>B 端 UI 设计师，广州</p>
            </div>
            <ul>
              <li>负责千聊 B 端及<Link href="/project/qlchat" target="_blank" title="千聊 PPT 课程优化方案">课堂</Link>（音视频互动）业务。把控线上效果的质量，协助达成产品目标；</li>  
              <li>建立千聊首个成型且落地的自研 UI <Link href="/project/qlchat" target="_blank" title="千聊组件库方案">组件库</Link>，推进高效的组件交付流程，提升设计、验收、跨部门合作的效率</li>  
              <li>负责从零开始设计 SaaS 平台「<Link href="/project/ytscrm" target="_blank" title="鱼棠 SCRM 官网">鱼棠 SCRM</Link>」。在 Ant Design 的生态下制定并落实设计规范。根据数据反馈，提出并落地更符合用户预期的<Link href="/project/ytscrm" target="_blank" title="鱼棠 SCRM 海报改版方案">设计方案</Link>；</li>  
              <li>以<Link href="/blog/2021-04-09" target="_blank" title="分享会文稿 - 李瑞东的设计博客">分享会</Link>或文档的方式沉淀设计经验，与团队一起进步。</li>  
            </ul>    
            </div>
          </section>
          <section>
            <h2>2018.3 - 2020.4</h2>    
            <div>
            <div>
              <p><Link href="https://www.watsons.com.cn/" target="_blank" rel="noopener noreferrer" title="屈臣氏中国官网">屈臣氏集团</Link></p>       
              <p>C 端 UI 设计师，广州</p>
            </div>
            <ul>
              <li>参与屈臣氏 App 界面设计，涉及产品迭代、深色模式、动效及制定维护 UI 规范等；</li>  
              <li>负责部分<Link href="/project/watsons" target="_blank" title="银联双十二活动设计方案">活动落地页</Link>的设计。主导<Link href="/project/watsons" target="_blank" title="屈臣氏试用中心改版方案">试用中心改版</Link>，基于不同设备特点作出相应的设计方案；</li>  
              <li>负责<Link href="/project/watsons" target="_blank" title="屈臣氏BI平台设计方案">内部 BI 数据平台</Link>的界面设计，提出并落地更优的设计方案。</li> 
            </ul>    
            </div>
          </section>
          <section>
            <h2>2017.7 - 2017.9</h2>    
            <div>
            <div>
              <p className="text-neutral-900 dark:text-neutral-50">华南农业大学</p>    
              <p>实习 UI&thinsp;&&thinsp;视觉设计师，广州</p>
            </div>
            <ul>
              <li>在<Link href="https://info.scau.edu.cn/" target="_blank" rel="noopener noreferrer" title="华农数信学院">华农数信学院研究生团队</Link>中负责项目的设计，根据原型图完成安卓端 App 界面设计；</li>  
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
              <p>熟练 Figma 和 Sketch 等软件，丰富的响应式布局、网页文字排版和国际化&nbsp;SaaS 实践经验，熟悉 Win/Mac 平台浏览器差异</p>
            </section>
            <section>
              <strong>交互设计</strong>
              <p>擅长通过竞品分析场景分析洞察设计机会点，将复杂系统简化为用户友好界面。掌握定量分析方法，以数据驱动优化产品体验</p>
            </section>
            <section>
              <strong>动效设计</strong>
              <p>熟练使用 After Effects / Principle / Lottie 设计界面动画，了解网⻚动画实现方式</p>
            </section>
            <section>
              <strong>英语能力</strong>
              <p>基础读写顺畅，持有 <Link href="https://www.pearsonpte.com/pte-academic" rel="noopener noreferrer" target="_blank" title="PTE Academic 官网首页">PTE Academic</Link> 成绩单</p>
            </section>
            <section>
              <strong>前端实现</strong>
              <p>了解基础 React (State, Hooks)，善于在设计还原和构建设计系统的过程中打破设计与前端的壁垒，有丰富的实践经验</p>
            </section>
          </section>

          
      </main>
    </div>
  )
}
