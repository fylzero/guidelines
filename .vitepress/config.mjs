import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Code Guide',
    description: 'Code style guidelines and codes of conduct.',
    themeConfig: {
        // nav: [
        //     { text: 'Home', link: '/' },
        //     { text: 'Examples', link: '/markdown-examples' },
        // ],
        search: {
            provider: 'local',
        },
        sidebar: [
            {
                text: 'Getting Started',
                collapsible: true,
                items: [
                    { text: 'Introduction', link: '/' },
                    { text: 'Getting Started / Contributing', link: '/getting-started' },
                    { text: 'Tooling', link: '/tooling' },
                ],
            },
            {
                text: 'Code of Conduct',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'Code Reviews', link: '/code-reviews' },
                    { text: 'Pull Requests', link: '/pull-requests' },
                    { text: 'Slack Channel', link: '/slack-channel' },
                ],
            },
            {
                text: 'PHP',
                collapsible: true,
                collapsed: true,
                items: [
                    { text: 'General', link: '/php-general' },
                    { text: 'Unit Tests', link: '/php-unit-tests' },
                    { text: 'Laravel', link: '/laravel-general' },
                ],
            },
            {
                text: 'JavaScript',
                collapsible: true,
                collapsed: true,
                items: [{ text: 'General', link: '/js-general' }],
            },
            {
                text: 'Vue',
                collapsible: true,
                collapsed: true,
                items: [{ text: 'General', link: '/vue-general' }],
            },
            {
                text: 'CSS',
                collapsible: true,
                collapsed: true,
                items: [{ text: 'General', link: '/css-general' }],
            },
            {
                text: 'Git',
                collapsible: true,
                collapsed: true,
                items: [{ text: 'General', link: '/git-general' }],
            },
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/fylzero/guidelines' }],
    },
});
