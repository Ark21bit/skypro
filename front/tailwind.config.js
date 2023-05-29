import FormKitVariants from '@formkit/themes/tailwindcss'

export default {
  darkMode:'class',
  content:[
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs'
  ],
  theme: {
    fontFamily: {
        'RobotoMono': 'RobotoMono',
    }
  }, 
  plugins: [FormKitVariants],
}