<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Card } from '@/components/ui'

const activeSection = ref('mentions')

const sections = [
  { id: 'mentions', label: 'Mentions légales' },
  { id: 'privacy', label: 'Politique de confidentialité' },
  { id: 'terms', label: 'Conditions d\'utilisation' },
  { id: 'cookies', label: 'Politique de cookies' },
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
    }
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
          <h3 class="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Legal</h3>
          <nav class="space-y-1">
            <button
              v-for="section in sections"
              :key="section.id"
              @click="scrollToSection(section.id)"
              class="block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
              :class="activeSection === section.id
                ? 'bg-red-500/10 text-red-500 font-medium'
                : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'"
            >
              {{ section.label }}
            </button>
          </nav>
        </div>
      </aside>

      <main class="flex-1 min-w-0">
        <section id="mentions" class="mb-16">
          <h1 class="text-4xl font-bold text-zinc-100 mb-6">Mentions Légales</h1>

          <Card class="p-6 bg-amber-500/10 border-amber-500/20 mb-8">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h4 class="text-amber-200 font-medium mb-1">En cours de rédaction</h4>
                <p class="text-amber-200/70 text-sm">
                  Les mentions légales complètes seront publiées prochainement.
                  Cette page sert de placeholder.
                </p>
              </div>
            </div>
          </Card>

          <div class="prose prose-invert prose-zinc max-w-none">
            <h2 class="text-xl font-semibold text-zinc-100 mb-4">Éditeur du site</h2>
            <Card class="p-4 mb-6">
              <p class="text-zinc-400 text-sm">
                [Nom de l'entreprise ou du développeur]<br />
                [Adresse]<br />
                [Email de contact]<br />
                [Numéro SIRET si applicable]
              </p>
            </Card>

            <h2 class="text-xl font-semibold text-zinc-100 mb-4">Hébergement</h2>
            <Card class="p-4 mb-6">
              <p class="text-zinc-400 text-sm">
                GitHub Pages<br />
                GitHub, Inc.<br />
                88 Colin P Kelly Jr St<br />
                San Francisco, CA 94107, USA
              </p>
            </Card>

            <h2 class="text-xl font-semibold text-zinc-100 mb-4">Propriété intellectuelle</h2>
            <p class="text-zinc-400 mb-4">
              Ableton Copilot est une marque déposée. Le code source de l'application
              est distribué sous licence MIT. Les logos et icônes sont protégés par
              le droit d'auteur.
            </p>
            <p class="text-zinc-400 mb-4">
              "Ableton" et "Ableton Live" sont des marques déposées d'Ableton AG.
              Ableton Copilot n'est pas affilié à Ableton AG.
            </p>
          </div>
        </section>

        <section id="privacy" class="mb-16">
          <h2 class="text-2xl font-bold text-zinc-100 mb-6">Politique de confidentialité</h2>

          <div class="prose prose-invert prose-zinc max-w-none space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Données collectées</h3>
              <p class="text-zinc-400">
                Nous collectons les données suivantes pour le fonctionnement du service :
              </p>
              <ul class="text-zinc-400 mt-2 space-y-1">
                <li>Adresse email (pour la création de compte)</li>
                <li>Nom d'utilisateur</li>
                <li>Messages envoyés au chat IA (pour le traitement par les API)</li>
                <li>Données de paiement (traitées par Stripe)</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Utilisation des données</h3>
              <p class="text-zinc-400">
                Vos données sont utilisées uniquement pour :
              </p>
              <ul class="text-zinc-400 mt-2 space-y-1">
                <li>Fournir le service Ableton Copilot</li>
                <li>Traiter vos paiements</li>
                <li>Vous envoyer des notifications importantes</li>
                <li>Améliorer le service (données anonymisées)</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Partage des données</h3>
              <p class="text-zinc-400">
                Vos messages de chat sont envoyés aux fournisseurs d'IA (Anthropic, OpenAI, Google)
                pour le traitement. Vos projets Ableton ne sont jamais envoyés sur nos serveurs.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Sécurité</h3>
              <p class="text-zinc-400">
                Nous utilisons le chiffrement SSL/TLS pour toutes les communications.
                Vos clés API personnelles sont stockées localement sur votre machine.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Vos droits</h3>
              <p class="text-zinc-400">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
                de suppression et de portabilité de vos données. Contactez-nous pour exercer ces droits.
              </p>
            </div>
          </div>
        </section>

        <section id="terms" class="mb-16">
          <h2 class="text-2xl font-bold text-zinc-100 mb-6">Conditions d'utilisation</h2>

          <div class="prose prose-invert prose-zinc max-w-none space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Acceptation des conditions</h3>
              <p class="text-zinc-400">
                En utilisant Ableton Copilot, vous acceptez les présentes conditions d'utilisation.
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le service.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Description du service</h3>
              <p class="text-zinc-400">
                Ableton Copilot est un assistant IA pour la production musicale.
                Le service est fourni "tel quel" sans garantie de disponibilité ou de résultats.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Utilisation acceptable</h3>
              <p class="text-zinc-400">
                Vous vous engagez à utiliser le service de manière légale et éthique.
                Il est interdit d'utiliser le service pour :
              </p>
              <ul class="text-zinc-400 mt-2 space-y-1">
                <li>Générer du contenu illégal ou préjudiciable</li>
                <li>Contourner les limitations du service</li>
                <li>Revendre l'accès au service</li>
                <li>Compromettre la sécurité du service</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Propriété du contenu</h3>
              <p class="text-zinc-400">
                Vous conservez la propriété des œuvres musicales que vous créez avec Ableton Copilot.
                Les générations IA sont soumises aux conditions des fournisseurs respectifs.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Limitation de responsabilité</h3>
              <p class="text-zinc-400">
                Ableton Copilot ne peut être tenu responsable des dommages directs ou indirects
                résultant de l'utilisation du service.
              </p>
            </div>
          </div>
        </section>

        <section id="cookies" class="mb-16">
          <h2 class="text-2xl font-bold text-zinc-100 mb-6">Politique de cookies</h2>

          <div class="prose prose-invert prose-zinc max-w-none space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Qu'est-ce qu'un cookie ?</h3>
              <p class="text-zinc-400">
                Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Cookies utilisés</h3>
              <Card class="p-4">
                <ul class="text-zinc-400 text-sm space-y-2">
                  <li>
                    <strong class="text-zinc-100">Cookies essentiels:</strong>
                    Nécessaires au fonctionnement du site (authentification, préférences)
                  </li>
                  <li>
                    <strong class="text-zinc-100">Cookies analytiques:</strong>
                    Pour comprendre l'utilisation du site (anonymisés)
                  </li>
                </ul>
              </Card>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Gestion des cookies</h3>
              <p class="text-zinc-400">
                Vous pouvez configurer votre navigateur pour refuser les cookies.
                Notez que cela peut affecter le fonctionnement de certaines fonctionnalités.
              </p>
            </div>
          </div>
        </section>

        <Card class="p-6 bg-zinc-800/50">
          <p class="text-zinc-400 text-sm">
            Dernière mise à jour : 30 Décembre 2025
          </p>
          <p class="text-zinc-500 text-sm mt-2">
            Pour toute question concernant ces documents, contactez-nous à
            <a href="mailto:ableton.copilot@gmail.com" class="text-red-500 hover:underline">ableton.copilot@gmail.com</a>
          </p>
        </Card>
      </main>
    </div>
  </div>
</template>
