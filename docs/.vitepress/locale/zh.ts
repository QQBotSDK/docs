import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);

function apiSidebar(): DefaultTheme.SidebarItem[] {
  return readdirSync(resolve("docs", "api"))
    .filter((dir) => dir !== "api.md")
    .map((dir) => {
      return {
        text: dir.replace(".md", ""),
        link: dir,
      };
    });
}

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
      {
        text: "API 参考",
        link: "/api/Bot",
      },
    ],

    sidebar: {
      "/guide/": {
        base: "/guide/",
        items: [],
      },
      "/api/": {
        base: "/api/",
        items: [...apiSidebar()],
      },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/QQBotSDK/Docs" }],
  },
});

export default zh_CN;
