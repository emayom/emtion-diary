import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { DiaryProvider } from "@context/DiaryProvider.jsx";
import { ViewTypeProvider } from "@context/ViewTypeProvider.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DiaryProvider>
      <ViewTypeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ViewTypeProvider>
    </DiaryProvider>
  </React.StrictMode>
);
