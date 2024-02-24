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
      copyright: "版权所有 © 2024 CoolPlayLin & Contributors",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "机器人云平台",
        link: "https://bot.ssyapi.com/",
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
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [{ icon: "github", link: "https://github.com/QQBotSDK/Docs" }],
  },
});

export default zh_CN;
