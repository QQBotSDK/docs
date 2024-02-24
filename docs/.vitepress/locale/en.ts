import { createRequire } from "module";
import { defineConfig } from "vitepress";

const require = createRequire(import.meta.url);

const en_US = defineConfig({
  lang: "en-US",
  title: "PHP QQBot Framework",
  description: "QQbot framework based on Bot Development API",
  themeConfig: {
    footer: {
      message: "赣ICP备19012475号",
      copyright: "Copyright © 2024 CoolPlayLin & Contributors",
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

export default en_US;
