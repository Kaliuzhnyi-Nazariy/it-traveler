<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IImput/IInput.vue'
import { reactive, toRaw } from 'vue'

const emit = defineEmits(['submit'])

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})

const userData = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Full name" v-model="userData.name" />
    <IInput class="mb-4" label="Email" placeholder="email@email.com" v-model="userData.email" />
    <IInput label="Password" type="password" v-model="userData.password" />
    <IButton variant="gradient" class="w-full mt-10" type="submit" :is-loading="props.isLoading">
      Create account
    </IButton>
  </form>
</template>
