import React from "react";
import Head from "next/head";
import siteMetadata from "/data/siteMetadata";
import ProjectItemData from "/data/project/ProjectItemData";
import ProjectImage from "/components/project/ProjectImage";
import ProjectFooter from "/components/project/ProjectFooter";
import ProjectNav from "/components/project/ProjectNav";
import styles from './styles.module.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


export default function appSubscription() {
  // const showTableButton = <><FaAngleDown />展开表格</>;
  // const hideTableButton = <><FaAngleUp />收起表格</>;
  const [tableShow, setTableShow] = React.useState('展开表格');
  const [tableIcon, setTableIcon] = React.useState(<FaAngleDown />);
  const [tableHight, setTableHeight] = React.useState('h-[300px]');
  const [isMaskVisible, setIsMaskVisible] = React.useState(true);
  const elementRef = React.useRef(null);
  const closedTableRef = React.useRef(null);
  const handleClick = () => {
    if (tableShow === '展开表格') {
      setTableShow('收起表格');
      setTableHeight('h-auto');
      setIsMaskVisible(!isMaskVisible);
      setTableIcon(<FaAngleUp />);
    } else {
      setTableShow('展开表格');
      setTableHeight('h-[300px]');
      setIsMaskVisible(!isMaskVisible);
      setTableIcon(<FaAngleDown />);
      // 在else分支中聚焦到DOM元素
    if (closedTableRef.current) {
      closedTableRef.current.scrollIntoView({ behavior: 'auto' });
    }
    }
  };
  const title = ProjectItemData[3].projects[0].title;
  const desc = ProjectItemData[3].projects[0].desc;
  const items = [
    { buttonName: "背景", imageLink: "0" },
    { buttonName: "竞品分析", imageLink: "1" },
    { buttonName: "逻辑梳理", imageLink: "2" },
    { buttonName: "方案概况", imageLink: "3" },
    { buttonName: "系统思维", imageLink: "4" },
    { buttonName: "项目收获", imageLink: "5" },
  ];

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
        <ProjectNav items={items} />
        <section className="content">
          <h2 id="0">背景</h2>
          <p>
            ONES
            是一款企业级研发管理平台，提供全面的项目管理和流程优化解决方案。平台内的应用商店专门为
            ONES
            用户提供各种插件和应用，包括流程自动化、流水线工具、飞书/钉钉连接器等，旨在扩展
            ONES 的功能，从而帮助用户更高效地管理项目和流程。
          </p>
          <p>
            为了更好地服务于商业化目标，ONES
            现在需要支持应用付费功能：将原本免费使用的核心应用，转为付费订阅制，提升平台的盈利能力和产品价值。
          </p>
          <ProjectImage
            src="/P/1-1.png"
            size="small"
          />
          <h2 id="1">竞品分析</h2>
          <p>
            在需求前期，我针对核心功能的交互体验及遇到的主要设计挑战进行竞品资料整理及聚合分析，分析对象包含 ONES 的直接竞品 JIRA 和 Monday，同时也有其他体量较大的 SaaS 公司如 Shopify。
          </p>
          <div className={`${tableHight} ${isMaskVisible ? styles.mask : ''} after:bg-white-b after:dark:bg-black-b transition-[height] w-full mx-auto overflow-x-auto overflow-y-hidden relative`}>
          <table ref={elementRef} className={`${styles.table} table-fixed`}>
            <thead>
              <tr>
                <th className="w-[100px]" ref={closedTableRef}>功能</th>
                <th className="w-[350px] w-min-[250px]">JIRA</th>
                <th className="w-[350px] w-min-[250px]">Monday</th>
                <th className="w-[350px] w-min-[250px]">Shopify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>应用市场</td>
                <td>支持在系统内、外浏览应用市场<br />第三方应用为主，部份应用会有官方 Partner 认证</td>
                <td>支持在系统内、外浏览应用市场<br />第三方应用为主，少量官方应用</td>
                <td>支持在系统外浏览应用市场<br />第三方应用为主，少量官方应用</td>
              </tr>
              <tr>
                <td>试用</td>
                <td>交互方式：弹窗<br />展示应用基础信息：<ul><li>名称、开发者、评分、下载量</li><li>应用描述</li><li >安装即同意政策和条款</li></ul>操作：App详情、开始试用、取消<br />试用期间不能进行付费订阅</td>
                <td>交互方式：当前页面，全屏弹窗<br />展示安装信息：<ul><li>所需权限</li><li>应用描述</li><li>安装即同意政策和条款</li></ul>操作：安装、取消<br />试用期间可以进行付费订阅</td>
                <td>交互方式：跳转页面<br />展示安装信息：<ul><li>所需权限</li><li>安装即同意政策和条款</li></ul>操作：App详情、安装、取消<br />试用期间可以进行付费订阅</td>
              </tr>
              <tr>
                <td>付费订阅</td>
                <td>交互方式：新标签页<br /><ul><li>设定席位以及付款周期（1年/2年）</li><li>添加到购物车</li><li>在购物车中结算</li></ul>*购物车页面提供了一个入口，能在当前页面<br />选购其他 Atlassian 产品</td>
                <td>交互方式：当前页面，全屏弹窗<br /><ul><li>设定席位以及付款周期（月付/年付）</li><li>结算</li></ul>*只能购买当前应用，没有和其他应用联动</td>
                <td>交互方式：跳转页面<br />选购套餐的过程是在应用内部，与 Shopify 无关；<br /> Shopify 只负责结算页面<br />*部份应用会负责选购+结算全过程</td>
              </tr>
              <tr>
                <td>卸载</td>
                <td>交互方式：弹窗<br />卸载前必须先手动取消订阅，否则按钮被禁用<br />告知后果、条款和政策</td>
                <td>交互方式：弹窗<br />告知后果<br />卸载后会同时取消订阅计划</td>
                <td>交互方式：弹窗<br />告知后果<br />提供表单填写卸载原因，会通知到开发者</td>
              </tr>
              <tr>
                <td>取消订阅</td>
                <td>交互方式：弹窗<br />告知取消订阅的后果<br />取消订阅后，提供恢复订阅和卸载应用的入口</td>
                <td>不支持单独取消订阅<br />只能在卸载应用的同时取消订阅</td>
                <td>？？？</td>
              </tr>
              <tr>
                <td>总结差异</td>
                <td><b>试用</b><br />安装时会展示应用名称、评分、下载量等信息<br /><br /><b>付费订阅</b><br />支付流程中可以选购其他 Atlassian 产品<br /><br /><b>卸载</b><br />必须先取消订阅才能卸载应用</td>
                <td><b>试用</b><br />安装时会展示所需权限、应用描述等信息<br /><br /><b>付费订阅</b><br />支付流程中可以不能选购其他应用<br /><br /><b>卸载</b><br />不能单独取消订阅，卸载应用后会同时取消订阅</td>
                <td><b>试用</b><br />安装时会展示所需权限、应用描述等信息<br /><br /><b>付费订阅</b><br />选购和支付流程可以由开发者独立开发，Shopify 的支付流程中不能同时选购其他应用<br /><br /><b>卸载</b><br />会有简单表单填写提交反馈给开发者</td>
              </tr>
              {/* 可以继续添加更多的表格行 */}
            </tbody>
          </table>
          {/* <div className={styles.mask}></div> */}
          </div>
          
          <div className="w-full" ><button onClick={handleClick} className="flex gap-1 items-center text-secondary text-base sm:text-sm btn-base btn-md min-w-[76px] mt-2 mx-auto font-medium">{tableIcon}{tableShow}</button></div>
          <p>
          根据分析对比的结果，再结合 ONES 平台的特点以及本次需求的业务目标，可以为设计决策提供一些依据，比如：
          </p>
          <ul>
            <li>JIRA 在安装应用的确认弹窗里会展示应用名称、评分、下载量等信息，这些信息在 ONES 的应用中心里已经有展示了，所以我们可以省略掉，只再确认弹窗内展示关键信息如试用截止日期、隐私策略等；</li>
            <li>JIRA 在卸载应用前必须先手动取消订阅（强调控制和合规），而 Monday 则将卸载与取消订阅的动作绑定在一起（注重便利和直观）。由于 ONES 是企业级研发管理平台，希望用户对自己的操作有完全的认识和控制，所以 ONES 将卸载和订阅分开，允许单独卸载应用，也允许手动取消订阅。</li>
            <li>Shopify 在卸载应用时会出现简单表单允许用户提交一些反馈给开发者。ONES 也可以在退订或卸载流程中做一些策略，但由于应用中心内都是自研应用，具体策略会和 Shopify 不一样。</li>
            <li>...</li>
          </ul>
          <h2 id="2">逻辑梳理</h2>
          <p>
            由于此需求涉及多个业务模块、多个角色以及不同的 ONES
            版本，功能覆盖广泛。作为新同事，这里面有一些旧逻辑（或以前埋下的坑）我是没有接触过的。
          </p>
          <p>
            所以在开始具体设计工作之前，我尝试去梳理相关业务逻辑，并针对一些关键点进行了预先的提问和记录，这样便于之后与
            PM
            及设计团队进行深入沟通和方案探讨。除此之外，在分析业务逻辑的过程中，我还补充了一些产品经理未涉及的边缘场景。
          </p>
          <p>下面是对业务逻辑的初步梳理草图。</p>
          <ProjectImage src="1" />
          <p>结合上述的资料，在该项目的设计过程中需要关注以下几点：</p>
          <p>
            <b>1. 用户体验的平滑过渡</b>
            <br />
            尽量确保从免费模式到付费订阅模式的过渡对用户来说尽可能平滑，避免引起用户的困惑或不满。
          </p>
          <p>
            <b>2. 高效便捷的支付流程</b>
            <br />
            结合业务目标设计支付流程，在支持个性化推荐和减少付费阻碍中找到平衡。
          </p>
          <p>
            <b>3. 取消订阅和重新订阅的流程</b>
            <br />
            清晰的取消订阅流程，可以帮助维护品牌的正面形象，减少客户焦虑情绪。
          </p>
          <h2 id="3">方案概况</h2>
          <p>
            下面展示我们方案概况，重点描述符合我们预期的方案，如何提供更好的用户体验和达到业务目标。
          </p>
          <ProjectImage src="1">*注：当时 ONES 要求工作中用英文交付设计稿。</ProjectImage>
          <h3>1. 用户体验的平滑过渡</h3>
          <p>
            应用支持付费订阅模式后，系统会给所有用户一个14天的试用期予以过渡，主要影响到以下两类用户：
          </p>
          <ul>
            <li>未安装该应用（在下一次安装时会提供 14 天试用期）</li>
            <li>
              已安装该应用（颁发一个“试用 License”，直接提供 14 天试用期）
            </li>
          </ul>
          <p>依据用户当前的状态，我们主要使用以下策略来使过渡期的体验更平滑：</p>
          <ProjectImage
            src="/P/4-1.png"
            size="small"
          />
          <p>
            <b>邮件通知</b>
            <br />
            我们会通过邮件告知用户这些变化具体的生效日期，以及存量数据的处理方式。为了提供更好的用户体验，我们使用了
            Mailchimp 内的{" "}
            <a
              href="https://mailchimp.com/help/use-timewarp/"
              target="_blank"
              rel="noopener noreferrer"
              title="Mailchimp 的官方文档"
            >
              Timewarp
            </a>{" "}
            功能，将邮件的发送时间设定在用户当地时间的早上 9 点。
          </p>
          <p>
            <b>安装应用前的提示</b>
            <br />
            用户下一次尝试安装该应用时会出现试用期相关的提示，并需要勾选同意我们的条款和策略方可进入为期 14 天的试用期（同时颁发试用许可）。而由于应用可以被安装或被卸载，所以我对有试用许可但未安装应用情况下的弹窗做了差异化。
          </p>
          <section className={`${styles.container} w-full flex md:flex-row flex-col gap-2 sm:gap-4 rounded-lg`}>
          <section><ProjectImage
            src="/P/4-2.png"
            size="small"
          >初次试用（颁发试用许可）</ProjectImage></section>
          <section><ProjectImage
            src="/P/4-3.png"
            size="small"
          >卸载后重新安装（不涉及应用许可变更）</ProjectImage></section>
          </section>
          <p>
            <b>系统常驻试用结束提示</b>
            <br />
            在应用过期后，应用的部份功能会受到限制，所以在应用即将过期时，系统需要有一个试用期即将结束的提示，告知用户需及时付费，避免服务中断而导致损失。
          </p>
          <p>
            期间尝试了多种布局样式和交互形式。最终综合各方面因素（用户体验连贯性、用户习惯、交互成本和开发成本等）选取了顶部常驻的形式。
          </p>
          <ProjectImage
            src="/P/4-4.png"
          />
          <p>
            在实践中观察到这种提示与页面渲染完成时间并不同步——即先完成页面大体的框架和布局渲染后，再根据条件判断是否出现试用结束提示——所以有可能出现
            <a
              href="https://web.dev/articles/cls"
              target="_blank"
            >
              布局偏移
            </a>
            的现象。为了避免此现象，我设计了一个简单的出现动画。
          </p>
          
          <section className={`${styles.container} w-full flex md:flex-row flex-col gap-2 sm:gap-4 rounded-lg`}>
          <section><ProjectImage src="/P/4-5.mp4" type="video" size="small">
            布局偏移可能会影响用户操作
          </ProjectImage></section>
          <section><ProjectImage src="/P/4-6.mp4" type="video" size="small">
            加入出现动画（这个策略在{" "}
            <a href="1" target="_blank">
              Aftership
            </a>{" "}
            里也出现过）
          </ProjectImage></section>
          </section>
          <h2>高效便捷的支付流程</h2>
          <p>
            在订阅和续费的过程中会涉及到支付流程。为了更好地达到商业化目标，我们在支付流程中做了个性化推荐，根据用户的历史行为来展示推荐内容。
          </p>
          <p>
            <b>存在其他可订阅应用</b>
            <br />
            在 ONES 系统里，同一类型应用是通常是可以联动使用的，比如：
          </p>
          <ul>
            <li>DevOps 相关应用：Pipeline（流水线）、 Code Integration（代码集成）和 Bitbucket 连接器；</li>
            <li>知识库协同相关应用：Wiki（文档）和 Xmind（思维导图）。</li>
          </ul>
          <p>所以如果当前用户帐号内有其他可订阅应用，我们会在结算之前——即支付页面（或者叫购物车页面）——提供一个应用列表给用户选购。</p>
          <ProjectImage
            src="/P/4-7.png"
            size="small"
          >在支付流程加入可选购的应用列表</ProjectImage>
          <p>
            同时我们也对列表顺序进行了设计，根据用户当前选择续费的应用，优先展示与该应用相关的其他应用。
          </p>
          <ProjectImage
            src="/P/4-8.png"
            size="small"
          >可根据用户当前选择续费的应用而改变顺序的列表</ProjectImage>
          <p>
            <b>仅剩下该应用没有订阅</b>
            <br />
            如果当前用户帐号内已经没有其他可订阅应用了（可能是正在订阅中，或者手动取消订阅等多种原因形成），那么将直接进入结算页走结算流程。
          </p>
          <ProjectImage src="/P/4-9.png" size="small" />
          <h2 id="4">系统思维</h2>
          <p>
            接下来的这一部份不涉及到设计图，主要是分享一些我在处理这种涉及多角色业务的流程设计时的思考方式以及锻炼到的能力。
          </p>
          <p>
            在最初了解到这个需求的时候，我发现这里面涉及到挺多设计考量因素的，如下图所示：
          </p>
          <ProjectImage src="/P/5-1.png" />
          <p>
            因为流程和变量实在太多，在做这种类型的设计时已经不能依赖于界面或 PRD
            里面的线框图进行设计了。
          </p>
          <p>
            所以我做了改变，从关注界面上的操作步骤，转为从状态变更反推出具体的操作路径。举两个例子：
          </p>
          <section className={`${styles.container} w-full flex md:flex-row flex-col gap-2 sm:gap-4 rounded-lg`}>
            <section className="flex-1 p-4 sm:p-6 md:p-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 transition-colors">
              <b>例子一</b>
              <p>比如当前应用的许可属于 “未发放”，那么只能通过操作变成 “试用（生效中）” 或者 “付费（生效中）” 。此时我会反推出在我们的系统中：</p>
              <ul>
                <li>这两种过程中能通过什么操作路径实现；</li>
                <li>这些操作路径有哪些异同；</li>
                <li>过程中会有哪些权限要求；</li>
                <li>不同的系统版本是否有影响；</li>
                <li>...</li>
              </ul>
            </section>
            <section className="flex-1 p-4 sm:p-6 md:p-8 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 transition-colors">
              <b>例子二</b>
              <p>比如当前应用属于 “未安装” 的状态，那么他只能变成 “已安装”。我就会反推出在我们的系统中：</p>
              <ul>
                <li>这过程中能通过什么操作路径实现；</li>
                <li>应用当前的许可状态对该操作的影响；</li>
                <li>用户的权限对该操作的影响；</li>
                <li>不同的系统版本是否有影响；</li>
                <li>...</li>
              </ul>
            </section>
          </section>
          <p>
            这种做法对比起以往的基于页面，或者 PRD
            里面的线框图进行设计有着显著的优势。通过这种的方式去思考和实践，能够帮助我们：
          </p>
          <p>
            <b>1. 提高设计方案的完整度：</b>
            <br />
            考虑整个系统和所有可能的状态转换，不仅更容易找到业务流程中一些遗漏的场景，还能确保设计在不同情况下都是合理和有效的。
          </p>
          <p>
            <b>2. 能更容易地找到设计机会点：</b>
            <br />
            能够从更高层次和更宏观的视角看待问题，从而提出更有效的解决方案。
          </p>
          <p>
            <b>3. 促进跨团队沟通</b>
            <br />
            在实际工作中，并不是所有协作成员都像设计师一样在关注布局和样式的。这种从系统出发的思维可以帮助不同背景的团队成员更好地理解和讨论设计方案。
          </p>
          <p>
            所以——回到具体的表现——培养起这种系统思维的能力之后，我的设计方案会比以往有些不同：增加了各个流程对状态转换的描述，以及适当地使用
            “状态机”。
          </p>
          <section className={`${styles.container} w-full flex md:flex-row flex-col gap-2 sm:gap-4 rounded-lg`}>
          <section><ProjectImage
            src="/P/5-2.png"
            size="small"
          >流程中对状态变更的描述</ProjectImage></section>
          <section><ProjectImage
            src="/P/5-3.png"
            size="small"
          >流程中对状态变更的描述</ProjectImage></section>
          <section><ProjectImage
            src="/P/5-4.png"
            size="small"
          >状态机图示</ProjectImage></section>
          </section>
          <h2 id="5">项目收获</h2>
          <p>在支持应用付费的过程中，我的主要收获包括：</p>
          <ul>
            <li>
              学会从新角度审视设计方案，超越以往仅针对单一角色的设计思维；
            </li>
            <li>
              像往常一样，在流程中寻找机会点，帮助达到业务目标和体现设计价值；
            </li>
            <li>
              更深入地理解业务变化对系统的全面影响，不再局限于界面和样式，而是整体用户体验和业务目标的结合。
            </li>
          </ul>
        </section>
        <ProjectFooter />
      </div>
    </>
  );
}
