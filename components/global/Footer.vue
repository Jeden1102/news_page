<template>
  <div class="w-full bg-gray-100 p-4 flex flex-col gap-4">
    <div class="flex flex-col">
      <h3 class="heading-styled mb-4">Mega news</h3>
      <p class="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        expedita modi minima, quod autem qui culpa. Officiis provident, incidunt
        rerum corrupti dolorum quos vel! Natus tenetur ducimus vero nisi
        architecto quos! Dolorem, neque suscipit. Incidunt enim amet adipisci
        repellendus architecto!
      </p>
    </div>
    <div class="flex flex-col">
      <h3 class="heading-styled mb-4">Newsletter</h3>
      <div class="relative w-3/4">
        <input
          class="w-full p-3 rounded-md"
          type="text"
          placeholder="john.doe@gmail.com"
        />
        <Icon
          name="material-symbols:mail-outline-rounded"
          class="absolute top-1/2 right-4 translate-y-[-50%]"
        />
      </div>
    </div>
    <div class="flex flex-col">
      <h3 class="heading-styled mb-4">Categories</h3>
      <template v-for="category in footerCategories">
        <a class="my-1" href="">{{ category }}</a>
      </template>
    </div>
    <div class="flex flex-col">
      <h3 class="heading-styled mb-4">Social network</h3>
      <a href="">
        <Icon name="mdi:instagram" class="text-3xl" />
      </a>
      <a href="">
        <Icon name="mdi:facebook-box" class="text-3xl" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCategoriesStore } from "../../store/categories";
const categoriesStore = useCategoriesStore();
const footerCategories = computed(() => {
  return categoriesStore.categories.splice(0, 6);
});
</script>

<style scoped lang="scss">
h3 {
  @apply pl-2 relative text-lg font-bold;
  &::before {
    @apply block w-1 h-1/2 absolute left-0 top-1/2 bg-red-400 rounded-md;
    content: "";
    transform: translateY(-50%);
  }
}
</style>