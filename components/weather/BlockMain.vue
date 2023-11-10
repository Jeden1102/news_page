<template>
  <div
    v-if="weather"
    class="flex flex-col weather__main p-4 rounded-md text-black gap-6 md:p-6 bg-white mb-6 shadow-lg lg:mb-0 w-full lg:w-1/2"
  >
    <WeatherBlockGeneral
      :weather="weather.list[0]"
      :town="town"
      :full="true"
      :isLoading="isLoading"
    />
    <WeatherBlockForecast :forecast="groupForecast[activeDay]" />
    <div class="w-full">
      <swiper :space-between="12" :slidesPerView="'auto'">
        <swiper-slide
          class="bg-gray-100 border border-gray-300 shadow-md p-3 w-24 rounded-lg"
          :class="{ 'bg-gray-300': activeDay === key }"
          v-for="(day, key) in groupForecast"
        >
          <div
            class="flex flex-col items-center justify-center cursor-pointer"
            @click="activeDay = key"
            v-if="!isLoading"
          >
            <p class="font-bold">
              {{ mapDay(key) }}
            </p>
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
          <div
            class="flex flex-col items-center justify-center cursor-pointer"
            v-else
          >
            <p class="skeleton w-8 h-6"></p>
            <div class="skeleton w-10 h-10 mt-2"></div>
            <div class="flex justify-center gap-4 w-full mt-2">
              <span class="skeleton w-8 h-8"></span>
              <span class="skeleton w-8 h-8"></span>
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
const isLoading = ref(false);
const mapDay = (d) => {
  const date = new Date(d);
  const days = {
    "0": "Sun",
    "1": "Mon",
    "2": "Tue",
    "3": "Wed",
    "4": "Thu",
    "5": "Fri",
    "6": "Sat",
  };
  const dayOfWeek = days[date.getDay()];
  return dayOfWeek;
};
onMounted(async () => {
  const data = await weatherStore.getWeather(props.town, false);
  weather.value = data;
  const firstDayKey = Object.keys(groupForecast.value)[0];
  activeDay.value = firstDayKey;
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
    const day = date.toISOString().split("T")[0]; // Pobieramy tylko datę, usuwając czas

    if (!grouped[day]) {
      grouped[day] = [f];
    } else {
      grouped[day].push(f);
    }
  });
  return grouped;
});

watch(
  async () => props.town,
  async (first) => {
    isLoading.value = true;
    const data = await weatherStore.getWeather(props.town, false);
    weather.value = data;
    isLoading.value = false;
  }
);
</script>

<style  lang="scss">
.weather__main {
  .swiper-slide {
    width: 100px !important;
  }
}
</style>
