import { defaultTheme } from 'vuepress'
module.exports = {
  title: 'App Documents',
  base: '/app-docs/',
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false
  })
}
