import { fileURLToPath } from "node:url"
import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  framework: { name: "@storybook/react-vite", options: {} },
  viteFinal: async (cfg) => {
    // Don't let Vite's publicDir collide with our `-o public` output dir.
    cfg.publicDir = false
    cfg.plugins = [...(cfg.plugins ?? []), tailwindcss()]
    cfg.resolve = cfg.resolve ?? {}
    cfg.resolve.alias = {
      ...(cfg.resolve.alias ?? {}),
      "@": fileURLToPath(new URL("../registry/openteams", import.meta.url)),
    }
    return cfg
  },
}

export default config
