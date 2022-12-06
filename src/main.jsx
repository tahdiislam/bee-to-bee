import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./Context/AuthProvider";
import SetBlur from "./Context/SetBlur";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SetBlur>
        <App />
        <Toaster />
      </SetBlur>
    </AuthProvider>
  </React.StrictMode>
);
