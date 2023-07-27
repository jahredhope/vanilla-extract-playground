import { StrictMode } from "react";
import ReactDOMServer from "react-dom/server";

import { App } from "./App";
import { blueText } from "./static.css";

export function render() {
  return {
    headerHtml: `<div class="${blueText}">Static Server Render</div>`,
    appHtml: ReactDOMServer.renderToString(
      <StrictMode>
        <App />
      </StrictMode>
    ),
  };
}
