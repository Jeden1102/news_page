<template>
  <a
    class="teaser flex flex-col gap-2 shadow-d h-full p-3 rounded-md bg-gray-100"
    v-if="n"
    :href="n.url"
    target="_blank"
  >
    <nuxt-img
      quality="80"
      format="webp"
      :src="n.image"
      alt="Article image"
      class="h-40 w-full object-cover rounded-xl"
      width="560"
      height="160"
      loading="lazy"
      sizes="100vw sm:50vw md:400px"
    />
    <p class="font-light text-gray-600 my-2">
      {{ n.description }}
    </p>
    <div
      class="flex bg-gray-200 py-2 px-4 rounded-md items-center gap-4 justify-between mt-auto"
    >
      <div class="flex flex-col">
        <p class="font-bold">{{ n.author }}</p>
        <p class="font-light text-sm text-gray-700">
          {{ formatDate(n.published) }}
        </p>
      </div>
      <Icon
        name="material-symbols:bookmark-outline-rounded"
        class="text-2xl cursor-pointer"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArticleInterface } from "../../interface";
const props = defineProps<{
  n?: ArticleInterface;
  isLoading?: boolean;
}>();
const formatDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
};
</script>

<style lang="scss">
.teaser {
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>