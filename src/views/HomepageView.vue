<script setup>
import IButton from '../components/IButton/IButton.vue'
</script>

<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white text-center">
        <img src="../assets/img/map-pin.svg" alt="" class="inline mb-6" />
        <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
        <p class="leading-6 mb-11">
          A simple and convenient web application that will allow you to mark your favourite places,
          as well as those you would really like to visit. So don't hesitate and try it for
          yourself.
        </p>
        <IButton>Start</IButton>
      </div>
    </section>
    <section>
      <img src="../assets/img/static-map.png" alt="" class="h-full w-full object-cover" />
    </section>
  </main>
</template>
