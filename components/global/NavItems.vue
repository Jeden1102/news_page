<template>
  <div
    class="flex flex-col justify-start gap-4 lg:flex-row items-center h-full"
  >
    <button class="menu-item">
      <span> Categories </span>
      <Icon class="pb-1" size="24px" name="carbon:chevron-sort-down" />
    </button>
    <button class="menu-item">
      Regions
      <Icon class="pb-1" size="24px" name="carbon:chevron-sort-down" />
    </button>
    <NuxtLink class="menu-item" to="/contact">Contact us</NuxtLink>
    <NuxtLink class="menu-item" to="/about">About</NuxtLink>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.menu-item {
  @apply w-full font-bold text-left flex items-center justify-between min-w-[110px];
}
</style>