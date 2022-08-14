import React, { useState } from "react";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import Router from "./Router";
import { Theme } from "./context/themeModeContext";

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div>
        <Router />
      </div>
    </ThemeModeProvider>
  );
}

export default App;
