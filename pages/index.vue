<script setup lang="ts">
useSeoMeta({
  title: 'Ableton Copilot - Plateforme Communautaire pour Producteurs',
  description:
    'Partagez et telechargez des fichiers MIDI et presets VST. Generez du MIDI avec IA et controlez Ableton Live. La communaute des producteurs de musique electronique.',
  ogTitle: 'Ableton Copilot - Communaute de Producteurs',
  ogDescription:
    'Plateforme communautaire pour producteurs. Partagez MIDI, presets VST, et creez avec des outils IA.',
  ogImage: 'https://ableton-copilot.com/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ableton Copilot - Communaute de Producteurs',
  twitterDescription:
    'Plateforme communautaire pour producteurs. Partagez MIDI, presets VST, et creez avec des outils IA.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Ableton Copilot - Plateforme Communautaire pour Producteurs',
    description:
      'Partagez et telechargez des fichiers MIDI et presets VST. Generez du MIDI avec IA.',
  }),
  defineSoftwareApp({
    name: 'Ableton Copilot',
    operatingSystem: 'Windows',
    applicationCategory: 'MultimediaApplication',
    offers: {
      price: '0',
      priceCurrency: 'EUR',
    },
  }),
])

const features = [
  {
    icon: 'community',
    title: 'Communauté Active',
    description:
      'Partagez et téléchargez des fichiers MIDI créés par la communauté. Drums, mélodies, basslines et plus encore.',
  },
  {
    icon: 'presets',
    title: 'Presets VST Partagés',
    description:
      'Échangez vos presets pour Serum, Vital, Massive et autres synthés populaires avec la communauté.',
  },
  {
    icon: 'midi',
    title: 'Génération MIDI',
    description:
      'Générez des mélodies, accords, basslines et patterns de drums en quelques secondes. Respecte la théorie musicale.',
  },
  {
    icon: 'ableton',
    title: 'Contrôle Ableton Live',
    description:
      'Créez des pistes, clips et notes MIDI directement dans votre session. Intégration complète avec Ableton.',
  },
  {
    icon: 'chat',
    title: 'Assistant IA',
    description:
      'Discutez avec une IA qui comprend la production musicale. Support multi-provider : Claude, GPT, Gemini.',
  },
  {
    icon: 'audio',
    title: 'Génération Audio',
    description:
      'Intégration Suno AI et Mureka AI pour générer des chansons complètes avec vocals.',
  },
  {
    icon: 'marketplace',
    title: 'Marketplace',
    description:
      'Bientôt disponible : achetez des sample packs premium avec un système de crédits. Drums, synths, vocals et plus.',
  },
]

const stats = [
  { value: '21', label: 'Genres musicaux' },
  { value: '16', label: 'Types MIDI' },
  { value: '6', label: 'Modèles IA' },
  { value: '2', label: 'Plans disponibles' },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl pointer-events-none"
      />

      <div class="max-w-7xl mx-auto px-6 py-12 md:py-24 relative">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8"
          >
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Disponible maintenant en bêta
          </div>

          <h1 class="text-4xl md:text-6xl font-bold text-zinc-100 leading-tight mb-6">
            La communauté des producteurs
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              Ableton Live</span
            >
          </h1>

          <p class="text-xl text-zinc-400 mb-10 leading-relaxed">
            Partagez et téléchargez des fichiers MIDI et presets VST. Générez du contenu avec l'IA
            et contrôlez Ableton directement depuis l'application.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink to="/download">
              <UiButton size="lg">
                Télécharger gratuitement
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </UiButton>
            </NuxtLink>
            <NuxtLink to="/docs">
              <UiButton variant="outline" size="lg">
                Voir la documentation
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </UiButton>
            </NuxtLink>
          </div>
        </div>

        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div
              class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"
            >
              {{ stat.value }}
            </div>
            <div class="text-sm text-zinc-400 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-zinc-950/50">
      <div class="max-w-7xl mx-auto px-6 py-24">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p class="text-zinc-400 text-lg max-w-2xl mx-auto">
            Un assistant complet pour accélérer votre workflow de production musicale
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard
            v-for="feature in features"
            :key="feature.title"
            class="p-6 hover:border-zinc-700 transition-colors group"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-colors"
            >
              <svg
                v-if="feature.icon === 'chat'"
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'midi'"
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'ableton'"
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'audio'"
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'community'"
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'presets'"
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'marketplace'"
                class="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-zinc-100 mb-2">{{ feature.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ feature.description }}</p>
          </UiCard>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <UiAdBanner ad-slot="3456789012" ad-format="horizontal" />
    </div>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-18 mb-6">
        <div
          class="relative rounded-3xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 p-12 md:p-16 text-center overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <div
            class="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
          />

          <div class="relative">
            <h2 class="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Prêt à révolutionner votre workflow ?
            </h2>
            <p class="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Rejoignez des centaines de producteurs qui utilisent déjà Ableton Copilot pour
              accélérer leur créativité.
            </p>
            <NuxtLink to="/download">
              <UiButton size="lg">
                Commencer maintenant
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </UiButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
