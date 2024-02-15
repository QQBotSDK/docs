import { defineConfig } from "vitepress";
import zh from "./locales/zh";
import en from "./locales/en";

export default defineConfig({
  locales: {
    root: {
      label: "简体中文",
      ...zh,
    },
    en: {
      label: "English",
      ...en,
    },
  },
});
