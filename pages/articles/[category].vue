<template>
  <div class="flex gap-20 flex-col">
    <div class="flex gap-4 flex-wrap py-4 lg:py-8">
      <div v-for="category in categoriesStore.categories">
        <NuxtLink
          class="hover:text-red-400"
          :to="'/articles/' + category"
          :class="{
            'font-bold relative pl-2 active hover:text-black cursor-auto':
              category === route.params.category,
          }"
        >
          {{ category }}
        </NuxtLink>
      </div>
      <div
        class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
      >
        <template v-if="isLoading">
          <ArticleTeaserLoader v-for="n in 10" />
        </template>
        <div class="flex flex-col" v-else-if="!isLoading && !news">
          <h2 class="font-bold text-lg">No results.</h2>
          {{ news }}
          <p>
            There where no results in <b>{{ route.params.category }}</b> found.
            Try to change the category.
          </p>
        </div>
        <template v-else>
          <ArticleTeaser v-for="n in news" :n="n" :isLoading="isLoading" />
        </template>
      </div>
      <div class="w-full">
        <ArticleSlider category="sports" :label="$t('sports_news')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "../../store/categories";
import { onMounted, ref } from "vue";
import { ArticleInterface } from "~/interface";
import axios from "axios";
const route = useRoute();
const news = ref<ArticleInterface[] | null>(null);
const isLoading = ref(true);
const categoriesStore = useCategoriesStore();
onMounted(async () => {
  const response = await axios.get(
    `/api/search?category=${route.params.category}`
  );
  isLoading.value = false;
  news.value = response.data.data as ArticleInterface[];
});
</script>

<style scoped lang="scss">
.active {
  &::before {
    @apply block w-1 h-1/2 absolute left-0 top-1/2 bg-red-400 rounded-md;
    content: "";
    transform: translateY(-50%);
  }
}
</style>