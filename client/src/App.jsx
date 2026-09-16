import React from "react";
import AppRoutes from "./routes/AppRoutes";
import useAppTheme from "./hooks/useTheme/useAppTheme";

function App() {
  const { theme } = useAppTheme();
  return (
    <div data-theme={theme}>
      <AppRoutes />
    </div>
  );
}

export default App;
