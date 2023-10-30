<template>
  <div>
    {{ forecast }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  forecast: string;
}>();
</script>

<style scoped>
</style>