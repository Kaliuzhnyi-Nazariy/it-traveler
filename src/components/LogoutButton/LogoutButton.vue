<script setup lang="ts">
import { useMutatuion } from '@/composables/useMutation'
import LogoutButtonIcon from './LogoutButtonIcon.vue'
import { logout } from '@/api/user'
import { useRouter } from 'vue-router'
import { authService } from '@/authService/authService'

const router = useRouter()

const { mutation: logoutUser, isLoading } = useMutatuion({
  mutationFn: () => logout(),
  onSuccess: () => {
    authService.clearToken()
    router.replace('/auth/login')
  }
})
</script>

<template>
  <button class="flex gap-2 items-center px-6 text-black" @click="logoutUser">
    <span v-if="isLoading">Loading...</span>
    <span v-else>Logout</span>
    <LogoutButtonIcon />
  </button>
</template>
