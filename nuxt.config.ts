// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    ssr: false,
    modules: ['@nuxtjs/tailwindcss'],
    nitro: {
        preset: 'static'
    },
    app: {
        head: {
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@400;600&display=swap"},
                { rel: 'icon', type: 'image/png', sizes: '48x48', href: 'https://mrtolouei.ir/favicon48x48.ico' },
                { rel: 'apple-touch-icon', sizes: '48x48', href: 'https://mrtolouei.ir/favicon48x48.ico' }
            ],
            title: 'Alireza Tolouei – Senior Software Engineer',
            meta: [
                { name: 'description', content: 'I am a Senior Software Engineer with experience in Laravel, Vue, Nuxt, Docker, and building scalable applications.' },
                { name: 'keywords', content: 'Alireza Tolouei, Software Engineer, Laravel, Vue, Nuxt, Backend Developer' },
                { property: 'og:title', content: 'Alireza Tolouei – Software Engineer' },
                { property: 'og:description', content: 'I am a Senior Software Engineer with experience in Laravel, Vue, Nuxt, Docker, and building scalable applications.' },
                { property: 'og:url', content: 'https://mrtolouei.ir' },
                { property: 'og:type', content: 'website' },
                { property: 'og:image', content: 'https://mrtolouei.ir/og-image.png' },

                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Alireza Tolouei – Software Engineer' },
                { name: 'twitter:description', content: 'I am a Senior Software Engineer with experience in Laravel, Vue, Nuxt, Docker, and building scalable applications.' },
                { name: 'twitter:image', content: 'https://mrtolouei.ir/og-image.png' }
            ]
        }
    }
})
