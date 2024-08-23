<script setup lang="ts">
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../Icons/MarkerIcon.vue'
import IInput from '../IImput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import fallbackPhoto from '../../assets/img/no-image.png'
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false,
    required: true
  },
  place: Object
})

const formData = ref({
  location: '',
  description: '',
  img: '',
  coordinates: null
})

watch(
  () => props.place,
  () => {
    formData.value = {
      ...props.place
    }
  }
)

const handleChangeImg = (url) => {
  formData.value.img = url
}

const emit = defineEmits(['close', 'submit'])
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-[750px]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon width="18" height="18" />
        <span class="font-bold text-base">Edit a marker </span>
      </div>
      <form @submit.prevent="emit('submit', formData)">
        <div class="flex gap-5">
          <div class="w-5/12">
            <img
              alt="place image"
              :src="props.place.img.length === 0 ? fallbackPhoto : props.place.img"
              class="w-full h-[276px] object-cover rounded-md"
            />
          </div>

          <div class="w-7/12">
            <IInput label="Location" v-model="formData.location" />
            <div class="mt-4">
              <IInput label="Description" type="textarea" v-model="formData.description" />
            </div>
            <IButton class="mt-10 w-full" :is-loading="props.isLoading">Save</IButton>
          </div>
        </div>
      </form>

      <InputImage class="mt-3" @uploaded="handleChangeImg">
        <span class="text-xs">Click for adding a photo </span>
      </InputImage>
    </div>
  </IModal>
</template>
