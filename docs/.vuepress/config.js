module.exports = {
    title: '帮助文档',
    description: '帮助文档',
    base: '/online-resume/',
    themeConfig: {
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'Guide', link: '/guide/' },
        //     { text: 'External', link: 'https://google.com' },
        // ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ],
        lastUpdated: 'Last Updated',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        smoothScroll: true,
        search: false,
        navbar: false,
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/active-header-links']
}
