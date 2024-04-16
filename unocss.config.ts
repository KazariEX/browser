import { defineConfig, presetUno, presetAttributify } from "unocss";
import presetTheme from "unocss-preset-theme";
import type { Theme } from "unocss/preset-uno";
import { colors } from "unocss/preset-mini";

export default defineConfig<Theme>({
    presets: [
        presetUno(),
        presetAttributify(),
        presetTheme<Theme>({
            theme: {
                light: {
                    colors: {
                        primary: {
                            DEFAULT: colors.blue[400]
                        },
                        light: {
                            DEFAULT: colors.light[400]
                        },
                        dark: {
                            DEFAULT: colors.dark[400]
                        }
                    }
                },
                dark: {
                    colors: {
                        light: {
                            DEFAULT: colors.dark[400]
                        },
                        dark: {
                            DEFAULT: colors.light[400]
                        },
                        gray: {
                            200: colors.gray[800],
                            300: colors.gray[700],
                            400: colors.gray[600]
                        }
                    }
                }
            }
        })
    ],
    theme: {
        breakpoints: {
            sm: "425px",
            md: "768px",
            lg: "1024px"
        }
    }
});