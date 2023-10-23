<template>
  <div class="mt-8 sm:px-8 md:px-12">
    <HomeCategoriesCarousel />
    <ArticleHero />
    <ArticleSlider category="sports" label="Sports news" />
    <ArticleSlider category="politics" label="Political" />
  </div>
</template>

<script setup lang="ts">
</script>

<style  lang="scss">
@use "./assets/style/variables.scss" as *;
@use "./assets/style/style.scss" as *;
</style>