export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo', '@pinia/nuxt', '@nuxtjs/tailwindcss'],

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Ableton Copilot - Assistant IA pour la Production Musicale',
      meta: [{ name: 'theme-color', content: '#18181b' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5892017890481993',
          async: true,
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  site: {
    url: 'https://ableton-copilot.com',
    name: 'Ableton Copilot',
    description:
      "Ableton Copilot - L'assistant IA pour la production musicale. Controlez Ableton Live par la conversation, generez du MIDI et creez de la musique avec l'intelligence artificielle.",
    defaultLocale: 'fr',
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },

  robots: {
    disallow: [],
    sitemap: '/sitemap.xml',
  },

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Ableton Copilot',
      url: 'https://ableton-copilot.com',
      logo: 'https://ableton-copilot.com/logo.png',
    },
  },

  runtimeConfig: {
    public: {
      web3formsAccessKey: process.env.VITE_WEB3FORMS_ACCESS_KEY || '',
      adsenseId: process.env.VITE_ADSENSE_ID || 'ca-pub-5892017890481993',
    },
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      routes: ['/', '/features', '/docs', '/pricing', '/download', '/contact', '/legal'],
    },
  },
})
