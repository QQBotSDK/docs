import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url);

export const en = defineConfig({
  lang: "en",
  title: "PHP QQBot Framework",
  description: "QQbot framework based on Bot Development API",
  themeConfig: {
    footer: {
      message: "蜀ICP备2023036015号-1",
      copyright: "Copyright © 2024 JSRCode, CoolPlayLin & Contributors",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "API References",
        link: "/en/api/Bot",
      },
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

    socialLinks: [{ icon: "github", link: "https://github.com/QQBotSDK/Docs" }],
  },
});
