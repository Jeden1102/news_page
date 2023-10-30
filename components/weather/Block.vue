<template>
  <div
    class="flex flex-col lg:flex-row lg:gap-4 my-4 bg-gray-100 w-full p-2 lg:p-8"
  >
    <WeatherBlockMain :town="activeTownRef" />
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 w-full">
      <WeatherBlockTeaser
        v-for="town in towns"
        :town="town"
        :isActive="town === activeTownRef"
        @set-active-town="setActiveTown(town)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps<{
  towns: string[];
  activeTown: string;
}>();
const activeTownRef = ref(props.activeTown);
const setActiveTown = (town) => {
  activeTownRef.value = town;
};
</script>
