import React from "react";
import { createRoot } from "react-dom/client";
import ClientFinderAI from "../client-finder-ai";

const path = window.location.pathname;

if (path === "/") {
  window.location.replace("/clientai-landing.html");
} else {
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ClientFinderAI />
    </React.StrictMode>
  );
}
