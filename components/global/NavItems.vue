<template>
  <div
    class="flex flex-col justify-start gap-4 lg:flex-row lg:items-center h-full"
  >
    <GlobalNavItem label="Categories" :children="categoriesStore.categories" />
    <GlobalNavItem
      label="Regions"
      :children="regionsStore.regions"
      objectKey="label"
    />
    <GlobalNavItem label="Contact us" url="/contact" />
    <GlobalNavItem label="About" url="/about" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoriesStore } from "../../store/categories";
import { useRegionsStore } from "../../store/regions";

const categoriesStore = useCategoriesStore();
const regionsStore = useRegionsStore();
const regions = ["Poland", "Poland 2", "Poland 3", "Poland 4"];

onMounted(async () => {
  await categoriesStore.getCategories();
  await regionsStore.getRegions();
});
</script>

<style scoped>
</style>
