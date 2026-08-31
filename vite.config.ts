import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

const githubBasePath = "/clinica.robertobotelho";

export default defineConfig({
  nitro: isLovableSandbox ? undefined : false,

  vite: {
    base: isLovableSandbox ? "/" : `${githubBasePath}/`,
  },

  tanstackStart: isLovableSandbox
    ? {
        server: {
          entry: "server",
        },
      }
    : {
        router: {
          basepath: githubBasePath,
        },

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
