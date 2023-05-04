// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/devtools', '@formkit/nuxt', '@nuxt/image-edge', '@nuxtjs/strapi',
    ],
    strapi: {
        devtools: true,
        url: 'http://localhost:1337'
    },
    googleFonts: {
        families: {
            Oswald: true,
        }
    },
})
