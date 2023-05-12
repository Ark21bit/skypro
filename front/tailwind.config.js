import FormKitVariants from '@formkit/themes/tailwindcss'

export default {
  content:[
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
  ],
  theme: {
    fontFamily: {
        'Oswald': 'Oswald',
    }
  }, 
  plugins: [FormKitVariants],
}