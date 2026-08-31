import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig({
  // No Lovable usa a configuração normal.
  // No GitHub Pages desativa o Nitro, pois não existe servidor.
  nitro: isLovableSandbox ? undefined : false,

  vite: {
    base: isLovableSandbox ? "/" : "/site2/",
  },

  tanstackStart: isLovableSandbox
    ? {
        server: {
          entry: "server",
        },
      }
    : {
        prerender: {
          enabled: true,
          crawlLinks: true,
        },

        pages: [
          {
            path: "/",
          },
        ],
      },
});
