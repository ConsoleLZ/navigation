import {type roterModel} from '~/types/router'

export const routerConfig:roterModel[] = [
    {
        url: '/',
        name: '网站分享',
        icon: '/images/navbar/share.svg'
    },
    {
        url: '/github',
        name: '优秀项目',
        icon: '/images/navbar/github.svg'
    },
    {
        url: '/software',
        name: '软件下载',
        icon: '/images/navbar/software.svg'
    },
    {
        url: '/vscode',
        name: 'vscode插件',
        icon: '/images/navbar/vscode.svg'
    },
    {
        url: '/addon',
        name: '浏览器插件',
        icon: '/images/navbar/addon.svg'
    },
    {
        url: '/h5Games',
        name: 'h5小游戏',
        icon: '/images/navbar/games.svg'
    },
    {
        url: '/project',
        name: '我的项目',
        icon: '/images/navbar/project.svg'
    },
]