<template>
  <div class="mt-8 sm:px-8 md:px-12">
    <HomeCategoriesCarousel />
    <ArticleHero />
    <ArticleSlider category="sports" :label="$t('sports_news')" />
    <WeatherBlock :towns="towns" :active-town="towns[activeTown]" />
    <ArticleSlider category="politics" :label="$t('political')" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const towns = ["Warsaw", "New York", "Paris", "Moskow"];
const activeTown = ref(0);
</script>

<style lang="scss">
@use "./assets/style/variables.scss" as *;
@use "./assets/style/style.scss" as *;
</style>
