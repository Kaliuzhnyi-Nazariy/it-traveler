<script setup lang="ts">
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
</script>

<template>
  <div class="px-6">
    <p class="text-gray mb-4">Added Marks</p>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10">Add mark</IButton>
  </div>
</template>
