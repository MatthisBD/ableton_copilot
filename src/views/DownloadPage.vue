<script setup lang="ts">
import { Button, Card } from '@/components/ui'

const currentVersion = '1.0.0-beta'
const releaseDate = '30 Décembre 2025'

const systemRequirements = [
  { label: 'Système d\'exploitation', value: 'Windows 10/11 (64-bit)' },
  { label: 'Processeur', value: 'Intel Core i5 ou équivalent' },
  { label: 'Mémoire', value: '8 Go RAM minimum' },
  { label: 'Espace disque', value: '500 Mo disponibles' },
  { label: 'DAW requis', value: 'Ableton Live 11 ou supérieur' },
  { label: 'Connexion', value: 'Internet pour les fonctionnalités IA cloud' },
]

const changelog = [
  {
    version: '1.0.0-beta',
    date: '30/12/2025',
    changes: [
      'Version initiale bêta',
      'Chat IA multi-provider (Claude, GPT, Gemini)',
      'Génération MIDI (mélodie, accords, bass, drums)',
      'Intégration Suno AI et Mureka AI',
      'Contrôle direct Ableton Live via AbletonJS',
      'Bibliothèque de sons avec 21 genres',
      'Gestionnaire de samples local et Freesound',
    ],
  },
]

const downloadUrl = 'https://github.com/your-username/ableton-copilot/releases/latest/download/AbletonCopilot-Setup.exe'
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 py-24 relative">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Version {{ currentVersion }} disponible
          </div>

          <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Télécharger Ableton Copilot
          </h1>

          <p class="text-xl text-zinc-400 mb-10">
            Commencez à produire avec l'assistance IA en quelques minutes.
            Gratuit avec 100 crédits offerts.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a :href="downloadUrl" target="_blank" rel="noopener">
              <Button size="lg" class="min-w-[240px]">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                Télécharger pour Windows
              </Button>
            </a>
          </div>

          <p class="text-zinc-500 text-sm">
            Version {{ currentVersion }} | Sortie le {{ releaseDate }} | ~150 Mo
          </p>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-zinc-100 mb-6">Configuration requise</h2>
            <Card class="overflow-hidden">
              <table class="w-full">
                <tbody>
                  <tr v-for="(req, index) in systemRequirements" :key="req.label" :class="index % 2 === 0 ? 'bg-zinc-800/30' : ''">
                    <td class="px-4 py-3 text-sm font-medium text-zinc-400">{{ req.label }}</td>
                    <td class="px-4 py-3 text-sm text-zinc-100">{{ req.value }}</td>
                  </tr>
                </tbody>
              </table>
            </Card>

            <Card class="mt-6 p-4 bg-amber-500/10 border-amber-500/20">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 class="text-amber-200 font-medium mb-1">macOS bientôt disponible</h4>
                  <p class="text-amber-200/70 text-sm">
                    La version macOS est en cours de développement.
                    Inscrivez-vous à notre newsletter pour être notifié.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-zinc-100 mb-6">Instructions d'installation</h2>
            <div class="space-y-4">
              <Card class="p-4">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 class="text-zinc-100 font-medium mb-1">Télécharger l'installateur</h4>
                    <p class="text-zinc-400 text-sm">
                      Cliquez sur le bouton ci-dessus pour télécharger le fichier .exe
                    </p>
                  </div>
                </div>
              </Card>

              <Card class="p-4">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 class="text-zinc-100 font-medium mb-1">Exécuter l'installation</h4>
                    <p class="text-zinc-400 text-sm">
                      Double-cliquez sur le fichier et suivez les instructions.
                      Acceptez les permissions demandées.
                    </p>
                  </div>
                </div>
              </Card>

              <Card class="p-4">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 class="text-zinc-100 font-medium mb-1">Configurer AbletonJS</h4>
                    <p class="text-zinc-400 text-sm">
                      Dans l'application, allez dans Dashboard et installez le script AbletonJS
                      pour permettre le contrôle d'Ableton Live.
                    </p>
                  </div>
                </div>
              </Card>

              <Card class="p-4">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-sm shrink-0">
                    4
                  </div>
                  <div>
                    <h4 class="text-zinc-100 font-medium mb-1">Créer un compte</h4>
                    <p class="text-zinc-400 text-sm">
                      Inscrivez-vous gratuitement pour recevoir 100 crédits
                      et commencer à utiliser l'IA.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-zinc-950/50">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <h2 class="text-2xl font-bold text-zinc-100 mb-6">Historique des versions</h2>

        <div class="space-y-6">
          <Card v-for="release in changelog" :key="release.version" class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold text-zinc-100">Version {{ release.version }}</h3>
                <p class="text-sm text-zinc-500">{{ release.date }}</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                Latest
              </span>
            </div>
            <ul class="space-y-2">
              <li v-for="change in release.changes" :key="change" class="flex items-start gap-2 text-sm text-zinc-400">
                <svg class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ change }}
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <Card class="p-8 text-center bg-gradient-to-r from-zinc-800/50 to-zinc-900/50">
          <h2 class="text-2xl font-bold text-zinc-100 mb-4">Besoin d'aide ?</h2>
          <p class="text-zinc-400 mb-6 max-w-lg mx-auto">
            Consultez notre documentation complète ou rejoignez notre communauté Discord
            pour obtenir de l'aide.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link to="/docs">
              <Button variant="outline">
                Voir la documentation
              </Button>
            </router-link>
            <a href="https://discord.gg" target="_blank" rel="noopener">
              <Button variant="ghost">
                Rejoindre Discord
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>
