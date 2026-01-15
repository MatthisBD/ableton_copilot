<script setup lang="ts">
useSeoMeta({
  title: 'Contact - Ableton Copilot',
  description:
    'Contactez l\'equipe Ableton Copilot. Questions, bugs, suggestions - nous sommes la pour vous aider.',
  ogTitle: 'Contact - Ableton Copilot',
  ogDescription: 'Contactez-nous pour toute question ou suggestion.',
  ogImage: 'https://ableton-copilot.com/og-contact.png',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Contact - Ableton Copilot',
    description: 'Page de contact d\'Ableton Copilot.',
  }),
])

const config = useRuntimeConfig()
const WEB3FORMS_ACCESS_KEY = config.public.web3formsAccessKey

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const subjects = [
  { value: 'general', label: 'Question générale' },
  { value: 'bug', label: 'Signaler un bug' },
  { value: 'feature', label: 'Suggestion de fonctionnalité' },
  { value: 'billing', label: 'Facturation / Abonnement' },
  { value: 'partnership', label: 'Partenariat / Collaboration' },
  { value: 'other', label: 'Autre' },
]

const isFormValid = computed(() => {
  return (
    formData.value.name.trim() !== '' &&
    formData.value.email.trim() !== '' &&
    formData.value.subject !== '' &&
    formData.value.message.trim() !== ''
  )
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  if (!isFormValid.value) return

  isSubmitting.value = true
  submitError.value = ''
  submitSuccess.value = false

  try {
    const subjectLabel =
      subjects.find((s) => s.value === formData.value.subject)?.label || 'Contact'

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `[Ableton Copilot] ${subjectLabel}`,
        from_name: 'Ableton Copilot Contact Form',
        name: formData.value.name,
        email: formData.value.email,
        category: subjectLabel,
        message: formData.value.message,
      }),
    })

    const result = await response.json()

    if (result.success) {
      submitSuccess.value = true
      formData.value = { name: '', email: '', subject: '', message: '' }
    } else {
      submitError.value = result.message || "Une erreur s'est produite. Veuillez réessayer."
    }
  } catch {
    submitError.value = "Une erreur s'est produite. Veuillez réessayer."
  } finally {
    isSubmitting.value = false
  }
}

const githubIssueUrl = 'https://github.com/MatthisBD/ableton_copilot/issues/new'

const openGithubIssue = (type: 'bug' | 'feature') => {
  const templates = {
    bug: `${githubIssueUrl}?template=bug_report.md&title=[Bug]%20`,
    feature: `${githubIssueUrl}?template=feature_request.md&title=[Feature]%20`,
  }
  window.open(templates[type], '_blank')
}
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent pointer-events-none"
      />

      <div class="max-w-7xl mx-auto px-6 py-12 relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">Contactez-nous</h1>
          <p class="text-xl text-zinc-400">
            Une question, un bug à signaler ou une suggestion ? Nous sommes là pour vous aider.
          </p>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <UiCard class="p-8">
              <h2 class="text-2xl font-bold text-zinc-100 mb-6">Envoyez-nous un message</h2>

              <div
                v-if="submitSuccess"
                class="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
              >
                <div class="flex items-center gap-3">
                  <svg
                    class="w-5 h-5 text-emerald-500"
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
                  <p class="text-emerald-200">
                    Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus
                    brefs délais.
                  </p>
                </div>
              </div>

              <div
                v-if="submitError"
                class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
              >
                <p class="text-red-200">{{ submitError }}</p>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-zinc-300 mb-2">
                      Nom <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-zinc-300 mb-2">
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-zinc-300 mb-2">
                    Sujet <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    v-model="formData.subject"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition"
                  >
                    <option value="" disabled>Sélectionnez un sujet</option>
                    <option v-for="subject in subjects" :key="subject.value" :value="subject.value">
                      {{ subject.label }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-zinc-300 mb-2">
                    Message <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <div class="flex items-center justify-between">
                  <p class="text-sm text-zinc-500">
                    <span class="text-red-500">*</span> Champs obligatoires
                  </p>
                  <UiButton type="submit" :disabled="!isFormValid || isSubmitting">
                    <span v-if="isSubmitting">Envoi en cours...</span>
                    <span v-else>Envoyer le message</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </UiButton>
                </div>
              </form>
            </UiCard>
          </div>

          <div class="space-y-6">
            <UiCard class="p-6">
              <h3 class="text-lg font-semibold text-zinc-100 mb-4">Signaler un bug</h3>
              <p class="text-zinc-400 text-sm mb-4">
                Vous avez trouvé un bug ? Ouvrez une issue sur GitHub pour nous aider à l'identifier
                et le corriger rapidement.
              </p>
              <UiButton variant="outline" class="w-full" @click="openGithubIssue('bug')">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Signaler un bug sur GitHub
              </UiButton>
            </UiCard>

            <UiCard class="p-6">
              <h3 class="text-lg font-semibold text-zinc-100 mb-4">Proposer une fonctionnalité</h3>
              <p class="text-zinc-400 text-sm mb-4">
                Vous avez une idée pour améliorer Ableton Copilot ? Partagez-la avec nous sur
                GitHub.
              </p>
              <UiButton variant="outline" class="w-full" @click="openGithubIssue('feature')">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Proposer sur GitHub
              </UiButton>
            </UiCard>

            <UiCard class="p-6">
              <h3 class="text-lg font-semibold text-zinc-100 mb-4">Autres moyens de contact</h3>
              <div class="space-y-4">
                <a
                  href="mailto:ableton.copilot@gmail.com"
                  class="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition"
                >
                  <div class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-zinc-100">Email</p>
                    <p class="text-sm">ableton.copilot@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://discord.gg/EPYGKa3Rkz"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition"
                >
                  <div class="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-zinc-100">Discord</p>
                    <p class="text-sm">Rejoindre la communauté</p>
                  </div>
                </a>
              </div>
            </UiCard>

            <UiCard
              class="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20"
            >
              <div class="flex items-start gap-3">
                <svg
                  class="w-5 h-5 text-amber-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 class="text-amber-200 font-medium mb-1">Temps de réponse</h4>
                  <p class="text-amber-200/70 text-sm">
                    Nous répondons généralement sous 24-48h en jours ouvrés. Pour les bugs
                    critiques, utilisez GitHub Issues.
                  </p>
                </div>
              </div>
            </UiCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
