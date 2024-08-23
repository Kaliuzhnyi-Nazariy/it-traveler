<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { computed, onMounted, ref, toRaw } from 'vue'

import FavoritePlaces from '../components/FavoritePlaces/FavoritePlaces.vue'
import { mapSettings } from '../map/mapSettings'
import MarkerIcon from '../components/Icons/MarkerIcon.vue'
import { addFavoritePlaces, getFavoritePlaces } from '@/api/favorite-places'
import { useModal } from '@/composables/useModal'
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
import { useMutatuion } from '@/composables/useMutation'

const { isModalOpen, closeModal, openModal } = useModal()

// const favoritePlaces = [
//   {
//     id: 1,
//     title: 'New place 1',
//     description: 'Best description ever',
//     img: '',
//     lngLat: [-118.243683, 33.952235]
//   },
//   {
//     id: 2,
//     title: 'New place 2',
//     description: 'Best description ever 2',
//     img: '',
//     lngLat: [-118.243683, 34.092235]
//   }
// ]

const activeId = ref(null)
const map = ref(null)
const mapMarkerLngLat = ref(null)

const {
  data,
  mutation: getPlaces,
  isLoading: isGettingPlaces
} = useMutatuion({
  mutationFn: () => getFavoritePlaces()
})

const favoritePlaces = computed(() => data.value ?? [])

const {
  mutation: addPlace,
  isLoading: isAddingPlace,
  error
} = useMutatuion({
  mutationFn: (newPlaceData) => addFavoritePlaces(newPlaceData),
  onSuccess: () => {
    closeModal()
    mapMarkerLngLat.value = null
    getPlaces()
  }
})

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

const handleAddPlace = async (formData, resetForm) => {
  const body = {
    ...formData,
    coordinates: toRaw(mapMarkerLngLat.value)
  }

  const res = await addPlace(body)
  if (res) {
    resetForm()
  }
}

onMounted(() => {
  getPlaces()
})

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { coordinates } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: coordinates }, { zoom: 15 })
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <div v-if="isGettingPlaces" class="text-black px-6">Loading...</div>
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        :is-places-loading="isGettingPlaces"
        @place-clicked="changePlace"
        @create="openModal"
        @updated="getPlaces"
      />
      <CreateNewPlaceModal
        :is-loading="isAddingPlace"
        :is-open="isModalOpen"
        @close="closeModal"
        @submit="handleAddPlace"
        :error
      />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[-118.243683, 34.052235]"
        :zoom="9.5"
        :access-token="mapSettings.apiToken"
        :mapStyle="mapSettings.style"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="w-8 h-8" :is-active="true" />
        </MapboxMarker>
        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.coordinates"
          anchor="bottom"
        >
          <button @click.stop="changeActiveId(place.id)">
            <MarkerIcon class="w-8 h-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
