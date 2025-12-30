<template>
  <div :class="cn('rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>
