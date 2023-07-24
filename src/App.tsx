// import { globalStyle$ } from "@vanilla-extract/css";
// import { greenText, redText } from "./styles.css";
import { xlargeText, largeText, mediumText, smallText } from "./capsize.css";

// globalStyle$("body, body *", {
//   // all: "unset",
//   boxSizing: "border-box",
//   // background: "green !important",
// });

export function App() {
  return (
    <main>
      {Object.entries({
        // greenText,
        xlargeText,
        largeText,
        mediumText,
        smallText,
        hello: "hello",
      }).map(([key, str], i) => (
        <div key={i}>
          <span className={str}>{key}</span>&nbsp;
          {str}
        </div>
      ))}
    </main>
  );
}
