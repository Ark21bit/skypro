// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/devtools', '@formkit/nuxt', '@nuxt/image-edge', '@nuxtjs/strapi',
    ],
    strapi: {
        devtools: true,
        url: 'http://localhost:1337'
    },
    runtimeConfig:{
        public:{
            baseUrl:"https://skynet-h2gp.onrender.com/api"
        }
    },
    googleFonts: {
        families: {
            Oswald: true,
        }
    },
})
