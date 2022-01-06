module.exports = [
    { text: '首页', link: '/' },
    {
        text: 'Java',
        link: '/java/',
        items: [{
            text: 'Java-Se',
            items: [
                { text: 'Java基础', link: '/java/se/base/' },
            ]
        },
        {
            text: 'Java-Se进阶-多线程',
            items: [
                { text: '多线程', link: '/java/se/thread/' },
            ]
        },
        {
            text: 'Java-Se进阶-java8新特性',
            items: [
                { text: 'java8新特性', link: '/java/se/java8/' },
            ]
        },
        {
            text: 'Java-ee',
            items: [
                { text: 'JavaWeb', link: '/javaweb/' },
            ]
        },
        ]
    },
    {
        text: '数据库',
        items: [

            {
                text: 'SQL 数据库',
                items: [
                    { text: 'MySQL', link: '/mysql/' },

                ]
            },

            {
                text: 'NoSQL 数据库',
                items: [
                    { text: 'Redis', link: '/redis/' },
                    { text: 'ElasticSearch', link: '/es/' },
                    { text: 'MongoDB', link: '/mongodb/' },
                ]
            },
        ]
    },
    {
        text: '框架',
        items: [{
            text: '数据库',
            items: [
                { text: 'MyBatis', link: '/mybatis/study-note/' },
                { text: 'MyBatis-Plus', link: '/mybatis-plus/study-note/' },
            ]


        }, {
            text: 'Spring',
            items: [
                { text: 'Spring', link: '/Spring/study-note/' },
            ]
        },
        {
            text: 'SpringMVC',
            items: [
                { text: 'SpringMVC1', link: '/SpringMvc/study-note/1/' },
                { text: 'SpringMVC2', link: '/SpringMvc/study-note/2/' }
            ]
        },
        {
            text: '中间件',
            items: [
                { text: 'RabbitMQ', link: '/rabbitmq/' },
            ]
        }]
    },
    {
        text: '工具|部署',
        items: [
            { text: 'Git', link: '/git/' },
            { text: 'Linux', link: '/Linux/' }
            // { text: 'Docker', link: '/docker/' },
            // { text: 'Jenkins', link: '/jenkins/' },
        ]
    },
    { text: '开发问题', link: '/dev/question/' },
    { text: '设计模式', link: '/designPattern/' },
    { text: '关于', link: '/about/' },
    { text: '归档', link: '/archives/' }
]