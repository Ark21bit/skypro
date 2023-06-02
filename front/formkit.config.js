// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import genesis from '@formkit/themes/tailwindcss/genesis'
import { createFloatingLabelsPlugin } from '@formkit/addons'

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(genesis),
  },
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true, 
    }),
  ],
}