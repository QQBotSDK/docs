import { defineConfig } from "vitepress";
import { en } from "./locale/en";
import { zh } from "./locale/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: "https://docs.bot.ssyapi.com"
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
  lastUpdated: true,
  base: "/",
  head: [
    [
      "link",
      {
        rel: "favicon",
        href: "/favicon.ico",
      },
    ],
  ],
  cleanUrls: true,
  locales: {
    root: {
      label: "简体中文",
      link: "/",
      ...zh,
    },
    en: {
      label: "English",
      link: "/en/",
      ...en,
    },
  },
});
