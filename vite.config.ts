import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig({
  nitro: isLovableSandbox ? undefined : false,

  vite: {
    base: isLovableSandbox ? "/" : "./",
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
