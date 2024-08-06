import "./bootstrap";
import "../css/app.css";

import { ThemeProvider } from "@/Components/ThemeProvider";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} | ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob("./Pages/**/*.tsx"),
    ),
  setup({ el, App, props }) {
    if (import.meta.env.DEV) {
      createRoot(el).render(
        <StrictMode>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App {...props} />
          </ThemeProvider>
        </StrictMode>,
      );
      return;
    }

    hydrateRoot(el, <App {...props} />);
  },
  progress: {
    color: "#4B5563",
  },
});
