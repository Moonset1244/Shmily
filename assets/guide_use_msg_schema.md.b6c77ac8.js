import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.44ff8bb5.js";const F=JSON.parse('{"title":"数据文件-Msg","description":"","frontmatter":{},"headers":[],"relativePath":"guide/use/msg/schema.md","filePath":"guide/use/msg/schema.md","lastUpdated":1693818631000}'),p={name:"guide/use/msg/schema.md"},o=l(`<h1 id="数据文件-msg" tabindex="-1">数据文件-Msg <a class="header-anchor" href="#数据文件-msg" aria-label="Permalink to &quot;数据文件-Msg&quot;">​</a></h1><p>为了 <a href="./../get.html">Get</a> 和 <a href="./../show.html">Show</a> 的良好沟通, 所以需要标准化数据格式</p><p>建议开发 <a href="./../get.html">Get</a> 时按以下数据标准导出.</p><ul><li>可导尽导，为以后的历史留下余量。冗余数据在 Show 中再选择性删除</li></ul><blockquote><p>v2.0</p></blockquote><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">⬇⬇⬇⬇⬇⬇</span><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">通用字段</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">⬇⬇⬇⬇⬇⬇⬇</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;source&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;MobileQQ&quot;</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 数据来源</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;device&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;OnePlus 3T&quot;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 设备名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;自定义表情&quot;</span><span style="color:#E1E4E8;">,     </span><span style="color:#6A737D;">// 消息类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;direction&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;come&quot;</span><span style="color:#E1E4E8;">,     </span><span style="color:#6A737D;">// (以自己为基准的)发送方向  go 代表自己发出,在右边   come 代表对方发出,在左边</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;sender&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1111111111&quot;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 发送方号码  direction=go 为自己 direction=come 为对方</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;senderName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;fish&quot;</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 发送方名称  direction=go 为对方 direction=come 为自己</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;receiver&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;00000000&quot;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 接受发号码</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;receiverName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;null&quot;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 接收方名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;day&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2017-12-22&quot;</span><span style="color:#E1E4E8;">,     </span><span style="color:#6A737D;">// 发送日期 由 ms 计算得出, 仅为降低运行时计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;time&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;08:53:33&quot;</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 发送时间 由 ms 计算得出, 仅为降低运行时计算</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ms&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1513904013000</span><span style="color:#E1E4E8;">,     </span><span style="color:#6A737D;">// 发送时间戳 精确到 ms, 时间以 ms 字段为准,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;[甜橙少女新年系列-吃饺子]&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 内容纯文本, 用于 搜索 及 数据分析 , 因此可以和 html 字段不一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;html&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;[甜橙少女新年系列-吃饺子]&quot;</span><span style="color:#E1E4E8;">,    </span><span style="color:#6A737D;">// 内容HTML富文本. 用于展示. 简单的内容可以直接用 html 在 Show 中表示,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                          </span><span style="color:#6A737D;">// 如果内容复杂, 建议在 Show 中使用组件读取 $Source.data 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">                                          </span><span style="color:#6A737D;">// 参与生成 ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">⬇⬇⬇⬇⬇⬇</span><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">补充字段</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">⬇⬇⬇⬇⬇⬇⬇</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如数据复杂, 可以放在补充数据中</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 字段名约定使用  $source, 如本例 source=&#39;MobileQQ&#39;, 此字段名则为 $MobileQQ  (本来想统一成 $Extend, 但是太多项目耦合broken, 没法改了)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;$MobileQQ&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// !!! 必须 !!! 细分类型, 如 Android 和 IOS 可能数据不一致, Show 通过此字段进行区分表达</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;os&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Android&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">// 特殊类型标识</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;_混合消息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 数据库原始数据导出</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 保留所有相关的数据,不要进行删减, 给他人留下&#39;其他&#39;可能性</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 也给完整解密留下空间</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 导出时不差这么点空间</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;raw&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;msgData&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Buffer&quot;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 解密过程中有帮助的值或备注</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;123123&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;offset&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 最终数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;res&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;msgData&quot;</span><span style="color:#E1E4E8;">:{} </span><span style="color:#6A737D;">// 相应解密字段</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;$msgDataLength&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 过程中人为新增的数据使用 $ 开头</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 前端展示需要的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 简单的数据可以直接写 html 字段</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 复杂的如 微信分享卡片 建议在 Show 中写好组件, 然后读取下面数据填充</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;webUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./emoticon/甜橙少女新年系列/5e671f8149d1b094c44aa0f5232f9cfd.gif&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;packName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;甜橙少女新年系列&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;吃饺子&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;mark&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;过年喽，想要的祝福全在这里&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//  资源文件 根文件夹   资源路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//  /data/  $rootPath  ./emoticon/5e671f8149d1b094c44aa0f5232f9cfd.gif</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 建议加上时间，便于和以后导出的数据合并</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;rootPath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">\`qq-android-lqzh</span><span style="color:#79B8FF;">-20230101</span><span style="color:#FDAEB7;font-style:italic;">\`</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 开发过程相关值,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 此处赋值可以随意, 在 Show 的预处理中 $Dev 将被删除</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;$Dev&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">msAccuracy</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 如 QQ-PC 时间无法精确到 ms ,不能去重时当 ID 使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">numberIsTrue:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 我借同学号码发的短信, 虽然不是我的号码, 但我确定此条消息不被过滤</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">⬇⬇⬇⬇⬇⬇</span><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">自动生成字段</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">⬇⬇⬇⬇⬇⬇⬇</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ID 需确保每条消息的唯一性</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Show 里的评论和修改都依靠ID才能定位消息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ID 结构由  $filename_YYYY-MM-DD_HH-mm-ss_$direction_$md5_$num 组成</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 1. $filename 为当前消息所在的文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 消息的 $day_$time</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 3. 消息的 $direction g(o) 或者 c(ome)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 4. html字段的 MD5值前 6 位</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 5. 重复消息的出现次数 (同一个人同一时间发送同样内容刷屏时,1-4并不能保证ID唯一, 所以$num值用来标记前4个拼接相同情况下的第几条 )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 使用下划线拼接以上, 组成了当前消息的 ID</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;camera.json_2009-09-25_10-33-02_g_11e351_1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 所有消息合并后, 按时间线排序第几条消息</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;index&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">123</span></span>
<span class="line"><span style="color:#E1E4E8;">}]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">⬇⬇⬇⬇⬇⬇</span><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">通用字段</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">⬇⬇⬇⬇⬇⬇⬇</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;source&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;MobileQQ&quot;</span><span style="color:#24292E;">,    </span><span style="color:#6A737D;">// 数据来源</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;device&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;OnePlus 3T&quot;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 设备名称</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;自定义表情&quot;</span><span style="color:#24292E;">,     </span><span style="color:#6A737D;">// 消息类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;direction&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;come&quot;</span><span style="color:#24292E;">,     </span><span style="color:#6A737D;">// (以自己为基准的)发送方向  go 代表自己发出,在右边   come 代表对方发出,在左边</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;sender&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1111111111&quot;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 发送方号码  direction=go 为自己 direction=come 为对方</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;senderName&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;fish&quot;</span><span style="color:#24292E;">,    </span><span style="color:#6A737D;">// 发送方名称  direction=go 为对方 direction=come 为自己</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;receiver&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;00000000&quot;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 接受发号码</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;receiverName&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;null&quot;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 接收方名称</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;day&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2017-12-22&quot;</span><span style="color:#24292E;">,     </span><span style="color:#6A737D;">// 发送日期 由 ms 计算得出, 仅为降低运行时计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;time&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;08:53:33&quot;</span><span style="color:#24292E;">,      </span><span style="color:#6A737D;">// 发送时间 由 ms 计算得出, 仅为降低运行时计算</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ms&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1513904013000</span><span style="color:#24292E;">,     </span><span style="color:#6A737D;">// 发送时间戳 精确到 ms, 时间以 ms 字段为准,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;content&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[甜橙少女新年系列-吃饺子]&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 内容纯文本, 用于 搜索 及 数据分析 , 因此可以和 html 字段不一致</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;html&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;[甜橙少女新年系列-吃饺子]&quot;</span><span style="color:#24292E;">,    </span><span style="color:#6A737D;">// 内容HTML富文本. 用于展示. 简单的内容可以直接用 html 在 Show 中表示,</span></span>
<span class="line"><span style="color:#24292E;">                                          </span><span style="color:#6A737D;">// 如果内容复杂, 建议在 Show 中使用组件读取 $Source.data 数据</span></span>
<span class="line"><span style="color:#24292E;">                                          </span><span style="color:#6A737D;">// 参与生成 ID</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">⬇⬇⬇⬇⬇⬇</span><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">补充字段</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">⬇⬇⬇⬇⬇⬇⬇</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如数据复杂, 可以放在补充数据中</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 字段名约定使用  $source, 如本例 source=&#39;MobileQQ&#39;, 此字段名则为 $MobileQQ  (本来想统一成 $Extend, 但是太多项目耦合broken, 没法改了)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;$MobileQQ&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// !!! 必须 !!! 细分类型, 如 Android 和 IOS 可能数据不一致, Show 通过此字段进行区分表达</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;os&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Android&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">// 特殊类型标识</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;_混合消息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 数据库原始数据导出</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 保留所有相关的数据,不要进行删减, 给他人留下&#39;其他&#39;可能性</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 也给完整解密留下空间</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 导出时不差这么点空间</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;raw&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;msgData&quot;</span><span style="color:#24292E;">: {</span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Buffer&quot;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 解密过程中有帮助的值或备注</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;123123&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;offset&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 最终数据</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;res&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;msgData&quot;</span><span style="color:#24292E;">:{} </span><span style="color:#6A737D;">// 相应解密字段</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;$msgDataLength&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 过程中人为新增的数据使用 $ 开头</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 前端展示需要的数据</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 简单的数据可以直接写 html 字段</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 复杂的如 微信分享卡片 建议在 Show 中写好组件, 然后读取下面数据填充</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;webUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./emoticon/甜橙少女新年系列/5e671f8149d1b094c44aa0f5232f9cfd.gif&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;packName&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;甜橙少女新年系列&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;吃饺子&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;mark&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;过年喽，想要的祝福全在这里&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//  资源文件 根文件夹   资源路径</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//  /data/  $rootPath  ./emoticon/5e671f8149d1b094c44aa0f5232f9cfd.gif</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 建议加上时间，便于和以后导出的数据合并</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;rootPath&quot;</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">\`qq-android-lqzh</span><span style="color:#005CC5;">-20230101</span><span style="color:#B31D28;font-style:italic;">\`</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 开发过程相关值,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 此处赋值可以随意, 在 Show 的预处理中 $Dev 将被删除</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;$Dev&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">msAccuracy</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 如 QQ-PC 时间无法精确到 ms ,不能去重时当 ID 使用</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">numberIsTrue:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 我借同学号码发的短信, 虽然不是我的号码, 但我确定此条消息不被过滤</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">⬇⬇⬇⬇⬇⬇</span><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">自动生成字段</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">⬇⬇⬇⬇⬇⬇⬇</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ID 需确保每条消息的唯一性</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Show 里的评论和修改都依靠ID才能定位消息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ID 结构由  $filename_YYYY-MM-DD_HH-mm-ss_$direction_$md5_$num 组成</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 1. $filename 为当前消息所在的文件名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 消息的 $day_$time</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 3. 消息的 $direction g(o) 或者 c(ome)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 4. html字段的 MD5值前 6 位</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 5. 重复消息的出现次数 (同一个人同一时间发送同样内容刷屏时,1-4并不能保证ID唯一, 所以$num值用来标记前4个拼接相同情况下的第几条 )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 使用下划线拼接以上, 组成了当前消息的 ID</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;camera.json_2009-09-25_10-33-02_g_11e351_1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 所有消息合并后, 按时间线排序第几条消息</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;index&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">123</span></span>
<span class="line"><span style="color:#24292E;">}]</span></span></code></pre></div><p><s>因为项目持续了近 3 年, 所以我写的很多早期 <a href="./../get.html">Get</a> 并未遵循以上标准, 我会慢慢重构的.</s></p>`,7),t=[o];function e(c,r,E,y,i,u){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{F as __pageData,D as default};
