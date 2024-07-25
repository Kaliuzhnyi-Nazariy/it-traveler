<script setup>
import FormRegistration from './components/Auth/FormRegistration/FormRegistration.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'

// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
// import HomepageView from './views/HomepageView.vue';
</script>

<template>
  <!-- <HomepageView /> -->

  <!-- <FavoritePlaces /> -->

  <FormRegistration @submit="console.log" />
  <LoginForm @submit="console.log" />
</template>
