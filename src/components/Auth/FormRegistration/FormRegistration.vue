<script setup lang="ts">
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IImput/IInput.vue'
import { reactive, toRaw } from 'vue'
import FormContainer from '../FormContainer.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Full name" v-model="userData.name" />
    <IInput class="mb-4" label="Email" placeholder="email@email.com" v-model="userData.email" />
    <IInput label="Password" type="password" v-model="userData.password" />
    <IButton variant="gradient" class="w-full mt-10" type="submit">Create account</IButton>
  </FormContainer>
</template>
