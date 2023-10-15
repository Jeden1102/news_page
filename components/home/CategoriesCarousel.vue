<template>
    <div class="categories-carousel">
        <swiper :space-between="12" :slidesPerView="'auto'">
            <swiper-slide class="p-4 rounded-md bg-red-200" v-for="category in categories">{{
                category
            }}</swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
];
</script>

<style scoped lang="scss">
.categories-carousel {
    .swiper-slide {
        width: fit-content !important;
    }
}
</style>
