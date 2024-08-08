<script setup>
import FormRegistration from '@/components/Auth/FormRegistration/FormRegistration.vue'
import { register } from '@/api/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isLoading = ref(false)

const handleRegUser = async (userData) => {
  isLoading.value = true
  try {
    await register(userData)
    router.replace('/map')
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <FormRegistration @submit="handleRegUser" :is-loading="isLoading" />
</template>
