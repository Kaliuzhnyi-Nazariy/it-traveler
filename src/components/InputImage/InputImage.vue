<script setup>
import { ref } from 'vue'
import UploadIcon from './UploadIcon.vue'

const emit = defineEmits(['uploaded'])
const errorMessage = ref('')

const hadleUploadFile = (e) => {
  const file = e.target.files[0]
  const fileReader = new FileReader()

  if (file.size > 3 * 1024 * 1024) {
    errorMessage.value = 'Too big to fit!'
    return
  }

  fileReader.readAsDataURL(file)

  fileReader.onload = () => {
    errorMessage.value = ''
    emit('uploaded', fileReader.result)
  }
}
</script>

<template>
  <label class="cursor-pointer hover:text-primary">
    <input type="file" accept="image/*" class="hidden" @change="hadleUploadFile" />
    <span class="flex gap-1 items-center">
      <UploadIcon />
      <span class="text-xs underline"><slot></slot></span>
    </span>
  </label>
  <span class="text-red-500">{{ errorMessage }}</span>
</template>
