import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url)

const zh_CN = defineConfig({
  lang: "zh-Hans",
  title: "PHPQQBot 框架",
  description: "基于 QQ开放平台API 实现的机器人框架",
  themeConfig: {
    footer: {
      message: "赣ICP备19012475号",
      copyright: "Copyright © 2024-present CoolPlayLin & Contributors",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/QQBotSDK/Docs" },
    ],
  },
});

export default zh_CN;
