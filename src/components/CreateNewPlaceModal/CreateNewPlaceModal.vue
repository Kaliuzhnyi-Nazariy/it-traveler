<script setup>
import { computed, reactive, toRaw } from 'vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../Icons/MarkerIcon.vue'
import IInput from '../IImput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
// import { onMounted } from 'vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean
  },
  isLoading: {
    default: false,
    type: Boolean
  },
  error: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'submit'])

const formData = reactive({
  location: '',
  description: '',
  img: ''
})

const uploadText = computed(() => {
  return formData.img ? 'Click for changing a photo' : 'Click for adding a photo'
})

const handleURL = (url) => {
  formData.img = url
}

const resetForm = () => {
  formData.location = ''
  formData.img = ''
  formData.description = ''
}

// onMounted(() => {})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form class="min-w-[420px]" @submit.prevent="emit('submit', toRaw(formData), resetForm)">
      <h2 class="flex gap-2 justify-center font-bold text-center mb-10">
        <MarkerIcon /> Add marker
      </h2>
      <IInput label="Location" class="mb-4" v-model="formData.location" />
      <IInput label="Description" type="textarea" v-model="formData.description" />
      <div class="flex items-center gap-2 mb-10">
        <img v-if="formData.img" :src="formData.img" alt="preview" class="w-8 h-8 object-cover" />
        <InputImage @uploaded="handleURL">{{ uploadText }}</InputImage>
      </div>
      <IButton variant="gradient" class="w-full" :is-loading="props.isLoading">Add</IButton>
      <div class="text-red-500" v-if="props.error">Something went wrong!</div>
    </form>
  </IModal>
</template>
