<script setup lang="ts">
import { ref } from 'vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../IImput/IInput.vue'

const buttonVariant = ref('gradient')

const changeVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'outlined' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <p class="text-gray mb-4">Added Marks</p>
    <div class="py-5" @keydown.alt.shift="() => console.log('clicked alt shift')">
      <IInput label="some label" />
      <a href="/" class="text-black" @click.prevent="() => console.log('prevent')"> click me !</a>
    </div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10" :variant="buttonVariant" @click="changeVariant">Add mark</IButton>
  </div>
</template>
