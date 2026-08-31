import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig({
  nitro: isLovableSandbox
    ? undefined
    : {
        preset: "node-server",
      },

  vite: {
    base: isLovableSandbox ? "/" : "/site2/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    ...(isLovableSandbox
      ? {}
      : {
          prerender: {
            enabled: true,
            autoSubfolderIndex: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: true,
          },

          pages: [
            {
              path: "/",
            },
          ],
        }),
  },
});
