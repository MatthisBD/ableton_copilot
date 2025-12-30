<script setup lang="ts">
import { Button, Card } from '@/components/ui';

const plans = [
  {
    name: 'FREE',
    price: '0',
    period: '/mois',
    description: 'Pour découvrir Ableton Copilot',
    features: [
      '100 crédits offerts',
      'Accès limité aux fonctionnalités',
      'Chat IA (modèles de base)',
      'Génération MIDI basique',
      'Support communautaire',
    ],
    cta: 'Commencer gratuitement',
    popular: false,
    available: true,
  },
  {
    name: 'BETA',
    price: '10',
    period: '/mois',
    description: 'Pour les early adopters',
    features: [
      '1000 crédits/mois',
      'Accès complet aux fonctionnalités',
      'Tous les modèles IA',
      'Génération audio (Suno, Mureka)',
      'Support prioritaire',
      'Nouveautés en avant-première',
    ],
    cta: "S'abonner",
    popular: true,
    available: true,
  },
  {
    name: 'PRO',
    price: '25',
    period: '/mois',
    description: 'Pour les producteurs sérieux',
    features: [
      '2500 crédits/mois',
      'Accès complet aux fonctionnalités',
      'Tous les modèles IA',
      'Génération audio illimitée',
      'Support prioritaire',
      'API access',
    ],
    cta: 'Non disponible en bêta',
    popular: false,
    available: false,
  },
  {
    name: 'ULTRA',
    price: '80',
    period: '/mois',
    description: 'Pour les studios professionnels',
    features: [
      'Crédits illimités',
      'Accès complet aux fonctionnalités',
      'Tous les modèles IA',
      'Support premium 24/7',
      'API access illimité',
      'Formation personnalisée',
    ],
    cta: 'Bientôt',
    popular: false,
    available: false,
  },
]

const creditPacks = [
  { credits: 100, price: '1.99' },
  { credits: 500, price: '9.99' },
  { credits: 1000, price: '14.99' },
  { credits: 5000, price: '49.99' },
]

const creditCosts = [
  { action: 'Message Gemini 2.5 Flash', cost: 5 },
  { action: 'Message GPT-4.1 Mini', cost: 7 },
  { action: 'Message GPT-5 Mini', cost: 9 },
  { action: 'Message Claude Haiku', cost: 10 },
  { action: 'Génération Mureka AI', cost: 45 },
  { action: 'Génération Suno AI', cost: 55 },
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
          <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Tarification simple et transparente
          </h1>
          <p class="text-xl text-zinc-400">
            Commencez gratuitement, évoluez selon vos besoins. Pas de frais cachés, annulez à tout
            moment.
          </p>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            v-for="plan in plans"
            :key="plan.name"
            class="p-6 relative flex flex-col"
            :class="plan.popular ? 'border-red-500/50 ring-1 ring-red-500/20' : ''"
          >
            <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span class="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-medium">
                Populaire
              </span>
            </div>

            <div v-if="!plan.available" class="absolute top-4 right-4">
              <span class="px-2 py-1 rounded bg-zinc-800 text-zinc-500 text-xs"> Bientôt </span>
            </div>

            <div class="mb-6">
              <h3 class="text-lg font-bold text-zinc-100 mb-2">{{ plan.name }}</h3>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-zinc-100">{{ plan.price }}</span>
                <span class="text-zinc-500">{{ plan.period }}</span>
              </div>
              <p class="text-sm text-zinc-400 mt-2">{{ plan.description }}</p>
            </div>

            <ul class="space-y-3 flex-1 mb-6">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-emerald-500 shrink-0"
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
                <span class="text-sm text-zinc-300">{{ feature }}</span>
              </li>
            </ul>

            <Button
              :variant="plan.popular ? 'default' : 'outline'"
              class="w-full"
              :disabled="!plan.available"
            >
              {{ plan.cta }}
            </Button>
          </Card>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <Card class="p-6 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border-purple-500/20">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 class="text-xl font-bold text-zinc-100 mb-2">Mode BYOK</h3>
              <p class="text-zinc-400">
                Utilisez vos propres clés API (OpenAI, Anthropic, Google) pour des appels illimités.
                Abonnement à 15€/mois pour 1500 crédits + accès aux fonctionnalités premium.
              </p>
            </div>
            <Button variant="outline" class="shrink-0"> En savoir plus </Button>
          </div>
        </Card>
      </div>
    </section>

    <section class="relative bg-zinc-950/50">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-zinc-100 mb-4">Packs de crédits</h2>
          <p class="text-zinc-400">Achetez des crédits supplémentaires sans abonnement</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Card
            v-for="pack in creditPacks"
            :key="pack.credits"
            class="p-6 text-center hover:border-zinc-700 transition-colors"
          >
            <div class="text-3xl font-bold text-zinc-100 mb-1">{{ pack.credits }}</div>
            <div class="text-sm text-zinc-500 mb-4">crédits</div>
            <div
              class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500"
            >
              {{ pack.price }}
            </div>
          </Card>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-zinc-100 mb-4">Coût des opérations</h2>
          <p class="text-zinc-400">Chaque action consomme un nombre de crédits différent</p>
        </div>

        <Card class="max-w-2xl mx-auto overflow-hidden">
          <table class="w-full">
            <thead class="bg-zinc-800/50">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold text-zinc-100">Action</th>
                <th class="px-6 py-3 text-right text-sm font-semibold text-zinc-100">Crédits</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in creditCosts"
                :key="item.action"
                :class="index % 2 === 0 ? 'bg-zinc-800/20' : ''"
              >
                <td class="px-6 py-3 text-sm text-zinc-300">{{ item.action }}</td>
                <td class="px-6 py-3 text-sm text-zinc-100 text-right font-medium">
                  {{ item.cost }}
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-zinc-100 mb-4">Questions fréquentes</h2>
        </div>

        <div class="grid gap-4 max-w-3xl mx-auto">
          <Card class="p-6">
            <h3 class="text-zinc-100 font-medium mb-2">Puis-je changer de plan à tout moment ?</h3>
            <p class="text-zinc-400 text-sm">
              Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les crédits
              non utilisés sont reportés au mois suivant.
            </p>
          </Card>

          <Card class="p-6">
            <h3 class="text-zinc-100 font-medium mb-2">
              Que se passe-t-il si j'épuise mes crédits ?
            </h3>
            <p class="text-zinc-400 text-sm">
              Vous pouvez acheter des packs de crédits supplémentaires ou attendre le renouvellement
              mensuel. Les fonctionnalités locales restent accessibles.
            </p>
          </Card>

          <Card class="p-6">
            <h3 class="text-zinc-100 font-medium mb-2">Y a-t-il une période d'essai ?</h3>
            <p class="text-zinc-400 text-sm">
              Le plan FREE avec 100 crédits offerts fait office de période d'essai. Aucune carte
              bancaire n'est requise pour commencer.
            </p>
          </Card>

          <Card class="p-6">
            <h3 class="text-zinc-100 font-medium mb-2">Comment fonctionne le mode BYOK ?</h3>
            <p class="text-zinc-400 text-sm">
              Le mode "Bring Your Own Keys" vous permet d'utiliser vos propres clés API pour les
              services IA. Vous payez directement aux fournisseurs (OpenAI, Anthropic, etc.) et
              bénéficiez d'appels illimités.
            </p>
          </Card>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <Card
          class="p-12 text-center bg-gradient-to-r from-red-500/10 to-pink-500/10 border-red-500/20"
        >
          <h2 class="text-3xl font-bold text-zinc-100 mb-4">Prêt à commencer ?</h2>
          <p class="text-zinc-400 text-lg mb-8 max-w-lg mx-auto">
            Téléchargez Ableton Copilot gratuitement et recevez 100 crédits offerts.
          </p>
          <router-link to="/download">
            <Button size="lg">
              Télécharger maintenant
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </Button>
          </router-link>
        </Card>
      </div>
    </section>
  </div>
</template>
