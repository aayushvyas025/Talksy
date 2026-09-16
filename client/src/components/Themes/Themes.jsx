import { appThemes } from "@/constant/appAssets";
import useAppTheme from "@/hooks/useTheme/useAppTheme";
import React from "react";
import ThemeButton from "../Button/ThemeButton";

function Themes() {
  const { theme, setTheme } = useAppTheme();
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
      {appThemes.map((currentTheme, index) => (
        <ThemeButton
          key={index}
          theme={theme}
          currentTheme={currentTheme}
          handleThemeChange={() => setTheme(currentTheme)}
        />
      ))}
    </div>
  );
}

export default Themes;
