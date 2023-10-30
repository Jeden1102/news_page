<template>
  <div
    v-if="weather"
    class="flex flex-col weather__main p-4 rounded-md text-black gap-6 md:p-6 bg-white mb-6 shadow-lg w-full lg:mb-0"
  >
    <WeatherBlockGeneral :weather="weather.list[0]" :town="town" :full="true" />
    <WeatherBlockForecast :forecast="activeDay" />
    <div class="w-full">
      <swiper :space-between="12" :slidesPerView="'auto'">
        <swiper-slide
          class="bg-gray-200 border border-gray-300 shadow-md p-3 w-24 rounded-lg"
          v-for="(day, key) in groupForecast"
        >
          <div
            class="flex flex-col items-center justify-center cursor-pointer"
            @click="activeDay = day"
          >
            <p class="font-bold">{{ mapDay[key] }}</p>
            <img
              class="w-fit"
              :src="
                'https://openweathermap.org/img/wn/' +
                dayMiddleIcon(day).weather[0].icon +
                '.png'
              "
            />

            <div class="flex justify-center gap-4 w-full">
              <span>{{ dayRangeTemp(day).min }}&deg;</span>
              <span class="font-bold">{{ dayRangeTemp(day).max }}&deg;</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, defineProps, ref, computed } from "vue";
import { useWeatherStore } from "../../store/weather";
const weatherStore = useWeatherStore();
const props = defineProps<{
  town: string;
}>();
const activeDay = ref(null);
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
  const firstDayKey = Object.keys(groupForecast.value)[0];
  activeDay.value = groupForecast.value[firstDayKey];
});
const dayMiddleIcon = computed(() => (day: string[]) => {
  return day[(day.length / 2) | 0];
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

  return { min: minTemp.toFixed(), max: maxTemp.toFixed() };
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
  }
);
</script>

<style  lang="scss">
.weather__main {
  .swiper-slide {
    width: fit-content !important;
  }
}
</style>
