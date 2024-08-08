<script setup>
import { computed, defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String, //for type this prop
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    }
  },
  to: String,
  isLoading: {
    default: false,
    type: Boolean
  }
})

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
})

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return props.to ? RouterLink : 'button'
})

const link = computed(() => {
  return isLink.value ? props.to : undefined
})
</script>

<template>
  <component
    :is="componentName"
    class="rounded-[14px] py-3 px-10 text-white font-bold -tracking-wider"
    :class="bgStyles"
    :to="link"
  >
    <!-- <div v-if="$slots.default">It's default</div> -->
    <template v-if="props.isLoading"> Loading... </template>
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>
