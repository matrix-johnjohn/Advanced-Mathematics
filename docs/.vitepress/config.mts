import { defineConfig } from 'vitepress';
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({
  markdown:{
    math:true
  },
  themeEnhance: {
    themeColor: {
      append: [
        {
          label: "TailWindCSS主题", // 主题组名称
          tip: "For the emporer", // 主题组提示信息，鼠标悬停时显示
          options: [
            { label: "紫罗兰", value: "violet", color: "#7166f0" },
            { label: "珊瑚粉", value: "coral-pink", color: "#ff6b6b" },
            { label: "天蓝", value: "sky-blue", color: "#00bbf9" },
            { label: "蓝绿", value: "blue-green", color: "#00f5d4" },
            { label: "石板灰", value: "slate-gray", color: "#708090" },
            { label: "粉红", value: "pink", color: "#f15bb5" },
            { label: "黄绿", value: "yellow-green", color: "#8ac926" },
            { label: "橙红", value: "orange-red", color: "#ff9e6b" },
          ],
        },
      ],
    },
  },
  teekTheme: true,
  teekHome: true,
  vpHome: false,
  loading: 'kimo被李奕洁强奸中......',
  homeCardListPosition: "left",
  anchorScroll: true,
  themeSize: "small",
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
  },
  toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
  },
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 500, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  sidebarTrigger: true,
  windowTransition: true,
  author: {
    name: "kimo", // 作者名称
    link: "https://github.com/matrix-johnjohn", // 点击作者名称后跳转的链接
  },
  banner: {
    enabled: true, // 是否启用 Banner
    name: "Kimo Blogger(offline)🎉", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d",
    imgSrc: [
      "https://raw.githubusercontent.com/matrix-johnjohn/kimo-docs/refs/heads/main/images/index/banner/banner01.jpg",
      "https://raw.githubusercontent.com/matrix-johnjohn/kimo-docs/refs/heads/main/images/index/banner/banner02.jpg",
      "https://raw.githubusercontent.com/matrix-johnjohn/kimo-docs/refs/heads/main/images/index/banner/banner04.png"
    ], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 5000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [
      "有时候你一定要清楚的知道自己要走到什么地方,只要你知道自己应该往哪里走,即便走错多少次路了也没有关系;",
      "有时候你不必找回曾经热血的你,只要还肯往前走就行"
    ], // 描述信息
    switchTime: 3000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 100, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },
  wallpaper: {
    enabled: true, // 是否启用壁纸模式
    hideBanner: true, // 开启壁纸模式后，是否隐藏 Banner
    hideMask: false, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
  },
  post: {
    postStyle: "card", // 文章列表风格
    excerptPosition: "bottom", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "full", // 文章封面图模式
    showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [
      "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/index/banner/banner01.jpg?raw=true",
    ],
  },
  page: {
    disabled: false, // 是否禁用
    pageSize: 20, // 每页显示条目数
    pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
    layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
    size: "default", // 分页大小
    background: false, // 是否为分页按钮添加背景色
    hideOnSinglePage: false, // 只有一页时是否隐藏
  },
  homeCardSort: ["topArticle", "category", "tag", "friendLink", "docAnalysis"],
  blogger: {
    name: "kimo", // 博主昵称
    slogan: "弱小和无知不是生存的最大阻碍,傲慢才是", // 博主签名
    avatar: "https://avatars.githubusercontent.com/u/192420957?v=4",
    shape: "circle", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "https://raw.githubusercontent.com/matrix-johnjohn/kimo-docs/refs/heads/main/images/cover/c/13.png", // 背景图片
    circleBgMask: false, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 80, // 头像大小
    color: "rgb(233, 233, 233)", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "", // 状态图标
      size: 24, // 图标大小
      title: "困", // 鼠标悬停图标的提示语
    },
  },
  topArticle: {
    enabled: false, // 是否启用精选文章卡片
    emptyLabel: "暂无精选文章", // 精选文章为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
  },
  category: {
    enabled: true, // 是否启用分类卡片
    path: "/categories", // 分类页访问地址
    moreLabel: "更多 ...", // 查看更多分类标签
    emptyLabel: "暂无文章分类", // 分类为空时的标签
    limit: 5, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  tag: {
    enabled: true, // 是否启用标签卡片
    path: "/tags", // 标签页访问地址
    moreLabel: "更多 ...", //  查看更多分类标签
    emptyLabel: "暂无标签", // 标签为空时的标签
    limit: 21, // 一页显示的数量
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    list: [
      {
        name: "alioth",
        desc: "deeper-alioth",
        avatar: "https://dipper-alioth.github.io/docs/avatar.png",
        link: "https://dipper-alioth.github.io/docs/",
      },
    ], // 友情链接数据列表
    emptyLabel: "暂无友情链接", // 友情链接为空时的标签
    limit: 5, // 一页显示的数量
    autoScroll: false, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  docAnalysis: {
    overrideInfo: [
      {
        key: "totalPosts",
        label: "文章数量"
      },
      {
        key: "lastActiveTime",
        show: true
      }
    ],
  },
  footerInfo: {
    // 主题版权配置
    theme: {
      show: false, // 是否显示主题版权，建议显示
      name: "", // 自定义名称
      link: "", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: false, // 是否显示博客版权
      createYear: 2025, // 创建年份
      suffix: "天客 Blog", // 后缀
    },
    // ICP 备案信息配置
    icpRecord: {
      name: "港 ICPC 备2029009994号",
      link: "http://beian.miit.gov.cn/",
    },
    // 网络安全备案信息配置
    securityRecord: {
      name: "星环联合开发",
      link: "Copyright©2023-2025 陕西哲风云网络科技工作室",
    },
  }
});

export default defineConfig({
  markdown:{
    math:true
  },
  base: '/kimo-blogger',
  extends: teekConfig,
  title: "Kimo Blogger",
  head:[
    ['link',{rel:'icon',href:'code.png'}]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    logo: "https://github.com/matrix-johnjohn/kimo-docs/blob/main/images/code.png?raw=true",
    nav: [
      {
        text: 'Blogger',
        items: [
          { text: '首页', link: '/' },
          { text: '登录', link: '/login' },
          { text: '归档', link: '/archives' },
          { text: '全部分类', link: '/categories' },
          { text: '全部标签', link: '/tags' }
        ]
      },
      {
        text: '英语',
        items: [
          { text: '词法', link: '/articles/english/pronoun/PersonalPronoun' },
        ]
      },
      {
        text:'数学',
        items:[
          {text:'高等数学',link:'/articles/math/function/base'}
        ]
      }
    ],

    sidebar: {
      '/articles/english/':[
        {
          text:'代词',
          items:[
            {text:'人称代词',link:'/articles/english/pronoun/PersonalPronoun'},
            {text:'物主代词',link:'/articles/english/pronoun/PossessivePronouns'},
            {text:'反身代词',link:'/articles/english/pronoun/ReflexivePronoun'},
            {text:'不定代词',link:'/articles/english/pronoun/IndefinitePronoun'},
            {text:'指示代词',link:'/articles/english/pronoun/DemonstrativePronoun'},
            {text:'疑问代词',link:'/articles/english/pronoun/InterrogativePronoun'},
            {text:'相互代词',link:'/articles/english/pronoun/ReciprocalPronoun'},
          ]
        },
        {
          text:'动词',
          items:[
            {text:'动词的形式',link:'/articles/english/verb/VerbForms'},
            {text:'实义动词',link:'/articles/english/verb/lexicalVerb'},
            {text:'连系动词',link:'/articles/english/verb/linkingVerb'},
            {text:'助动词',link:'/articles/english/verb/AuxiliaryVerb'},
            {text:'情态动词',link:'/articles/english/verb/ModalVerb'}
          ]
        },
        {
          text:'形容词',
          items:[
            {text:'形容词',link:'/articles/english/adjective/Adjective'},
            {text:'句法功能',link:'/articles/english/adjective/SyntacticFunction'}
          ]
        },
        {
          text:'副词',
          items:[
            {text:'副词的用法',link:'/articles/english/adverb/UsageOfAdverbs'},
            {text:'副词的句法',link:'/articles/english/adverb/SyntaxOfAdverbs'},
            {text:'比较级用法',link:'/articles/english/adverb/UsageOfComparatives'}
          ]
        },
        {
          text:'连词',
          items:[
            {text:'并列连词',link:'/articles/english/conjunction/CoordinatingConjunction'},
            {text:'从属连词',link:'/articles/english/conjunction/SubordinateConjunction'}
          ]
        },
        {
          text:'介词',
          items:[
            {text:'时间代词',link:'/articles/english/proposition/TimePrepositions'},
            {text:'地点介词',link:'/articles/english/proposition/PrepositionsOfPlace'},
            {text:'方位介词',link:'/articles/english/proposition/PlacePrepositions'},
            {text:'方式介词',link:'/articles/english/proposition/MethodPrepositions'},
            {text:'除去介词',link:'/articles/english/proposition/ExceptPrepositions'}
          ]
        },
        {
          text:'冠词',
          items:[
            {text:'不定冠词',link:'/articles/english/article/IndefiniteArticle'},
            {text:'定冠词',link:'/articles/english/article/DefiniteArticle'},
            {text:'零冠词',link:'/articles/english/article/ZerodefiniteArticle'}
          ]
        },
      ],
      '/articles/math/':[
        {
          text:'函数',
          items:[
            {text:'函数的基础',link:'/articles/math/function/base'},
            {text:'函数的性质',link:'/articles/math/function/nature'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/matrix-johnjohn' }
    ]
  }
})
