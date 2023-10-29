<template>
    <div
        class="flex flex-col border-2 border-white weather__teaser p-4 rounded-md shadow-md text-white gap-6 md:p-6 cursor-pointer"
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
        background-color: #fbab7e;
        background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
        &.active {
            @apply border-red-300;
        }
    }
}
</style>
