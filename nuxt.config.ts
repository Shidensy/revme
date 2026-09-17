export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: {enabled: false},
    modules: ["@nuxt/fonts", "@nuxt/image"],
    css: ["~/assets/styles/main.scss"],
    ssr: false,
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @use "~/assets/styles/_variables.scss" as *;
            @use "~/assets/styles/_mixins.scss" as *;
          `,
                },
            },
        },
    },
    app: {
        baseURL: "/revme/",
        head: {
            link: [{rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}],
        },
    },
});
