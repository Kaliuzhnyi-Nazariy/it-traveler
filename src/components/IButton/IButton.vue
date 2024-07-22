<template>
  <button class="bg-[#FFA279] rounded-[14px] py-3 px-10 text-white font-bold -tracking-wider">
    <div v-if="$slots.default">It's default</div>
    <slot>Click me!</slot>
  </button>
</template>
