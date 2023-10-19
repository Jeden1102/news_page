<template>
  <div class="categories-carousel bg-gray-100 p-3 rounded-md">
    <swiper
      :space-between="12"
      :slidesPerView="'auto'"
      navigation
      :modules="modules"
    >
      <swiper-slide
        class="p-4 rounded-md bg-primary text-white cursor-pointer hover:bg-red-450"
        v-for="category in categoriesStore.categories"
        >#{{ category }}</swiper-slide
      >
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// Import Swiper styles
import { useCategoriesStore } from "../../store/categories";
const categoriesStore = useCategoriesStore();
const modules = [Navigation];
</script>

<style  lang="scss">
.categories-carousel {
  .swiper {
    padding: 0 50px;
  }
  .swiper-slide {
    width: fit-content !important;
  }
}
.swiper-button-next,
.swiper-button-prev {
  @apply bg-gray-100 absolute opacity-100;
  width: 50px;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  &:hover {
    @apply bg-gray-200;
  }
  &::after {
    position: absolute;
    transform: translateY(50%);
    content: url("/chevron.svg");
  }
}
.swiper-button-prev {
  padding-right: 24px;
  background-image: linear-gradient(
    to left,
    rgba(243, 244, 246, 1),
    rgba(243, 244, 246, 0) 60%
  );
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
  left: 0;
  &::after {
    transform: translateY(40%) rotate(-180deg);
  }
}
.swiper-button-next {
  padding-left: 24px;
  background-image: linear-gradient(
    to right,
    rgba(243, 244, 246, 1),
    rgba(243, 244, 246, 0) 60%
  );
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
}
</style>
