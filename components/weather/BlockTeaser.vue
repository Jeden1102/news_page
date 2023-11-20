<template>
  <div
    class="flex flex-col border-2 border-white weather__teaser p-4 rounded-md shadow-md text-white gap-6 md:p-6 cursor-pointer w-full"
    v-if="weather"
    :class="{ active: isActive }"
    @click="$emit('set-active-town', town)"
  >
    <WeatherBlockGeneral :weather="weather" :town="town" :full="false" />
    <div class="flex items-center gap-2 justify-center">
      <nuxt-img
        quality="80"
        format="webp"
        class="w-fit"
        alt="Weather icon"
        loading="lazy"
        width="50"
        height="50"
        :src="
          'https://openweathermap.org/img/wn/' +
          weather.weather[0].icon +
          '.png'
        "
      />
      <p class="text-3xl font-bold">{{ weather.main.temp.toFixed() }}&deg;C</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, ref } from "vue";
import { useWeatherStore } from "../../store/weather";

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
    background: #1488cc;
    background: -webkit-linear-gradient(to right, #2b32b2, #1488cc);
    background: linear-gradient(to right, #2b32b2, #1488cc);

    &.active {
      @apply border-blue-600;
    }
  }
}
</style>
