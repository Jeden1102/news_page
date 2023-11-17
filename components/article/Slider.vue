<template>
  <div class="slider mb-8 mx-auto">
    <h2 class="text-2xl relative mb-12">{{ label }}</h2>
    <swiper
      :slides-per-view="1"
      :space-between="20"
      navigation
      :modules="modules"
      class="min-h-[400px]"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
        },
        '1024': {
          slidesPerView: 3,
        },
        '1400': {
          slidesPerView: 4,
        },
      }"
    >
      <swiper-slide v-if="!newsLoading" v-for="n in news">
        <ArticleTeaser :n="n" />
      </swiper-slide>
      <swiper-slide v-else v-for="n in 8">
        <ArticleTeaser :isLoading="true" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ArticleInterface } from "../../interface";
const props = defineProps<{
  category: string;
  label: string;
}>();
const modules = [Navigation];
const news = ref<ArticleInterface[] | null>(null);
const newsLoading = ref(true);
onMounted(async () => {
  try {
    const response = await useFetch(`/api/search?category=${props.category}`);

    if (!response) {
      throw new Error(`Network failed.`);
    }
    if (response.data && response.data.value) {
      news.value = (response.data.value as any)?.data as ArticleInterface[];
      newsLoading.value = false;
    } else {
      throw new Error("Response data or value is null");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
  }
});
</script>

<style  lang="scss">
.slider {
  h2 {
    @apply pl-2;
    &::before {
      @apply block w-1 h-1/2 absolute left-0 top-1/2 bg-red-400 rounded-md;
      content: "";
      transform: translateY(-50%);
    }
  }
  .swiper-wrapper {
    @apply min-h-[400px] max-w-[400px] xl:max-w-[500px];
    margin-top: -20px;
    padding-top: 50px;
  }
  .swiper-slide {
    height: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background: none;
    @apply bg-gray-300 w-10 h-10 rounded-md  hover:bg-gray-400 cursor-pointer;
    -webkit-mask-image: unset;
    top: 0;
    &::after {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
    }
  }
  .swiper-button-prev {
    &::after {
      transform: translate(-50%, -50%) rotate(180deg);
    }
    @apply right-16;
    left: unset;
  }
  .swiper-button-next {
    @apply right-2;
  }
}
</style>