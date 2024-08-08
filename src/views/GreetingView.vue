<script setup>
import IButton from '@/components/IButton/IButton.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="text-center">
      <img src="../assets/img/map-pin.svg" alt="" class="inline mb-6" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="leading-6 mb-11">
        A simple and convenient web application that will allow you to mark your favourite places,
        as well as those you would really like to visit. So don't hesitate and try it for yourself.
      </p>
      <IButton to="auth/registration">Start</IButton>
    </div>
  </BaseLayout>
</template>
