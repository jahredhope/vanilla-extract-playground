import { jsx, jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import ReactDOMServer from "react-dom/server";
const styles_css_ts_vanilla = "";
var greenText = "duph0q0";
function App() {
  return /* @__PURE__ */ jsx("main", { children: Object.entries({
    greenText
  }).map(([key, str], i) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("span", { className: str, children: key }),
    " ",
    str
  ] }, i)) });
}
const static_css_ts_vanilla = "";
var blueText = "zmmkag0";
function render() {
  return {
    headerHtml: `<div class="${blueText}">Static Server Render</div>`,
    appHtml: ReactDOMServer.renderToString(
      /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
    )
  };
}
export {
  render
};
