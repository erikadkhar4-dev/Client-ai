import React from "react";
import { createRoot } from "react-dom/client";
import ClientFinderAI from "../client-finder-ai";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientFinderAI />
  </React.StrictMode>
);
