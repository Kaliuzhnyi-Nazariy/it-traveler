<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String, //for type this prop
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    }
  }
})

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
})
</script>

<template>
  <button class="rounded-[14px] py-3 px-10 text-white font-bold -tracking-wider" :class="bgStyles">
    <!-- <div v-if="$slots.default">It's default</div> -->
    <slot>Click me!</slot>
  </button>
</template>
