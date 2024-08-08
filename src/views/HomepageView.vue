<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { ref } from 'vue'

import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import { mapSettings } from '../map/mapSettings'
import MarkerIcon from '../components/Icons/MarkerIcon.vue'

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Best description ever',
    img: '',
    lngLat: [-118.243683, 33.952235]
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Best description ever 2',
    img: '',
    lngLat: [-118.243683, 34.092235]
  }
]

const activeId = ref(null)
const map = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat })
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" @place-clicked="changePlace" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[-118.243683, 34.052235]"
        :zoom="9.5"
        :access-token="mapSettings.apiToken"
        :mapStyle="mapSettings.style"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="w-8 h-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
