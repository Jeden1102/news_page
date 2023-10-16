<template>
  <div class="categories-carousel">
    <swiper :space-between="12" :slidesPerView="'auto'">
      <swiper-slide
        class="p-4 rounded-md bg-red-200"
        v-for="category in categoriesStore.categories"
        >{{ category }}</swiper-slide
      >
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useCategoriesStore } from "../../store/categories";
const categoriesStore = useCategoriesStore();
</script>

<style scoped lang="scss">
.categories-carousel {
  .swiper-slide {
    width: fit-content !important;
  }
}
</style>
