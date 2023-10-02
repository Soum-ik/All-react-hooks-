import { useThemeContext, useThemeContextUpdater } from "./ThemeContenxt";

export default function Functional_Component() {
  // this is the way to easy use Provider
  const darkMode = useThemeContext();
  // this is the way to easy use Provider
  const toggleTheme = useThemeContextUpdater();
  const themeStyle = {
    backgroundColor: darkMode ? "#ffff " : "#5395",
  };

  return (
    <div style={themeStyle}>
      <h1>Hello soumik </h1>
      <button onClick={toggleTheme}>change color </button>
    </div>
  );
}
