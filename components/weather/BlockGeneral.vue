<template>
  <div
    class="flex justify-between"
    :class="{ 'flex-col sm:flex-row': full, 'items-center': !full }"
    v-if="weather && weather.weather"
  >
    <div
      class="flex gap-2"
      :class="{ 'items-center gap-8': full }"
      v-if="!isLoading"
    >
      <div class="flex items-center gap-2 justify-center" v-if="full">
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
      <div class="flex flex-col gap-2">
        <p class="flex gap-2">
          <Icon name="solar:wind-line-duotone" class="text-2xl" />
          <span> {{ weather.wind.speed.toFixed() }} km/h </span>
        </p>
        <p class="flex gap-2">
          <Icon name="material-symbols:humidity-helper" class="text-2xl" />
          <span> {{ weather.main.humidity.toFixed() }} % </span>
        </p>
      </div>
    </div>
    <div class="flex gap-2" :class="{ 'items-center gap-8': full }" v-else>
      <div class="flex items-center gap-2 justify-center" v-if="full">
        <div class="skeleton w-8 h-8"></div>
        <h4 class="skeleton w-12 h-12"></h4>
      </div>
      <div class="flex flex-col gap-2">
        <p class="skeleton w-20 h-4"></p>
        <p class="skeleton w-20 h-4"></p>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h5 class="text-xl font-bold md:text-2xl">{{ town }}</h5>
      <p>{{ getLocalTime?.date }}</p>
      <p>{{ getLocalTime?.time }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Forecast } from "../../interface";
const props = defineProps<{
  weather: Forecast;
  town: string;
  full: boolean;
  isLoading?: boolean;
}>();
const getLocalTime = computed(() => {
  if (!props.weather || !props.weather.weather) return;
  const timestamp = props.full
    ? props.weather.dt * 1000
    : (props.weather.dt + props.weather.timezone) * 1000;
  const date = new Date(timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return {
    date: formattedDate,
    time: `${date.getHours()}:${date.getMinutes()}${props.full ? "0" : ""}`,
  };
});
</script>

<style scoped></style>
