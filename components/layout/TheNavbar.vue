<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/features', label: 'Fonctionnalités' },
  { path: '/demo', label: 'Démo' },
  { path: '/docs', label: 'Documentation' },
  { path: '/pricing', label: 'Tarifs' },
  { path: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-800">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition group">
          <img
            src="/logo.png"
            alt="Ableton Copilot"
            class="w-10 h-10 rounded-xl shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-shadow"
          />
          <span class="text-xl font-bold text-zinc-100">
            Ableton <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Copilot</span>
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="route.path === link.path
              ? 'bg-red-500/10 text-red-500'
              : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="hidden md:flex items-center gap-3">
          <NuxtLink to="/download">
            <UiButton>
              Télécharger
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </UiButton>
          </NuxtLink>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition text-zinc-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden mt-4 pb-4 border-t border-zinc-800 pt-4">
        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-3 rounded-lg text-sm font-medium transition"
            :class="route.path === link.path
              ? 'bg-red-500/10 text-red-500'
              : 'text-zinc-400 hover:bg-zinc-800'"
            @click="toggleMenu"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/download" @click="toggleMenu" class="mt-2">
            <UiButton class="w-full">
              Télécharger
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </UiButton>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
