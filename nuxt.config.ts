export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
      head: {
          link: [{ rel: 'stylesheet', href: `/css/index.css` }, { rel: 'icon', type: "image/svg+xml", href: "/favicon.svg" }],
          meta: [{ name: "description", content: '关于前端,UI框架，设计，工具，AI，云平台，网络安全，其他' }],
          title: "小哲的导航网站",
      },
  },

  routeRules: {
      // 为了SEO目的，在构建时生成
      '/': { prerender: true },
  },

  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-10-20',
})