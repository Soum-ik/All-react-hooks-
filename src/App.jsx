import Functional_Component from "./funcation";
import "./App.css";
import { ThemeProvider } from "./ThemeContenxt";

export default function App() {
  return (
    <div className="app">
      <ThemeProvider>
        <Functional_Component />
      </ThemeProvider>
    </div>
  );
}
