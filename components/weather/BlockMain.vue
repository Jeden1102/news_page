<template>
  <div
    v-if="weather"
    class="flex flex-col weather__main p-4 rounded-md text-black gap-6 md:p-6 bg-white mb-6 shadow-lg w-full lg:mb-0"
  >
    <WeatherBlockGeneral :weather="weather.list[0]" :town="town" :full="true" />
    <div
      v-for="(day, key) in groupForecast"
      class="bg-gray-400 p-3 rounded-lg flex flex-col items-center justify-center w-full"
    >
      <p class="font-bold">{{ mapDay[key] }}</p>
      <div class="flex justify-between w-full">
        <span>{{ dayRangeTemp(day).min }}</span>
        <span>{{ dayRangeTemp(day).max }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, ref, computed } from "vue";
import { useWeatherStore } from "../../store/weather";
const weatherStore = useWeatherStore();
const props = defineProps<{
  town: string;
}>();
const weather = ref(null);
const mapDay = {
  "0": "Sun",
  "1": "Mon",
  "2": "Tue",
  "3": "Wed",
  "4": "Thu",
  "5": "Fri",
  "6": "Sat",
};
onMounted(async () => {
  const data = await weatherStore.getWeather(props.town, false);
  weather.value = data;
});
const dayRangeTemp = computed(() => (day) => {
  let minTemp = Infinity;
  let maxTemp = -Infinity;

  day.forEach((item) => {
    const tempMin = item.main.temp_min;
    const tempMax = item.main.temp_max;

    if (tempMin < minTemp) {
      minTemp = tempMin;
    }

    if (tempMax > maxTemp) {
      maxTemp = tempMax;
    }
  });

  return { min: minTemp, max: maxTemp };
});
const groupForecast = computed(() => {
  if (!weather.value) return;
  const grouped = {};
  weather.value.list.forEach((f) => {
    const date = new Date(f.dt * 1000);
    const dayIndex = date.getDay();
    if (!grouped[dayIndex]) {
      grouped[dayIndex] = [f];
    } else {
      grouped[dayIndex].push(f);
    }
  });
  return grouped;
});
watch(
  async () => props.town,
  async (first) => {
    const data = await weatherStore.getWeather(props.town, false);
    weather.value = data;
    console.log(weather.value);
  }
);
</script>

<style scoped lang="scss"></style>
