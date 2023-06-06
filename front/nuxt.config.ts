// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:['@/assets/css/floatinglabels.css'],
    modules:[
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@nuxt/devtools',
      '@formkit/nuxt',
      '@nuxt/image-edge',
      '@nuxtjs/strapi',
      'nuxt-icon',
      '@vueuse/nuxt',
      '@vueuse/motion/nuxt',
      'nuxt-swiper',
    ],
    swiper: {      
        modules: [ 'autoplay' ]
    }, 
    strapi: {
        devtools: true,
        url: process.env.NODE_ENV === 'dev' ? "https://skynet-h2gp.onrender.com" : "http://127.0.0.1:1337"
    },
    googleFonts: {
        families: {
            'Inter': true,
        }
    },
    devtools: {
        enabled: true,
    }
})