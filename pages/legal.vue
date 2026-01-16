<script setup lang="ts">
useSeoMeta({
  title: 'Mentions Légales - Ableton Copilot',
  description:
    "Mentions legales, politique de confidentialite, conditions d'utilisation et politique de cookies d'Ableton Copilot.",
  ogTitle: 'Mentions Légales - Ableton Copilot',
  ogDescription: 'Informations legales et politique de confidentialite.',
  twitterCard: 'summary',
})

useSchemaOrg([
  defineWebPage({
    name: 'Mentions Légales - Ableton Copilot',
    description: "Informations legales d'Ableton Copilot.",
  }),
])

const activeSection = ref('mentions')

const sections = [
  { id: 'mentions', label: 'Mentions légales' },
  { id: 'privacy', label: 'Politique de confidentialité' },
  { id: 'terms', label: "Conditions d'utilisation" },
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
          <h3 class="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">Legal</h3>
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
        <section id="mentions" class="mb-16">
          <h1 class="text-4xl font-bold text-zinc-100 mb-6">Mentions Légales</h1>

          <div class="prose prose-invert prose-zinc max-w-none">
            <h2 class="text-xl font-semibold text-zinc-100 mb-4">Éditeur du site</h2>
            <UiCard class="p-4 mb-6">
              <div class="text-zinc-400 text-sm space-y-1">
                <p><strong class="text-zinc-300">Entreprise individuelle</strong></p>
                <p>SIRET : 97903881700016</p>
                <p>Email : ableton.copilot@gmail.com</p>
                <p>Directeur de la publication : Matthis Music</p>
              </div>
            </UiCard>

            <h2 class="text-xl font-semibold text-zinc-100 mb-4">Hébergement</h2>
            <UiCard class="p-4 mb-6">
              <p class="text-zinc-400 text-sm">
                Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789, USA
              </p>
            </UiCard>

            <h2 class="text-xl font-semibold text-zinc-100 mb-4">Propriété intellectuelle</h2>
            <p class="text-zinc-400 mb-4">
              Ableton Copilot est une marque déposée. Le code source de l'application est distribué
              sous licence MIT. Les logos et icônes sont protégés par le droit d'auteur.
            </p>
            <p class="text-zinc-400 mb-4">
              "Ableton" et "Ableton Live" sont des marques déposées d'Ableton AG. Ableton Copilot
              n'est pas affilié à Ableton AG.
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
              <p class="text-zinc-400">Vos données sont utilisées uniquement pour :</p>
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
                Nous utilisons le chiffrement SSL/TLS pour toutes les communications. Vos clés API
                personnelles sont stockées localement sur votre machine.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Vos droits (RGPD)</h3>
              <p class="text-zinc-400 mb-2">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul class="text-zinc-400 mt-2 space-y-1">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p class="text-zinc-400 mt-3">
                Pour exercer ces droits, contactez-nous à ableton.copilot@gmail.com. Vous pouvez également déposer une réclamation auprès de la CNIL (cnil.fr).
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Publicité et cookies tiers</h3>
              <p class="text-zinc-400">
                Ce site utilise Google AdSense pour afficher des publicités. Google et ses partenaires peuvent utiliser des cookies pour diffuser des annonces basées sur vos visites antérieures. Vous pouvez désactiver la publicité personnalisée dans les paramètres de votre compte Google.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Conservation des données</h3>
              <p class="text-zinc-400">
                Vos données sont conservées pendant la durée de votre utilisation du service et jusqu'à 3 ans après la suppression de votre compte, conformément aux obligations légales.
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
                Ableton Copilot est un assistant IA pour la production musicale. Le service est
                fourni "tel quel" sans garantie de disponibilité ou de résultats.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Utilisation acceptable</h3>
              <p class="text-zinc-400">
                Vous vous engagez à utiliser le service de manière légale et éthique. Il est
                interdit d'utiliser le service pour :
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
                Vous conservez la propriété des œuvres musicales que vous créez avec Ableton
                Copilot. Les générations IA sont soumises aux conditions des fournisseurs
                respectifs.
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
                Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite
                d'un site web.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Cookies utilisés</h3>
              <UiCard class="p-4">
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
              </UiCard>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-zinc-100 mb-3">Gestion des cookies</h3>
              <p class="text-zinc-400">
                Vous pouvez configurer votre navigateur pour refuser les cookies. Notez que cela
                peut affecter le fonctionnement de certaines fonctionnalités.
              </p>
            </div>
          </div>
        </section>

        <UiCard class="p-6 bg-zinc-800/50">
          <p class="text-zinc-400 text-sm">Dernière mise à jour : 16 janvier 2026</p>
          <p class="text-zinc-500 text-sm mt-2">
            Pour toute question concernant ces documents, contactez-nous à
            <a href="mailto:ableton.copilot@gmail.com" class="text-red-500 hover:underline"
              >ableton.copilot@gmail.com</a
            >
          </p>
        </UiCard>
      </main>
    </div>
  </div>
</template>
