import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./routes/routes";
import GlobalStyle from "./global/globalStyled";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <PageRouter/>
    </BrowserRouter>
  );
}

export default App;
