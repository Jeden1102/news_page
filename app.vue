<template>
  <div class="py-2 mx-auto px-2 max-w-[1400px]">
    <GlobalHeader />
    <NuxtPage />
    <GlobalFooter />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Mega News",
  meta: [{ name: "description", content: "Best news in the world." }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>