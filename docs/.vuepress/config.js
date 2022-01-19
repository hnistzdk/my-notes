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
        ['link', { rel: 'icon', href: '/img/logo.jpg' }],
        ['meta', { name: 'keywords', content: 'Java' }],
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ],
    markdown: {
        lineNumbers: true // 代码行号
    },
}