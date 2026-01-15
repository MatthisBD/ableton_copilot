<script setup lang="ts">
useSeoMeta({
  title: 'Documentation - Ableton Copilot',
  description:
    'Guide complet pour utiliser Ableton Copilot. Installation, configuration, chat IA, generation MIDI, generation audio et FAQ.',
  ogTitle: 'Documentation - Ableton Copilot',
  ogDescription: 'Apprenez a utiliser Ableton Copilot avec notre documentation complete.',
  ogImage: 'https://ableton-copilot.com/og-docs.png',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Documentation - Ableton Copilot',
    description: 'Guide complet pour utiliser Ableton Copilot.',
  }),
])

const activeSection = ref('getting-started')

const sections = [
  { id: 'getting-started', label: 'Démarrage rapide' },
  { id: 'installation', label: 'Installation' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'chat', label: 'Chat IA' },
  { id: 'midi', label: 'Génération MIDI' },
  { id: 'audio', label: 'Génération Audio' },
  { id: 'api', label: 'API Reference' },
  { id: 'faq', label: 'FAQ' },
]

let observer: IntersectionObserver | null = null

const scrollToSection = (sectionId: string) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    },
  )

  sections.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element) {
      observer?.observe(element)
    }
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="flex gap-12">
      <aside class="hidden lg:block w-64 shrink-0">
        <div class="sticky top-24">
          <h3 class="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
            Documentation
          </h3>
          <nav class="space-y-1">
            <button
              v-for="section in sections"
              :key="section.id"
              @click="scrollToSection(section.id)"
              class="block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
              :class="
                activeSection === section.id
                  ? 'bg-red-500/10 text-red-500 font-medium'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
              "
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </aside>

      <main class="flex-1 min-w-0">
        <div class="prose prose-invert prose-zinc max-w-none">
          <section id="getting-started" class="mb-16">
            <h1 class="text-4xl font-bold text-zinc-100 mb-6">Documentation Ableton Copilot</h1>
            <p class="text-xl text-zinc-400 mb-8">
              Bienvenue dans la documentation d'Ableton Copilot. Suivez ce guide pour commencer à
              utiliser l'assistant IA pour votre production musicale.
            </p>

            <UiCard class="p-6 bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20">
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0"
                >
                  <svg
                    class="w-5 h-5 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-zinc-100 font-semibold mb-1">Pré-requis</h4>
                  <ul class="text-zinc-400 text-sm space-y-1">
                    <li>Ableton Live 11 ou supérieur</li>
                    <li>Windows 10/11 (macOS bientôt disponible)</li>
                    <li>Connexion internet pour les fonctionnalités IA cloud</li>
                  </ul>
                </div>
              </div>
            </UiCard>
          </section>

          <section id="installation" class="mb-16">
            <h2 class="text-2xl font-bold text-zinc-100 mb-4">Installation</h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-zinc-100 mb-3">
                  1. Télécharger l'application
                </h3>
                <p class="text-zinc-400 mb-4">
                  Rendez-vous sur la
                  <NuxtLink to="/download" class="text-red-500 hover:underline"
                    >page de téléchargement</NuxtLink
                  >
                  et téléchargez le fichier .exe correspondant à votre système.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-zinc-100 mb-3">
                  2. Installer Ableton Copilot
                </h3>
                <p class="text-zinc-400 mb-4">
                  Exécutez le fichier téléchargé et suivez les instructions d'installation.
                  L'application sera installée dans votre dossier Programmes.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-zinc-100 mb-3">3. Configurer AbletonJS</h3>
                <p class="text-zinc-400 mb-4">
                  Pour que Copilot puisse contrôler Ableton Live, vous devez installer le script
                  AbletonJS :
                </p>
                <UiCard class="p-4 bg-zinc-800/50">
                  <ol class="text-zinc-300 text-sm space-y-2">
                    <li>1. Ouvrez Ableton Copilot</li>
                    <li>2. Allez dans Dashboard &gt; Configuration AbletonJS</li>
                    <li>3. Cliquez sur "Installer" ou téléchargez depuis GitHub</li>
                    <li>
                      4. Dans Ableton: Preferences &gt; Link/Tempo/MIDI &gt; Control Surface &gt;
                      AbletonJS
                    </li>
                    <li>5. Relancez Ableton Live</li>
                  </ol>
                </UiCard>
              </div>
            </div>
          </section>

          <section id="configuration" class="mb-16">
            <h2 class="text-2xl font-bold text-zinc-100 mb-4">Configuration</h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-zinc-100 mb-3">Compte utilisateur</h3>
                <p class="text-zinc-400 mb-4">
                  Créez un compte gratuit pour accéder à toutes les fonctionnalités. Vous pouvez
                  vous inscrire avec votre email ou via Google/GitHub.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-zinc-100 mb-3">Crédits</h3>
                <p class="text-zinc-400 mb-4">
                  Chaque action IA consomme des crédits. Le plan gratuit inclut 100 crédits par
                  mois. Consultez la
                  <NuxtLink to="/pricing" class="text-red-500 hover:underline">page tarifs</NuxtLink>
                  pour plus d'options.
                </p>
                <UiCard class="p-4 bg-zinc-800/50">
                  <h4 class="text-zinc-100 font-medium mb-2">Coût des opérations</h4>
                  <ul class="text-zinc-400 text-sm space-y-1">
                    <li>GPT-4.1 Mini: 7 crédits/message</li>
                    <li>GPT-5 Mini: 9 crédits/message</li>
                    <li>Claude Haiku: 10 crédits/message</li>
                    <li>Gemini Flash: 5 crédits/message</li>
                    <li>Génération Suno: 55 crédits/chanson</li>
                    <li>Génération Mureka: 45 crédits/chanson</li>
                  </ul>
                </UiCard>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-zinc-100 mb-3">
                  Mode BYOK (Bring Your Own Keys)
                </h3>
                <p class="text-zinc-400 mb-4">
                  Utilisez vos propres clés API pour les LLM. Allez dans Paramètres &gt; Sécurité
                  &gt; Clés API et ajoutez vos clés Anthropic, OpenAI ou Google.
                </p>
              </div>
            </div>
          </section>

          <section id="chat" class="mb-16">
            <h2 class="text-2xl font-bold text-zinc-100 mb-4">Chat IA</h2>

            <p class="text-zinc-400 mb-6">
              Le chat est l'interface principale pour interagir avec Ableton Copilot. Posez vos
              questions, demandez des générations, ou faites contrôler Ableton directement.
            </p>

            <div class="space-y-4">
              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Exemples de prompts</h4>
                <ul class="text-zinc-400 text-sm space-y-2">
                  <li>
                    <code class="bg-zinc-800 px-2 py-1 rounded">"Crée moi une track Hardtechno"</code>
                  </li>
                  <li>
                    <code class="bg-zinc-800 px-2 py-1 rounded"
                      >"Crée une mélodie en La mineur pour mon drop"</code
                    >
                  </li>
                  <li>
                    <code class="bg-zinc-800 px-2 py-1 rounded"
                      >"Génère un pattern de drums hardstyle à 150 BPM"</code
                    >
                  </li>
                  <li>
                    <code class="bg-zinc-800 px-2 py-1 rounded"
                      >"Ajoute une piste de bass avec une progression simple"</code
                    >
                  </li>
                  <li>
                    <code class="bg-zinc-800 px-2 py-1 rounded"
                      >"Quel accord irait bien après un Am7 ?"</code
                    >
                  </li>
                </ul>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Modes disponibles</h4>
                <ul class="text-zinc-400 text-sm space-y-2">
                  <li>
                    <strong class="text-zinc-100">Session:</strong> Les clips sont créés dans la vue
                    Session
                  </li>
                  <li>
                    <strong class="text-zinc-100">Arrangement:</strong> Les clips sont placés sur la
                    timeline
                  </li>
                </ul>
              </UiCard>
            </div>
          </section>

          <section id="midi" class="mb-16">
            <h2 class="text-2xl font-bold text-zinc-100 mb-4">Génération MIDI</h2>

            <p class="text-zinc-400 mb-6">
              Le panneau de génération MIDI vous permet de créer des éléments musicaux avec un
              contrôle précis sur tous les paramètres.
            </p>

            <div class="grid gap-4 md:grid-cols-2">
              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Mélodie</h4>
                <ul class="text-zinc-400 text-sm space-y-1">
                  <li>Tonalité et gamme</li>
                  <li>Nombre de mesures</li>
                  <li>Densité des notes</li>
                  <li>Contour mélodique</li>
                  <li>Style rythmique</li>
                </ul>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Accords</h4>
                <ul class="text-zinc-400 text-sm space-y-1">
                  <li>Progression d'accords</li>
                  <li>Voicing (inversions)</li>
                  <li>Style: block ou arpégé</li>
                  <li>Complexité harmonique</li>
                </ul>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Bassline</h4>
                <ul class="text-zinc-400 text-sm space-y-1">
                  <li>Pattern de base</li>
                  <li>Groove et swing</li>
                  <li>Octave</li>
                  <li>Synchronisation avec accords</li>
                </ul>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Drums</h4>
                <ul class="text-zinc-400 text-sm space-y-1">
                  <li>Mode multi-pistes</li>
                  <li>Kick, Snare, Hi-hat, etc.</li>
                  <li>Patterns par genre</li>
                  <li>Editeur de grille 16 steps</li>
                </ul>
              </UiCard>
            </div>
          </section>

          <section id="audio" class="mb-16">
            <h2 class="text-2xl font-bold text-zinc-100 mb-4">Génération Audio</h2>

            <p class="text-zinc-400 mb-6">
              Générez des chansons complètes avec vocals grâce aux intégrations IA cloud.
            </p>

            <div class="space-y-4">
              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Suno AI</h4>
                <p class="text-zinc-400 text-sm mb-2">
                  Génération de musique complète avec lyrics. Idéal pour les démos et l'inspiration.
                </p>
                <ul class="text-zinc-400 text-sm space-y-1">
                  <li>Prompt textuel descriptif</li>
                  <li>Lyrics personnalisés</li>
                  <li>Multiple styles disponibles</li>
                </ul>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Mureka AI</h4>
                <p class="text-zinc-400 text-sm mb-2">
                  Génération musicale avancée avec support vocal.
                </p>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Séparation de Stems</h4>
                <p class="text-zinc-400 text-sm">
                  Extrayez les éléments individuels (drums, bass, vocals, autres) de n'importe quel
                  fichier audio grâce à l'IA Demucs.
                </p>
              </UiCard>
            </div>
          </section>

          <section id="api" class="mb-16">
            <h2 class="text-2xl font-bold text-zinc-100 mb-4">API Reference</h2>

            <p class="text-zinc-400 mb-6">
              Ableton Copilot expose une API REST pour les développeurs. Documentation complète
              disponible prochainement.
            </p>

            <UiCard class="p-4 bg-amber-500/10 border-amber-500/20">
              <div class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p class="text-amber-200 text-sm">
                  L'API publique est en cours de développement. Contactez-nous pour un accès
                  anticipé.
                </p>
              </div>
            </UiCard>
          </section>

          <section id="faq" class="mb-16">
            <h2 class="text-2xl font-bold text-zinc-100 mb-4">FAQ</h2>

            <div class="space-y-4">
              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">
                  Ableton Copilot fonctionne-t-il avec d'autres DAW ?
                </h4>
                <p class="text-zinc-400 text-sm">
                  Non, actuellement Ableton Copilot est uniquement compatible avec Ableton Live 11+.
                  Le support d'autres DAW est envisagé pour le futur.
                </p>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">
                  Puis-je utiliser l'application hors-ligne ?
                </h4>
                <p class="text-zinc-400 text-sm">
                  Partiellement. Les fonctionnalités de génération MIDI locale et la bibliothèque de
                  sons fonctionnent hors-ligne. Les fonctionnalités IA cloud nécessitent une
                  connexion internet.
                </p>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Mes données sont-elles sécurisées ?</h4>
                <p class="text-zinc-400 text-sm">
                  Oui. Vos projets Ableton ne sont jamais envoyés sur nos serveurs. Seuls les
                  messages du chat sont traités par les API IA. Vos clés API sont stockées
                  localement.
                </p>
              </UiCard>

              <UiCard class="p-4">
                <h4 class="text-zinc-100 font-medium mb-2">Comment obtenir plus de crédits ?</h4>
                <p class="text-zinc-400 text-sm">
                  Vous pouvez acheter des packs de crédits ponctuels ou souscrire à un abonnement
                  mensuel. Le mode BYOK permet d'utiliser vos propres clés API pour des crédits
                  illimités.
                </p>
              </UiCard>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>
