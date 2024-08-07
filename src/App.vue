<script setup>
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './map/mapSettings'
import MarkerIcon from './components/Icons/MarkerIcon.vue'

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
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[-118.243683, 34.052235]"
        :zoom="9.5"
        :access-token="mapSettings.apiToken"
        :map-styles="mapSettings.style"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <MarkerIcon class="w-8 h-8" />
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
