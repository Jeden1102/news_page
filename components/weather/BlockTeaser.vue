<template>
  <div
    class="flex flex-col border-2 border-white weather__teaser p-4 rounded-md shadow-md text-white gap-6 md:p-6 cursor-pointer w-full"
    v-if="weather"
    :class="{ active: isActive }"
    @click="$emit('set-active-town', town)"
  >
    <WeatherBlockGeneral :weather="weather" :town="town" :full="false" />
    <div class="flex items-center gap-2 justify-center">
      <img
        class="w-fit"
        :src="
          'https://openweathermap.org/img/wn/' +
          weather.weather[0].icon +
          '.png'
        "
      />
      <h4 class="text-3xl font-bold">
        {{ weather.main.temp.toFixed() }}&deg;C
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, ref } from "vue";
import { useWeatherStore } from "../../store/weather.ts";
const weatherStore = useWeatherStore();
const props = defineProps<{
  town: string;
  isActive: boolean;
}>();
const weather = ref(null);
onMounted(async () => {
  const data = await weatherStore.getWeather(props.town);
  weather.value = data;
});
</script>

<style scoped lang="scss">
.weather {
  &__teaser {
    background: #1488cc; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2b32b2,
      #1488cc
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2b32b2,
      #1488cc
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    &.active {
      @apply border-blue-600;
    }
  }
}
</style>
