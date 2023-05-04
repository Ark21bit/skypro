// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/devtools', '@formkit/nuxt', '@nuxt/image-edge',
    ],
    googleFonts: {
        families: {
            Oswald: true,
        }
    },
})
