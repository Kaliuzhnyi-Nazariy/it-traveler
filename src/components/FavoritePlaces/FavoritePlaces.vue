<script setup lang="ts">
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({
  items: { required: true, type: Array },
  activeId: {
    required: true,
    type: [Number, null]
  }
})

const emit = defineEmits(['place-clicked'])
</script>

<template>
  <div class="px-6">
    <p class="text-gray mb-4">Added Marks</p>
    <div class="text-black" v-if="props.items.length === 0">List is empty</div>
    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.title"
      :description="place.description"
      :img="place.img"
      :is-active="place.id === props.activeId"
      @click="emit('place-clicked', place.id)"
    />
    <IButton class="w-full mt-10" variant="gradient">Add mark</IButton>
  </div>
</template>
