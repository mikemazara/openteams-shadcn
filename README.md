# OpenTeams Component Registry

A private-to-our-team set of styled components, distributed the shadcn way: the
source lives here, your project copies it in via the official `shadcn` CLI. No
runtime dependency on this repo — you own the code once it's installed.

Base style: **new-york** (classic shadcn look) + the `@openteams/theme` tokens.

## For consumers (your team)

1. Make sure your app is a shadcn project (`npx shadcn@latest init` if not).

2. Register the namespace once (writes the mapping into your app's
   `components.json`):

   ```bash
   npx shadcn@latest registry add @openteams=https://mikemazara.github.io/openteams-shadcn/r/{name}.json
   ```

   This adds the following to `components.json` (you can also edit it by hand):

   ```json
   {
     "registries": {
       "@openteams": "https://mikemazara.github.io/openteams-shadcn/r/{name}.json"
     }
   }
   ```

3. Install components:

   ```bash
   npx shadcn@latest add @openteams/theme      # brand tokens — add once
   npx shadcn@latest add @openteams/button
   npx shadcn@latest add @openteams/card @openteams/input @openteams/label
   ```

   Dependencies resolve automatically (e.g. `button` pulls in `@openteams/utils`).

Available items: `theme`, `utils`, `button`, `badge`, `card`, `input`, `label`,
`separator`, `textarea`, `skeleton`.

The published GitHub Pages site serves **Storybook at `/`** (component preview)
and the **registry JSON at `/r/<name>.json`** (what the CLI fetches).

## For maintainers (this repo)

```
registry/openteams/         # the source you own and edit
  lib/utils.ts              # cn()
  ui/*.tsx                  # components
registry.json               # manifest: items, deps, theme tokens
stories/*.stories.tsx       # Storybook previews
.storybook/                 # Storybook config + theme CSS
public/                     # GENERATED site: Storybook at /, registry at /r
```

Setup (first time): `bun install`.

Common commands:

```bash
bun storybook         # local Storybook dev server (http://localhost:6006)
bun registry:build    # build registry JSON only -> public/r
bun storybook:build   # build Storybook only -> public
bun site:build        # build both (Storybook + registry) -> public   (CI uses this)
```

Workflow to add/change a component:

1. Edit or add a component under `registry/openteams/ui/`.
2. Add/adjust its entry in `registry.json` (name, deps, registryDependencies,
   files).
3. Optionally add a story under `stories/`.
4. `bun site:build`, then push — the GitHub Actions workflow redeploys Pages.

### Restyling for the team

Edit the `theme` item's `cssVars` in `registry.json` (e.g. change `primary` to
your brand color), rebuild, and consumers pick it up with
`npx shadcn add @openteams/theme`. Per-component tweaks: edit the `.tsx`
Tailwind classes directly — you own them.

## Adding more components

Copy any upstream shadcn component as a starting point, then style it:

```bash
curl -sf https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4/ui/<name>.tsx \
  -o registry/openteams/ui/<name>.tsx
```

Then add it to `registry.json` and rebuild.
