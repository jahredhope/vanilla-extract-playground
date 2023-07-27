# Vanilla Extract Composed Styles

A playground for testing Vanilla Extract with Vite SSR + Static Rendering

## Current Demo

Not emitting CSS on Server Build

The [CSS](./dist/assets/index-70b88a73.css) does not include the styles from [static.css.ts](./src/static.css.ts). They are only included the render, not client.

Note they still export the js class "static_blueText\_\_zmmkag0" as seen in [index.html](./dist/index.html)

## To recreate

```bash
pnpm install
pnpm dev
```

Navigate to the resulting URL. Typically [localhost:5173](http://localhost:5173).

[vite]: https://vitejs.dev
[sprinkles]: https://vanilla-extract.style/documentation/packages/sprinkles
