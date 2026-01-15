<script setup lang="ts">
import { onMounted, ref } from 'vue'

withDefaults(
  defineProps<{
    adSlot: string
    adFormat?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
    fullWidth?: boolean
  }>(),
  {
    adFormat: 'auto',
    fullWidth: true,
  }
)

const adRef = ref<HTMLElement | null>(null)
const isLoaded = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined' && window.adsbygoogle && adRef.value) {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      isLoaded.value = true
    } catch (e) {
      console.warn('AdSense not loaded:', e)
    }
  }
})
</script>

<template>
  <div class="ad-container my-4" :class="{ 'w-full': fullWidth }">
    <ins
      ref="adRef"
      class="adsbygoogle"
      :style="{ display: 'block' }"
      data-ad-client="ca-pub-5892017890481993"
      :data-ad-slot="adSlot"
      :data-ad-format="adFormat"
      :data-full-width-responsive="fullWidth"
    />
  </div>
</template>

<style scoped>
.ad-container {
  min-height: 90px;
  background: transparent;
}
</style>
