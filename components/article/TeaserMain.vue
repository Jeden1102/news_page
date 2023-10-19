<template>
  <div class="relative flex h-full shadow-md md:w-full rounded-md">
    <object
      class="w-full h-60 object-cover rounded-md lg:h-96"
      :data="n.image"
      type="image/png"
    >
      <img src="/people.jpg" alt="Stack Overflow logo and icons and such" />
    </object>
    <div
      class="flex flex-col bg-gray-50 mt-full absolute bottom-2 w-11/12 mx-auto overlay left-1/2 p-4 rounded-lg"
    >
      <h2 class="text-lg font-semibold">{{ n.title }}</h2>
      <p class="text-sm font-light">{{ n.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  n: object;
}>();
</script>
<style lang="scss" scoped>
.overlay {
  backdrop-filter: blur(4px);
  transform: translateX(-50%);
  p,
  h2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
