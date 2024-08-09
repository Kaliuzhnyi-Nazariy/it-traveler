<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IImput/IInput.vue'

import { reactive, toRaw } from 'vue'

const props = defineProps({
  isLoading: {
    required: true,
    default: false,
    type: Boolean
  }
})
const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Email" placeholder="Email" v-model="userData.email" />
    <IInput type="password" label="Password" placeholder="Password" v-model="userData.password" />
    <IButton variant="gradient" class="w-full" type="submit" :is-loading="props.isLoading">
      Login
    </IButton>
  </form>
</template>
