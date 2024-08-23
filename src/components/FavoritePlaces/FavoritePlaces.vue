<script setup lang="ts">
import { useModal } from '@/composables/useModal'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { computed, ref } from 'vue'
import { useMutatuion } from '@/composables/useMutation'
import { deleteFavoritePlaces, updateFavoritePlaces } from '@/api/favorite-places'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.vue'

const props = defineProps({
  items: { required: true, type: Array },
  activeId: {
    required: true,
    type: [String, null]
  },
  isPlacesLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const { isModalOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()
const {
  isModalOpen: isConfirmationModalOpen,
  openModal: openConfirmationModal,
  closeModal: closeConfirmationModal
} = useModal()

const { mutation: updatePlace, isLoading: updatingPlace } = useMutatuion({
  mutationFn: (formData) => updateFavoritePlaces(formData),
  onSuccess: () => {
    closeEditModal()
    emit('updated')
  }
})

const idOfDeletingItem = ref(null)

const {
  mutation: deletePlace,
  isLoading: isDeleting,
  error: deleteError
} = useMutatuion({
  mutationFn: (id) => deleteFavoritePlaces(id),
  onSuccess: () => {
    closeConfirmationModal()
    idOfDeletingItem.value = null
    emit('updated')
  }
})

const selectedId = ref(null)
const selectedItem = computed(() => props.items.find((place) => place.id === selectedId.value))

const handleEditPlace = (id) => {
  selectedId.value = id
  openEditModal()
}

const handleOpenConfirmationModal = (id) => {
  idOfDeletingItem.value = id
  openConfirmationModal()
}

const handleDeletePlace = () => {
  deletePlace(idOfDeletingItem.value)
}

const handleSubmit = (formData) => {
  updatePlace(formData)
}
</script>

<template>
  <div class="px-6">
    <p class="text-gray mb-4">Added Marks</p>
    <div class="text-black" v-if="props.items.length === 0 && !isPlacesLoading">List is empty</div>
    <FavoritePlace
      v-for="place in props.items"
      :key="place.id"
      :title="place.location"
      :description="place.description"
      :img="place.img"
      :is-active="place.id === props.activeId"
      @click="emit('place-clicked', place.id)"
      @edit="handleEditPlace(place.id)"
      @delete="handleOpenConfirmationModal(place.id)"
    />

    <EditPlaceModal
      :is-open="isEditOpen"
      :place="selectedItem"
      @close="closeEditModal"
      @submit="handleSubmit"
      :is-loading="updatingPlace"
    />

    <ConfirmationModal
      :is-open="isConfirmationModalOpen"
      :is-loading="isDeleting"
      :has-error="deleteError"
      @close="closeConfirmationModal"
      @confirm="handleDeletePlace"
      title="Are you sure you want to delete it?"
    />

    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')">Add mark</IButton>
  </div>
</template>
