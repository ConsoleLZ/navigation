// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    app: {
        head: {
            link: [{rel: 'stylesheet', href: '/css/index.css'},{rel: 'stylesheet', href: ''}],
        }
    },
    vite: {
        build:{
            emptyOutDir:false
        }
    }
})
