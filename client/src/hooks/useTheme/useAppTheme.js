import { useState } from "react";

function useAppTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  function setAppTheme(theme) {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }
  return { theme, setAppTheme };
}

export default useAppTheme;
