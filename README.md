<p ta="center">
  <a href="https://plocks.dev/" rel="noopener" target="_blank"><img width="75" height="75" src="https://raw.githubusercontent.com/platform-blocks/plocks/HEAD/apps/docs/assets/favicon.png" alt="plocks logo"/></a>
</p>

<h1 ta="center">plocks Extension Template</h1>

<p ta="center">
  Build and publish your own <a href="https://plocks.dev">plocks</a> extension: an npm package of components built on <code>@plocks/ui</code> that work on iOS, Android, and web.
</p>

## Get started

1. Click **Use this template** on GitHub and clone your new repository.
2. Replace `plocks-extension-template` with your package name everywhere it appears, and update `description`, `repository`, and `keywords` in `package/package.json`.
3. Install and launch the example app:

```bash
npm install
npm run example
```

Press `i` for iOS, `a` for Android, or `w` for web. The example app loads the package straight from source, so your edits hot-reload.

## Where things live

- [`package/src/components/`](./package/src/components): your components. The sample `Marquee` shows the conventions.
- [`example/`](./example): an Expo app for trying them on every platform.

## Publish

```bash
npm login
npm run release:patch   # or release:minor / release:major
```

This bumps the version, builds, and publishes `package/` to npm.

## Get listed

Open a pull request adding your package to the [extensions registry](https://github.com/platform-blocks/plocks/blob/HEAD/apps/docs/config/extensions.ts). Accepted extensions appear on [plocks.dev/extensions](https://plocks.dev/extensions).
