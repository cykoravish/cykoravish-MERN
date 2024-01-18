import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "toastBody",
        }}
      />
    </React.StrictMode>
  </AuthProvider>
);
