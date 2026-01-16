<script setup lang="ts">
useSeoMeta({
  title: 'Fonctionnalités - Ableton Copilot',
  description:
    'Decouvrez toutes les fonctionnalites d\'Ableton Copilot : Chat IA multi-provider, generation MIDI avancee, controle Ableton Live, generation audio par IA.',
  ogTitle: 'Fonctionnalités - Ableton Copilot',
  ogDescription:
    'Chat IA, generation MIDI, controle Ableton, generation audio. Tout pour accelerer votre production musicale.',
  ogImage: 'https://ableton-copilot.com/og-features.png',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Fonctionnalités - Ableton Copilot',
    description: 'Toutes les fonctionnalites de l\'assistant IA pour la production musicale.',
  }),
])

const mainFeatures = [
  {
    id: 'chat',
    title: 'Chat IA Multi-Provider',
    description:
      'Conversez naturellement avec une IA qui comprend la production musicale. Choisissez parmi plusieurs modèles ou utilisez vos propres clés API.',
    details: [
      'Claude (Anthropic) - Haiku, Sonnet, Opus',
      'GPT (OpenAI) - GPT-4.1 Mini, GPT-5 Mini',
      'Gemini (Google) - Flash, Pro',
      'LM Studio - Modèles locaux illimités (phase de test)',
      'Mode BYOK - Utilisez vos propres clés',
    ],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 'midi',
    title: 'Génération MIDI Avancée',
    description:
      'Générez des mélodies, accords, basslines et drums respectant la théorie musicale. Contrôlez chaque paramètre pour un résultat parfait.',
    details: [
      'Mélodies avec contour et densité configurables',
      "Progressions d'accords intelligentes",
      'Basslines avec patterns et groove',
      'Drums multi-pistes (kick, snare, hihat, etc.)',
      'Post-traitement: quantize, humanize, mono',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'ableton',
    title: "Contrôle Direct d'Ableton Live",
    description:
      "L'IA contrôle directement votre session Ableton. Créez des pistes, des clips et des notes sans quitter la conversation.",
    details: [
      'Création et duplication de pistes',
      'Insertion de clips MIDI',
      'Contrôle du transport (play, stop, pause)',
      'Mode Session et Arrangement',
      'Accès au browser Ableton',
    ],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'audio',
    title: 'Génération Audio par IA',
    description:
      'Générez des chansons complètes avec vocals grâce aux intégrations Suno AI et Mureka AI. Séparation de stems incluse.',
    details: [
      'Suno AI - Génération complète avec lyrics',
      'Mureka AI - Génération musicale avancée',
      'MusicGen - Génération audio locale',
      'Séparation de stems (drums, bass, vocals)',
      'Extension de pistes existantes',
    ],
    gradient: 'from-pink-500 to-rose-500',
  },
]

const additionalFeatures = [
  {
    icon: 'midi-share',
    title: 'Partage de Fichiers MIDI',
    description:
      'Uploadez et téléchargez des fichiers MIDI de la communauté. Drums, bass, mélodies, accords et plus.',
  },
  {
    icon: 'preset-share',
    title: 'Presets VST Communautaires',
    description:
      'Partagez vos presets pour les synthés populaires : Serum, Vital, Massive, Omnisphere, Pigments et plus.',
  },
  {
    icon: 'voice',
    title: 'Commandes Vocales',
    description:
      'Contrôlez Ableton par la voix. Web Speech API gratuit ou Whisper API pour plus de précision.',
  },
  {
    icon: 'notifications',
    title: 'Notifications Temps Réel',
    description:
      'Alertes pour les générations terminées, crédits bas, likes sur vos contenus et nouveaux followers.',
  },
  {
    icon: 'shield',
    title: 'Sécurisé',
    description:
      'Authentification OAuth (Google, GitHub), vérification email et gestion sécurisée des clés API.',
  },
  {
    icon: 'library',
    title: 'Bibliothèque de Sons',
    description:
      'Accédez à une vaste bibliothèque de samples organisés par genre. 21 genres musicaux disponibles.',
  },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent pointer-events-none"
      />

      <div class="max-w-7xl mx-auto px-6 py-24 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">Fonctionnalités</h1>
          <p class="text-xl text-zinc-400 leading-relaxed">
            Découvrez tout ce qu'Ableton Copilot peut faire pour accélérer votre production musicale
          </p>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="space-y-24">
          <div
            v-for="(feature, index) in mainFeatures"
            :key="feature.id"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <div :class="{ 'lg:order-2': index % 2 === 1 }">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4"
                :class="`bg-gradient-to-r ${feature.gradient} bg-opacity-10`"
                :style="{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  opacity: 0.1,
                }"
              >
                <span
                  class="w-2 h-2 rounded-full"
                  :class="`bg-gradient-to-r ${feature.gradient}`"
                />
              </div>
              <h2 class="text-3xl font-bold text-zinc-100 mb-4">{{ feature.title }}</h2>
              <p class="text-zinc-400 text-lg mb-6 leading-relaxed">{{ feature.description }}</p>
              <ul class="space-y-3">
                <li v-for="detail in feature.details" :key="detail" class="flex items-start gap-3">
                  <svg
                    class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span class="text-zinc-300">{{ detail }}</span>
                </li>
              </ul>
            </div>
            <div :class="{ 'lg:order-1': index % 2 === 1 }">
              <UiCard
                class="aspect-video flex items-center justify-center bg-gradient-to-br from-zinc-800/50 to-zinc-900/50"
              >
                <div
                  class="w-24 h-24 rounded-2xl flex items-center justify-center"
                  :class="`bg-gradient-to-br ${feature.gradient}`"
                >
                  <svg
                    v-if="feature.id === 'chat'"
                    class="w-12 h-12 text-white"
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
                    v-else-if="feature.id === 'midi'"
                    class="w-12 h-12 text-white"
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
                    v-else-if="feature.id === 'ableton'"
                    class="w-12 h-12 text-white"
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
                    v-else-if="feature.id === 'audio'"
                    class="w-12 h-12 text-white"
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
                </div>
              </UiCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <UiAdBanner ad-slot="4567890123" ad-format="horizontal" />
    </div>

    <section class="relative bg-zinc-950/50">
      <div class="max-w-7xl mx-auto px-6 py-24">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-zinc-100 mb-4">Et bien plus encore...</h2>
          <p class="text-zinc-400 text-lg">
            Fonctionnalités supplémentaires pour une expérience complète
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard
            v-for="feature in additionalFeatures"
            :key="feature.title"
            class="p-6 hover:border-zinc-700 transition-colors"
          >
            <div class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
              <svg
                v-if="feature.icon === 'midi-share'"
                class="w-5 h-5 text-red-500"
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
                v-else-if="feature.icon === 'preset-share'"
                class="w-5 h-5 text-red-500"
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
                v-else-if="feature.icon === 'library'"
                class="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'voice'"
                class="w-5 h-5 text-red-500"
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
                v-else-if="feature.icon === 'notifications'"
                class="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <svg
                v-else-if="feature.icon === 'shield'"
                class="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-zinc-100 mb-2">{{ feature.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ feature.description }}</p>
          </UiCard>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-24">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-zinc-100 mb-4">Prêt à essayer ?</h2>
          <p class="text-zinc-400 text-lg mb-8">
            Téléchargez Ableton Copilot gratuitement et commencez à produire.
          </p>
          <NuxtLink to="/download">
            <UiButton size="lg">
              Télécharger maintenant
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
        </div>
      </div>
    </section>
  </div>
</template>
