<script setup lang="ts">
useSeoMeta({
  title: 'Démonstration - Ableton Copilot',
  description:
    "Découvrez Ableton Copilot en action. Screenshots, vidéos et démonstrations de l'application pour la production musicale.",
  ogTitle: 'Démonstration - Ableton Copilot',
  ogDescription:
    "Vidéos et captures d'écran de l'assistant IA pour Ableton Live.",
  ogImage: 'https://ableton-copilot.com/og-demo.png',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Démonstration - Ableton Copilot',
    description: "Découvrez Ableton Copilot en action avec des vidéos et screenshots.",
  }),
])

const features = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: "Vue d'ensemble de l'application avec accès rapide à toutes les fonctionnalités.",
  },
  {
    id: 'chat',
    title: 'Chat IA',
    description: 'Conversez avec une IA qui comprend la production musicale et contrôle Ableton.',
  },
  {
    id: 'midi',
    title: 'Génération MIDI',
    description: 'Générez des mélodies, accords, basslines et drums avec des paramètres précis.',
  },
  {
    id: 'community',
    title: 'Communauté',
    description: 'Parcourez et téléchargez des fichiers MIDI et presets partagés par la communauté.',
  },
  {
    id: 'audio',
    title: 'Génération Audio',
    description: 'Créez des chansons complètes avec Suno AI et Mureka AI.',
  },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none"
      />

      <div class="max-w-7xl mx-auto px-6 py-24 relative">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Voir l'application en action
          </div>

          <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">Démonstration</h1>

          <p class="text-xl text-zinc-400 leading-relaxed">
            Découvrez Ableton Copilot à travers des vidéos et captures d'écran. Explorez chaque
            fonctionnalité avant de télécharger.
          </p>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-zinc-100 mb-4">Vidéo de présentation</h2>
          <p class="text-zinc-400">Une vue d'ensemble complète de l'application</p>
        </div>

        <UiCard class="aspect-video flex items-center justify-center bg-zinc-900/50 overflow-hidden">
          <div class="text-center p-8">
            <div
              class="w-20 h-20 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-4"
            >
              <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p class="text-zinc-500 text-sm">Vidéo de présentation à venir</p>
          </div>
        </UiCard>
      </div>
    </section>

    <section class="relative bg-zinc-950/50">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-zinc-100 mb-4">Captures d'écran</h2>
          <p class="text-zinc-400">Explorez les différentes fonctionnalités de l'application</p>
        </div>

        <div class="space-y-16">
          <div v-for="(feature, index) in features" :key="feature.id" class="scroll-mt-24" :id="feature.id">
            <div
              class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
            >
              <div :class="{ 'lg:order-2': index % 2 === 1 }">
                <h3 class="text-xl font-bold text-zinc-100 mb-3">{{ feature.title }}</h3>
                <p class="text-zinc-400 leading-relaxed">{{ feature.description }}</p>
              </div>

              <UiCard
                :class="{ 'lg:order-1': index % 2 === 1 }"
                class="aspect-video flex items-center justify-center bg-zinc-900/50"
              >
                <div class="text-center p-6">
                  <div
                    class="w-16 h-16 mx-auto rounded-xl bg-zinc-800 flex items-center justify-center mb-3"
                  >
                    <svg class="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p class="text-zinc-600 text-sm">Screenshot {{ feature.title }}</p>
                </div>
              </UiCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <UiCard
          class="p-12 text-center bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20"
        >
          <h2 class="text-3xl font-bold text-zinc-100 mb-4">Convaincu ?</h2>
          <p class="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
            Téléchargez Ableton Copilot gratuitement et commencez à produire dès maintenant.
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
            <NuxtLink to="/features">
              <UiButton variant="outline" size="lg"> Voir toutes les fonctionnalités </UiButton>
            </NuxtLink>
          </div>
        </UiCard>
      </div>
    </section>
  </div>
</template>
