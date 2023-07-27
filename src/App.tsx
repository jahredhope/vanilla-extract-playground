import { greenText } from "./styles.css";

export function App() {
  return (
    <main>
      {Object.entries({
        greenText,
      }).map(([key, str], i) => (
        <div key={i}>
          <span className={str}>{key}</span>&nbsp;
          {str}
        </div>
      ))}
    </main>
  );
}
