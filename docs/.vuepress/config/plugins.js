//插件
module.exports = [
    //本地插件
    [require('../plugins/love-me'), { // 鼠标点击爱心特效
        color: '#11a8cd', // 爱心颜色，默认随机色
        excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    }],


    //回到顶部插件
    ['go-top'],

    //丝带插件
    // ['ribbon', {
    //     size: 90, // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1, // z-index property of the background, default: -1
    // }],

    //评论插件
    [
        'vuepress-plugin-comment-plus',
        {
            choosen: 'gitalk',
            options: {
                clientID: '47277731802090a63814',
                clientSecret: '20f5180fea5764c8fba30f717b0625bbfbb6e92e',
                repo: 'my-notes',
                owner: 'hnistzdk',
                admin: ['hnistzdk'],
                id: '<%- frontmatter.permalink %>',
                title: '「Comment」<%- frontmatter.title %>',
                distractionFreeMode: false,
                language: 'zh-CN',
            }
        }
    ],

    ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [ // 可选，默认 []
            {
                title: '在MDN中搜索',
                frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
            },
            {
                title: '在Bing中搜索',
                frontUrl: 'https://cn.bing.com/search?q='
            }
        ]
    }],


    //全文搜索插件
    ['fulltext-search'],



    // 'vuepress-plugin-baidu-autopush', // 百度自动推送

    ['one-click-copy', { // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
            // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
            // cssLib: ['http://xxx'], // 在线示例中的css依赖
            // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
            jsfiddle: false, // 是否显示 jsfiddle 链接
            codepen: true, // 是否显示 codepen 链接
            horizontal: false // 是否展示为横向样式
        }
    }],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)'
            },
        },
    ],

    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                const moment = require('moment') // https://momentjs.com/
                return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
            }
        }
    ],
    //收起代码块配置
    [{
        name: 'custom-plugins',
        globalUIComponents: ["BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }],
    //全局时间提示配置
    [{
        name: 'custom-plugins',
        globalUIComponents: ["GlobalTip"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }],

    //音乐插件
    // [
    //     'meting',
    //     {
    //         // 这个 API 是不可用的，只是作为示例而已
    //         // metingApi: 'https://music.163.com/#/playlist?id=936642760',
    //         meting: {
    //             // server: 'netease',
    //             // type: 'playlist',
    //             // mid: '936642760',
    //             // auto: 'https://music.163.com/#/playlist?id=5187647705'
    //             // order: 'random',
    //             auto: 'https://music.163.com/#/playlist?id=7392985838'
    //         },
    //         // 不配置该项的话不会出现全局播放器
    //         aplayer: {
    //             lrcType: 3,
    //         },
    //     },
    // ],
]