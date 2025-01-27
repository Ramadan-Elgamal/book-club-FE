import "base/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/GreycliffCF/styles.css";
import "./styles/index.css";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
