import { greenText, redText } from "./styles.css";

export function App() {
  return (
    <main>
      {Object.entries({
        greenText, // No Extra Class
        redText, // Extra Class on both Server and Client
      }).map(([key, str], i) => (
        <div key={i}>
          <span className={str}>{key}</span>&nbsp;
          {str}
        </div>
      ))}
    </main>
  );
}
