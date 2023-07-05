# Vanilla Extract with Atoms in Styles

A demonstration of a bug where Server and Client exported classes differ when not using `emitCssInSsr: true`.

When using Sprinkles inside a `css.ts` file, the resulting styles have an additional style on server-render that causes a hydration issue.

Setting `emitCssInSsr: true` stops this error.

## Scenario

This project uses a fairly boilerplate solution created from following:

- [Create Vite](https://vitejs.dev/guide/)
- [Vite SSR Guide](https://vitejs.dev/guide/ssr.html)
- [Vanilla Extract Vite Plugin](https://vanilla-extract.style/documentation/integrations/vite/)

It then renders text on screen 3 times using different methods to apply CSS. The third method, using Atoms inside a `.css` file, results in an hydration error after returning a different result on the client and server.

Calling `atoms({ color: "red" })` as created by `src/atoms.css.ts` and called in `src/App.tsx` will return `"atoms_color_red__1eqt1j52"` for both client and server renders.

When the same value is called in `src/styles.css.ts` and exported it returns `"styles__duph0q1 atoms_color_red__1eqt1j52"` on server render and `"atoms_color_red__1eqt1j52"` on client render.

Resulting in a Hydration error in React.

```
Warning: Prop `className` did not match. Server: "styles__duph0q1 atoms_color_red__1eqt1j52" Client: "atoms_color_red__1eqt1j52"
div
main
App
```

![](hydration-error.png)

However, when called

## To recreate

Ensure RECREATE_ERROR in `vite.config.ts` is `true`

```bash
pnpm install
pnpm dev
```

Navigate to the resulting URL. Typically [localhost:5173](http://localhost:5173).

Change RECREATE_ERROR to `false` and re-run to see error disappear.
