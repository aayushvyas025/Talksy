import React from "react";

function ThemeButton({ theme, currentTheme, handleThemeChange }) {
    console.log(currentTheme);
    console.log(theme)
  return (
    <button
      type="button"
      className={`group flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${theme === currentTheme ? "bg-base-200" : "hover:bg-base-200/50"}`}
      onClick={handleThemeChange}
    >
      <div
        className="relative h-8 w-full rounded-md overflow-hidden"
        data-theme={currentTheme}
      >
        <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
          <div className="rounded bg-primary"></div>
          <div className="rounded bg-secondary"></div>
          <div className="rounded bg-accent"></div>
          <div className="rounded bg-neutral"></div>
        </div>
      </div>
      <span className="text-[11px] font-medium truncate w-full text-center">
        {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}
      </span>
    </button>
  );
}

export default ThemeButton;
