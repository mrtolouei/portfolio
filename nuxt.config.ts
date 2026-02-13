// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    ssr: false,
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@400;600&display=swap"
                }
            ]
        }
    }
})
