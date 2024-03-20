import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify()
    ],
    theme: {
        breakpoints: {
            sm: "425px",
            md: "768px",
            lg: "1024px"
        }
    }
});