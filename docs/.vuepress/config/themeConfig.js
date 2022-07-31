const nav = require('./themeConfig/nav.js');
const htmlModules = require('./themeConfig/htmlModules.js');

// 主题配置
module.exports = {
    nav, //导航栏
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.jpg', // 导航栏logo
    repo: 'hnistzdk/my-notes', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '最后更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '在 GitHub 上编辑此页',

    // 以下配置是Vdoing主题改动的和新增的配置
    category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],


    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
        showToArticle: false, // 显示到文章页底部，默认true
        // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
        name: 'zdk', // 必需
        href: 'https://zaiolos.top/' // 可选的
    },
    blogger: { // 博主信息，显示在首页侧边栏
        // avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
        avatar: '/img/logo.jpg',
        name: '风',
        slogan: '摸鱼'
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
        // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
        icons: [{
                iconClass: 'icon-youjian',
                title: '发邮件',
                link: 'mailto:369365576@qq.com'
            },
            {
                iconClass: 'icon-github',
                title: 'GitHub',
                link: 'https://github.com/hnistzdk'
            },
            {
                iconClass: 'icon-gitee',
                title: 'GitHub',
                link: 'https://gitee.com/hnistzdk'
            },
            {
                iconClass: 'icon-erji',
                title: '普通歌单',
                link: 'http://music.163.com/playlist?id=936642760&userid=604011130'
            },
        ]
    },
    footer: { // 页脚信息
        createYear: 2022, // 博客创建年份
        copyrightInfo: 'zdk | notes <br>' +
            '<a href=http://beian.miit.gov.cn/>湘ICP备2022001117号-1</a>' +
            '<br><img src=/img/ghs.png /><a href=http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51142102511562>川公网安备 51142102511562号</a>' +
            '<br><a href=https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referra><img src=/img/upyun.png align=absmiddle width=70px height=30px /></a> <span> 提供加速服务 </span>', // 博客版权信息， 支持a标签
    },

    indexImg: {
        navColor: 2, // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
        switchNavColor: true, // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
        // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
        bgTimeColor: true, // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
        //bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'], // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
        bgTimeColorArray: ['transparent', 'transparent', 'transparent', 'transparent'],
        descFade: true, // 是否开启图片中间描述的淡入效果，默认为 false
        desc: ["人生哪有多如意，万事只求半称心", "If not now,when?If not me,who?", "顶峰见"], // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
        descFontSize: '1.4rem', // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
        descFadeInTime: 200, // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
        descFadeOutTime: 100, // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
        descNextTime: 800, // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
        bubble: true, // 是否开启图片的气泡效果，默认为 false
        bubblePosition: 0, // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
        bubbleNum: 40, // 气泡的个数，bubble 为 true 生效，默认 200 个
    },
    // bodyBgImg: '/img/fantasy/bg.png', // 你的图片路径(必须位于 public 下)，可以是 URL
    bodyBgImg: '/img/road_rain_bridge.jpg', // 你的图片路径(必须位于 public 下)，可以是 URL
    //bodyBgImg: '/img/BACk.png', // 你的图片路径(必须位于 public 下)，可以是 URL
    bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5


    //htmlModules // 插入hmtl(广告)模块

}