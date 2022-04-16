const plugins = require('./config/plugins.js');
const base = require('../../base.js');
const themeConfig = require('./config/themeConfig.js');


module.exports = {
    theme: 'vdoing', // 使用依赖包主题
    port: 8081, //端口

    plugins,
    themeConfig,
    base, //引入后缀

    title: "DK's Notes",
    description: '时不我待，舍我其谁', // 描述,以 <meta> 标签渲染到页面html中

    head: [
        ['link', {
            rel: 'icon',
            href: '/img/logo.jpg'
        }],
        ['link', {
            rel: 'stylesheet',
            href: '//at.alicdn.com/t/font_3334662_k54hl9700p.css'
        }],
        ['link', {
            rel: 'stylesheet',
            href: '//at.alicdn.com/t/font_3334662_k54hl9700p.css'
        }],

        ['link', {
            rel: 'stylesheet',
            href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css'
        }],

        //私密文章
        ['link', {
            rel: 'stylesheet',
            href: '//at.alicdn.com/t/font_3334691_b03dsaqrwck.css'
        }],
        ['meta', {
            name: 'keywords',
            content: 'Java'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#11a8cd'
        }], // 移动浏览器主题颜色
    ],
    markdown: {
        lineNumbers: true, // 代码行号
        //使目录支持h2~h6标题
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
    },

}