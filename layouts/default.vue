<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutTheNavbar />
    <main class="flex-1 pt-[73px]">
      <slot />
    </main>
    <LayoutTheFooter />
  </div>
</template>
