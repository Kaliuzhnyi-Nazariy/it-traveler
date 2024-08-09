<script setup>
import { authService } from '@/authService/authService'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { useMutatuion } from '@/composables/useMutation'
import { useRouter } from 'vue-router'

const redirect = useRouter()

const {
  isLoading,
  error,
  mutation: handleSubmit
} = useMutatuion({
  mutationFn: (data) => authService.login(data),
  onSuccess: () => redirect.replace('/map')
})
</script>

<template>
  <LoginForm @submit="handleSubmit" :is-loading="isLoading" />
  <div class="text-red-500" v-if="error">{{ error.message }}</div>
</template>
