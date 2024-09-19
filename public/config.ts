import {type roterModel} from '~/types/router'

export const routerConfig:roterModel[] = [
    {
        url: '/',
        name: '网站分享',
        icon: '/images/navbar/share.svg'
    },
    {
        url: '/github',
        name: 'github爆火项目',
        icon: '/images/navbar/github.svg'
    },
    {
        url: '/software',
        name: '软件下载',
        icon: '/images/navbar/software.svg'
    },
    {
        url: '/vscode',
        name: 'vscode推荐插件',
        icon: '/images/navbar/vscode.svg'
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