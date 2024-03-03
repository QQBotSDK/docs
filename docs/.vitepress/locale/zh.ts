import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const require = createRequire(import.meta.url);

// function apiSidebar(): DefaultTheme.SidebarItem[] {
//   return readdirSync(resolve("docs", "api"))
//     .filter((dir) => dir !== "api.md")
//     .map((dir) => {
//       return {
//         text: dir.replace(".md", ""),
//         link: dir,
//       };
//     });
// }

function apiSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础配置",
      collapsed: true,
      items: [
        {
          text: "关于",
          link: "about",
        },
        {
          text: "快速开始插件开发",
          link: "get-started",
        },
        {
          text: "订阅权限列表",
          link: "event-list",
        },
        {
          text: "什么是插件独立管理后台",
          link: "what-admin",
        },
        {
          text: "插件主体开发",
          link: "main-code",
        },
      ],
    },
  ];
}

function guideSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: true,
      items: [
        {
          text: "什么是 PHPQQBOT 框架 ?",
          link: "what-is-PHPQQBot",
        },
        {
          text: "快速开始",
          link: "get-started",
        },
        {
          text: "部署",
          link: "install",
        },
      ],
    },
    {
      text: "插件开发",
      link: "about",
      base: "/api/",
    },
  ];
}

export const zh = defineConfig({
  lang: "zh",
  title: "PHPQQBot 框架",
  description: "基于 QQ开放平台API 实现的机器人框架",
  themeConfig: {
    footer: {
      message: "蜀ICP备2023036015号-1",
      copyright: "版权所有 © 2024 JSRCode, CoolPlayLin & 贡献者",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "导航",
        link: "/guide/what-is-PHPQQBot",
        activeMatch: "^/guide/",
      },
      {
        text: "开发者文档",
        link: "/api/about",
        activeMatch: "^/api/",
      },
      {
        text: "更新日志",
        link: "/updatelog",
      },
      {
        text: "框架官网",
        link: "https://bot.ssyapi.com/",
      },
      {
        text: "机器人云平台",
        link: "https://cloud.bot.ssyapi.com/",
      },
    ],

    sidebar: {
      "/guide/": {
        base: "/guide/",
        items: [...guideSidebar()],
      },
      "/api/": {
        base: "/api/",
        items: [...apiSidebar()],
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    socialLinks: [{ icon: "github", link: "https://github.com/QQBotSDK/Docs" }],
  },
});
