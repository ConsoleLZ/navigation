// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    app: {
        head: {
            link: [{rel: 'stylesheet', href: '/navigation/dist/css/index.css'},{rel: 'stylesheet', href: ''}],
        }
    },
})
