<template>
  <footer
    class="w-full bg-gray-100 p-4 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <section class="flex flex-col">
      <h3 class="heading-styled mb-4">Mega news</h3>
      <p class="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        expedita modi minima, quod autem qui culpa. Officiis provident, incidunt
        rerum corrupti dolorum quos vel! Natus tenetur ducimus vero nisi
        architecto quos! Dolorem, neque suscipit. Incidunt enim amet adipisci
        repellendus architecto!
      </p>
    </section>
    <section class="flex flex-col">
      <h3 class="heading-styled mb-4">{{ $t("footer.newsletter") }}</h3>
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
    </section>
    <section class="flex flex-col">
      <h3 class="heading-styled mb-4">{{ $t("categories") }}</h3>
      <template v-for="category in footerCategories">
        <NuxtLink clasm="my-1" :to="'/articles/' + category">
          {{ category }}
        </NuxtLink>
      </template>
    </section>
    <section class="flex flex-col">
      <h3 class="heading-styled mb-4">{{ $t("footer.social") }}</h3>
      <a aria-label="Checkout our instagram." href="#">
        <Icon name="mdi:instagram" class="text-3xl text-gray-700" />
      </a>
      <a aria-label="Checkout our facebook." href="#">
        <Icon name="mdi:facebook-box" class="text-3xl text-gray-700" />
      </a>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCategoriesStore } from "../../store/categories";

const categoriesStore = useCategoriesStore();
const footerCategories = computed(() => {
  if (!categoriesStore.categories) return;
  return categoriesStore.categories.slice(0, 6);
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
