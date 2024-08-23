<script setup>
import IButton from '../IButton/IButton.vue'
import IModal from '../IModal/IModal.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true
  },
  title: {
    type: String,
    default: '',
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['cancel', 'confirm'])
</script>

<template>
  <IModal v-if="isOpen" @close="emit('close')">
    <div class="mb-4 text-lg">
      {{ title }}
    </div>
    <div class="flex gap-3 justify-center">
      <IButton @click="emit('cancel')">Cancel</IButton>
      <IButton variant="gradient" @click="emit('confirm')" :is-loading="isLoading">Confirm</IButton>
    </div>
    <div v-if="hasError" class="text-red-500">Something went wrong!</div>
  </IModal>
</template>
