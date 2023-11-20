<template>
  <template v-if="newsStore.recent">
    <section class="flex gap-4 flex-col my-8 hero lg:flex-row mx-auto">
      <div class="flex mx-auto gap-4 flex-col md:flex-row">
        <ArticleTeaserMain :n="newsStore.recent.data[0]" />
        <ArticleTeaserMain :n="newsStore.recent.data[1]" />
      </div>
      <div class="block max-w-60">
        <swiper
          class="max-w-60"
          :space-between="12"
          :slidesPerView="1"
          navigation
          :modules="modules"
          :pagination="{
            dynamicBullets: true,
            clickable: true,
          }"
        >
          <swiper-slide v-for="n in slicedNews">
            <ArticleTeaserMain :n="n" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { useNewsStore } from "../../store/news";

const modules = [Navigation, Pagination];
const newsStore = useNewsStore();
newsStore.getRecentNews();
const slicedNews = computed(() => {
  return newsStore.recent.data.slice(2);
});
</script>

<style lang="scss">
.hero {
  .swiper-wrapper {
    @apply max-w-[400px] xl:max-w-[500px];
  }
  .swiper-button-next,
  .swiper-button-prev {
    background: none;
    @apply bg-white w-10 h-10 rounded-md top-3 md:top-1/2 hover:bg-gray-100 cursor-pointer;
    -webkit-mask-image: unset;
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
    @apply left-2;
  }
  .swiper-button-next {
    @apply right-2;
  }
}

.swiper-pagination {
  .swiper-pagination-bullet {
    @apply w-4 h-4 bg-gray-500;
  }
}
</style>