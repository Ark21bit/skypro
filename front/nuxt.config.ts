// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        url: 'http://127.0.0.1:1337'
    },
    runtimeConfig:{
        public:{
            baseURL: process.env.NODE_ENV === 'dev' ? "http://127.0.0.1:1337/api" : "https://skynet-h2gp.onrender.com/api",
            strapi: {
                url: process.env.NODE_ENV === 'dev' ? "http://127.0.0.1:1337" : "https://skynet-h2gp.onrender.com"
            },
        }
    },
    googleFonts: {
        families: {
            'Inter': true,
        }
    },
    devtools: {
        enabled: true,
    },
})