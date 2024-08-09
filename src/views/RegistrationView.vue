<script setup>
import FormRegistration from '@/components/Auth/FormRegistration/FormRegistration.vue'
import { useRouter } from 'vue-router'
import { useMutatuion } from '@/composables/useMutation'
import { authService } from '@/authService/authService'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleRegUser
} = useMutatuion({
  mutationFn: (data) => authService.register(data),
  onSuccess: () => router.replace('/map')
})
</script>

<template>
  <FormRegistration @submit="handleRegUser" :is-loading="isLoading" />
  <div class="text-red-500" v-if="error">{{ error.message }}</div>
</template>
