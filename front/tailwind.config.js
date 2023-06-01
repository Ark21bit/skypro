import FormKitVariants from '@formkit/themes/tailwindcss'

export default {
  darkMode:'class',
  content:[
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
  ],
  theme: {
    fontFamily: {
        'Inter': 'Inter',
    }
  }, 
  plugins: [FormKitVariants],
}