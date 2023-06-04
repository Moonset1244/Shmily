import{_ as e,o as a,c as l,O as t}from"./chunks/framework.1a8457a3.js";const o="/Shmily/assets/down_repo.b4697182.png",r="/Shmily/assets/what-languages.f969dab5.png",b=JSON.parse('{"title":"Get","description":"","frontmatter":{},"headers":[],"relativePath":"guide/use/get.md","filePath":"guide/use/get.md","lastUpdated":1685844146000}'),i={name:"guide/use/get.md"},h=t('<h1 id="get" tabindex="-1">Get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;Get&quot;">​</a></h1><p>执行相应的 Get 项目, 可以在输出目录（一般是 <code>dist</code>）获得</p><ul><li><p><code>数据文件</code> ***.json</p><p><a href="./msg/schema.html">Shmily-Msg</a> 格式的 JSON 文件，内容是从数据(库)导出的消息内容。</p><ul><li>尽量导出消息相关的所有数据而非所需数据, 这样会给其他人带来帮助, 也便于丰富更多信息</li><li>尽量补充完整信息, 如 自定义表情, 补充 表情包名称 与 描述, 对于统计来说更准确全面</li></ul></li><li><p><code>资源文件</code> /data/xxx</p><p>消息相关的静态资源文件,如图片、表情、视频等</p><ul><li>对于外链的资源，建议能爬下来的资源(如图片)都本地化, 过个几年这些 URL 都打不开了</li></ul></li></ul><h2 id="支持列表" tabindex="-1">支持列表 <a class="header-anchor" href="#支持列表" aria-label="Permalink to &quot;支持列表&quot;">​</a></h2><p>下面列出现有已知的 Get 项目, 更多项目可在 <code>Github</code> 搜索 <a href="https://github.com/search?q=Shmily-Get-&amp;type=repositories" target="_blank" rel="noreferrer"><code>Shmily-Get-</code></a></p><ul><li><p><code>QQ</code> QQ 电脑版</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-QQ-PC_MHT" target="_blank" rel="noreferrer">mht 格式聊天记录</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-QQ-PC_Clipboard" target="_blank" rel="noreferrer">通过剪贴板导出</a></li></ul></li><li><p><code>MobileQQ</code> QQ 手机版</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-MobileQQ-Andriod" target="_blank" rel="noreferrer">Andriod</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-MobileQQ-S60v3" target="_blank" rel="noreferrer">Nokia Symbian S60v3</a></li></ul></li><li><p><code>Wechat</code> 微信</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Wechat" target="_blank" rel="noreferrer">Android</a></li></ul></li><li><p><code>SMS</code> <code>CallLog</code> 短信与通话记录</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-Android" target="_blank" rel="noreferrer">Android</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-calendar_google_com" target="_blank" rel="noreferrer">GoogleCalendar</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-ic_qq_com" target="_blank" rel="noreferrer">QQ 同步助手</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-S60v3_MMS" target="_blank" rel="noreferrer">Nokia Symbian S60v3 彩信</a></li><li><a href="https://github.com/lqzhgood/Shmily-Get-Call_SMS-S60v3_SMS" target="_blank" rel="noreferrer">Nokia Symbian S60v3 短信</a></li></ul></li><li><p><code>Camera</code> 照片与视频</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Camera" target="_blank" rel="noreferrer">照片与视频</a></li></ul></li><li><p><code>EMAIL</code> 电子邮件</p><ul><li><a href="https://github.com/lqzhgood/Shmily-Get-Email" target="_blank" rel="noreferrer">电子邮件</a></li></ul></li></ul><h2 id="如何启动项目" tabindex="-1">如何启动项目 <a class="header-anchor" href="#如何启动项目" aria-label="Permalink to &quot;如何启动项目&quot;">​</a></h2><p>项目中可能并不会 <strong>明确</strong> 说明如何启动项目, 并且大部分项目并不会打包为开箱即用的 <code>&quot;exe&quot;</code>.</p><p>如果您非程序员, 下面将简单讲解 <strong>常见</strong> 启动方式</p><h3 id="_1-下载项目" tabindex="-1">1. 下载项目 <a class="header-anchor" href="#_1-下载项目" aria-label="Permalink to &quot;1. 下载项目&quot;">​</a></h3><p>Github 为例, 点击下图中 <code>Download ZIP</code> 即可下载当前项目源码 <img src="'+o+'" alt="down repo"></p><h3 id="_2-安装项目运行时环境" tabindex="-1">2. 安装项目运行时环境 <a class="header-anchor" href="#_2-安装项目运行时环境" aria-label="Permalink to &quot;2. 安装项目运行时环境&quot;">​</a></h3><p>根据不同的项目语言安装不同的运行时环境, <code>Github</code> 会自动标注主要语言 <img src="'+r+'" alt="what-languages"></p><p>也可以按照下面列出的特性, 安装对应语言的运行时</p><ul><li><p><a href="./../setup-runtime/nodejs.html">nodejs</a> (项目中有 <code>package.json</code> 文件)</p></li><li><p><a href="./../setup-runtime/python.html">python</a> (大量 <code>.py</code> 后缀文件)</p></li><li><p><a href="./../setup-runtime/java.html">java</a> (大量 <code>.java</code> 后缀文件)</p></li></ul><h3 id="_3-根据项目说明执行程序" tabindex="-1">3. 根据项目说明执行程序 <a class="header-anchor" href="#_3-根据项目说明执行程序" aria-label="Permalink to &quot;3. 根据项目说明执行程序&quot;">​</a></h3><h3 id="_4-获取数据" tabindex="-1">4. 获取数据 <a class="header-anchor" href="#_4-获取数据" aria-label="Permalink to &quot;4. 获取数据&quot;">​</a></h3><pre><code>- 数据文件 `xxx.json`\n- 资源文件 `/data/xxx/**`\n</code></pre><h3 id="_5-展示" tabindex="-1">5. 展示 <a class="header-anchor" href="#_5-展示" aria-label="Permalink to &quot;5. 展示&quot;">​</a></h3><p><a href="./show.html">参考 Show 文档</a></p>',20),d=[h];function n(c,s,p,u,m,_){return a(),l("div",null,d)}const f=e(i,[["render",n]]);export{b as __pageData,f as default};
