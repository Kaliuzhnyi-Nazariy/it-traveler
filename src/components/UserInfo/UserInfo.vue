<script setup lang="ts">
import { useMutatuion } from '@/composables/useMutation'
import UserInfoIcon from './UserInfoIcon.vue'
import { refresh } from '@/api/user'
import { onMounted } from 'vue'

const {
  data: userInfo,
  mutation: getUserInfo,
  isLoading
} = useMutatuion({
  mutationFn: () => refresh()
})

onMounted(() => {
  getUserInfo()
})
</script>

<template>
  <div
    class="flex sticky bg-[#ffe6dc] top-0 items-center text-black gap-3 border-solid border-b-2 border-primary rounded-bl-2xl rounded-br-2xl px-6 py-4 mb-10"
  >
    <div class="flex w-10 h-10 items-center justify-center rounded-full color-primary bg-primary">
      <UserInfoIcon class="text-white" />
    </div>
    <span v-if="isLoading">Loading ...</span>
    <span v-if="userInfo">{{ userInfo.data.name }}</span>
  </div>
</template>
