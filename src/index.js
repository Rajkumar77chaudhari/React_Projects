import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContextWrapper from "./themeContextWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <App />
  </ThemeContextWrapper>,
  document.getElementById("root")
);
