<script setup lang="ts">
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'
import FavoritePlaceIconButton from './FavoritePlaceIconButton.vue'
</script>

<template>
  <section class="text-gray mb-6 last:mb-0">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" src="" alt="" />
      <div>
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2C2C2C]">Palace of Sports</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconButton><EditIcon /></FavoritePlaceIconButton>
            <FavoritePlaceIconButton><DeleteIcon /></FavoritePlaceIconButton>
          </div>
        </div>
        <p class="text-xs line-clamp-3">
          The Kyiv Palace of Sports (KPS) is the largest indoor sports and entertainment facility in
          Ukraine, located in the central part of Kyiv, at the foot of Cherepanova Hill.
        </p>
      </div>
    </div>
  </section>
</template>
