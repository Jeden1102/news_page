<template>
  <div class="flex gap-20 flex-col">
    <div class="flex gap-4 flex-wrap py-4 lg:py-8">
      <div v-for="region in regionsStore.regions">
        <NuxtLink
          class="hover:text-red-400"
          :to="'/regions/' + region.value"
          :class="{
            'font-bold relative pl-2 active hover:text-black cursor-auto':
              region.value === route.params.region,
          }"
        >
          {{ region.label }}
        </NuxtLink>
      </div>
      <div
        class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
      >
        <template v-if="isLoading">
          <ArticleTeaserLoader v-for="n in 10" />
        </template>
        <div class="flex flex-col" v-else-if="!isLoading && news.length == 0">
          <h2 class="font-bold text-lg">No results.</h2>
          <p>
            There where no results in <b>{{ route.params.region }}</b> found.
            Try to change the region.
          </p>
        </div>
        <template v-else>
          <ArticleTeaser v-for="n in news" :n="n" :isLoading="isLoading" />
        </template>
      </div>
    </div>
    <div class="w-full">
      <ArticleSlider category="sports" :label="$t('sports_news')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRegionsStore } from "../../store/regions";
import { onMounted, ref } from "vue";
import axios from "axios";
const route = useRoute();
const news = ref(null);
const isLoading = ref(true);
const regionsStore = useRegionsStore();
onMounted(async () => {
  const response = await axios.get(
    `/api/search?country=${route.params.region}`
  );
  isLoading.value = false;
  news.value = response.data.data;
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