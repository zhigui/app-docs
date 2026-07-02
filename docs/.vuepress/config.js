import { path } from '@vuepress/utils'
import { defaultTheme } from 'vuepress'

module.exports = {
  title: 'App Documents',
  base: '/app-docs/',
  theme: defaultTheme({
    navbar: [],
    lastUpdated: false,
    contributors: false
  }),
  alias: {
    '@theme/NavbarBrand.vue': path.resolve(
      __dirname,
      './components/NavbarBrand.vue'
    ),
    '@theme/NavbarItems.vue': path.resolve(
      __dirname,
      './components/NavbarItems.vue'
    )
  }
}
