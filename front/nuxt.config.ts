// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/devtools', '@formkit/nuxt', '@nuxt/image-edge', '@nuxtjs/strapi', 'nuxt-icon', '@vueuse/nuxt',
    ],
    strapi: {
        devtools: true,
        url: 'http://127.0.0.1:1337'
    },
    runtimeConfig:{
        public:{
            baseURL:"http://127.0.0.1:1337/api"
        }
    },
    googleFonts: {
        families: {
            'Roboto+Mono': true,
        }
    },
    devtools: {
        enabled: true,
    },
})
