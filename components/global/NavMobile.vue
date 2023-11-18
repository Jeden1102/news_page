<template>
  <nav
    class="absolute left-0 top-0 bg-white w-full h-full p-4 flex flex-col gap-8 z-20 overflow-y-auto"
    :class="{ 'is-visible': visible }"
  >
    <div class="flex justify-between">
      <NuxtLink to="/" class="text-3xl">
        <span class="text-red-400 font-bold">MEGA</span>.news
      </NuxtLink>
      <button @click="$emit('hide')" class="bg-gray-100 rounded-lg w-fit p-2">
        <Icon name="ic:twotone-close" size="24px" />
      </button>
    </div>
    <GlobalNavItems />
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
defineProps({
  visible: Boolean,
});
const emit = defineEmits(["hide"]);
</script>

<style scoped lang="scss">
nav {
  transition: transform 0.4s;
  transform: translateX(-100%);
  &.is-visible {
    transform: translateX(0);
  }
}
</style>