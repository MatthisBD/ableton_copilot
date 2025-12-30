<script setup lang="ts">
import { TheNavbar, TheFooter } from '@/components/layout'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar />
    <main class="flex-1 pt-[73px]">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>
