import { atoms } from "./atoms.css";
import { greenFromStyles, redFromStylesWithAtoms } from "./styles.css";

const blueFromAtoms = atoms({ color: "blue" });
const redFromAtoms = atoms({ color: "red" });

if (redFromAtoms == redFromStylesWithAtoms) {
  console.log("Does match", { redFromAtoms });
} else {
  console.log("Doesn't match", { redFromAtoms, redFromStylesWithAtoms });
}

export function App() {
  return (
    <main>
      <div className={greenFromStyles}>Green - Styles</div>
      <div className={blueFromAtoms}>Blue - Atoms</div>
      <div className={redFromStylesWithAtoms}>Red - Atoms in Styles</div>
    </main>
  );
}
