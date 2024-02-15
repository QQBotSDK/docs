import { defineConfig } from 'vitepress'
import en from "./locale/en"
import zh from "./locale/zh"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      link: "/",
      ...zh,
    },
    en: {
      label: 'English',
      link: "/en/",
      ...en
    }
  }
})
