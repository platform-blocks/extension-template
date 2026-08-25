# extension-template

Template for building a [Platform Blocks](https://platform-blocks.com) extension — an npm package of React Native components that build on `@platform-blocks/ui` (its theming, dark mode, and component APIs) and work everywhere Platform Blocks does: iOS, Android, and web.

The template ships a complete development environment: a sample `Marquee` component, an Expo example app that hot-reloads the package source on every platform, Jest, ESLint, TypeScript, a [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob) build, CI, and one-command npm releases.

## Getting started

1. Click **Use this template** on GitHub, then clone your new repository.
2. Replace every occurrence of `platform-blocks-extension-template` with your package name, and update `repository`, `description`, and `keywords` in `package/package.json`.
3. Install and run:

```bash
npm install
npm run example   # start the Expo example app (i / a / w for iOS / Android / web)
```

The example app imports the package from the `package/` workspace, so edits to `package/src/` hot-reload live.

## Project layout

| Path | What it is |
| --- | --- |
| `package/` | The extension — this is what gets published to npm |
| `package/src/components/<Name>/` | One component per directory: source, `types.ts`, `__tests__/`, plus `meta/component.md` and `demos/` in the same convention the core library uses for its docs |
| `example/` | Expo app for developing and demoing the extension on every platform |

## Scripts

| Script | What it does |
| --- | --- |
| `npm run example` | Start the example app |
| `npm test` | Run the package's Jest suite |
| `npm run lint` | Lint the package source |
| `npm run typecheck` | Type-check the package |
| `npm run build` | Build ESM + CJS + type declarations into `package/lib/` |
| `npm run release:patch` / `:minor` / `:major` | Version-bump and publish to npm (`npm login` first) |

## Verify before publishing

```bash
npm run lint && npm run typecheck && npm test && npm run build
```

CI runs the same checks on every push and weekly against the newest in-range `@platform-blocks/ui`.

## Getting listed

Publish your extension to npm (any name works — `platform-blocks-*` makes it easy to find), then open a pull request on [platform-blocks/platform-blocks](https://github.com/platform-blocks/platform-blocks) adding it to the extensions registry with a one-line description. Accepted extensions are listed on platform-blocks.com.

## License

MIT
