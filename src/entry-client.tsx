import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

const el = document.getElementById("root");
if (!el) {
  throw new Error("Unable to Hydrate. No element with #root found.");
}

ReactDOM.hydrateRoot(
  el,
  <StrictMode>
    <App />
  </StrictMode>
);
