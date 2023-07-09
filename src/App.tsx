import { atoms, redFromAtomsInCss } from "./atoms.css";
const redFromAtomsInJs = atoms({ color: "red" });

export function App() {
  return (
    <main>
      {Object.entries({
        redFromAtomsInCss,
        redFromAtomsInJs,
      }).map(([key, str], i) => (
        <div key={i} className={str}>
          {key} - {str}
        </div>
      ))}
    </main>
  );
}
