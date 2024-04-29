export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            meta: [
                { "http-equiv": "Cache-Control", content: "no-siteapp" },
                { "http-equiv": "X-UA-Compatible", content: "IE=edge, chrome=1" }
            ],
            titleTemplate: "%s %separator 浏览器知识构建",
            templateParams: {
                separator: "-"
            }
        }
    },
    css: [
        "~/assets/index.scss",
        "~/assets/markdown.scss"
    ],
    components: [
        {
            path: "~/components"
        },
        {
            path: "~/components/ui",
            prefix: "z"
        }
    ],
    devtools: {
        enabled: true
    },
    routeRules: {
        "/slide": {
            ssr: false
        }
    },
    modules: [
        "@nuxt/content",
        "@nuxt/image",
        "@unocss/nuxt",
        "@vueuse/nuxt",
        "nuxt-icon"
    ]
});