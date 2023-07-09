import { atoms, atomsFromCssUsedInSelector, atomsFromCss } from "./atoms.css";

const atomsFromJs = atoms({ color: "red" });

export function App() {
  return (
    <main>
      {Object.entries({
        atomsFromJs, // No Extra Class
        atomsFromCssUsedInSelector, // Extra Class on both Server and Client
        atomsFromCss, // Extra on Server, and not Client
      }).map(([key, str], i) => (
        <div key={i}>
          <span className={str}>{key}: </span>
          {str}
        </div>
      ))}
    </main>
  );
}
