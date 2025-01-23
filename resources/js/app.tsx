import "../css/app.css";
import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import {HeroUIProvider} from '@heroui/react'
import { createRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || "Cms";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <HeroUIProvider>
                <App {...props} />
            </HeroUIProvider>
        );
    },
    progress: {
        color: "#4B5563",
        showSpinner: true,
    },
});
