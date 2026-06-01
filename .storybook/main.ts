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
    // Vite 8 (Rolldown) dev optimizer must pre-bundle React's CJS entry so the
    // `default` export interop is synthesized — otherwise the dev server throws
    // "react ... does not provide an export named 'default'".
    cfg.optimizeDeps = cfg.optimizeDeps ?? {}
    cfg.optimizeDeps.include = [
      ...(cfg.optimizeDeps.include ?? []),
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ]
    return cfg
  },
}

export default config
