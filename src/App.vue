<script setup>
import { ref } from 'vue'
import FormRegistration from './components/Auth/FormRegistration/FormRegistration.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import IModal from './components/IModal/IModal.vue'

// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
// import HomepageView from './views/HomepageView.vue';

const isOpen = ref(true)

const closeModal = () => {
  isOpen.value = false
}

const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <!-- <HomepageView /> -->

  <!-- <FavoritePlaces /> -->
  <button @click="openModal">Click ME</button>
  <FormRegistration @submit="console.log" />
  <LoginForm @submit="console.log" />
  <IModal v-if="isOpen" @close="closeModal">Hello I am modal</IModal>
</template>
