<template>
    <div
        v-if="weather"
        class="flex flex-col weather__main p-4 rounded-md text-black gap-6 md:p-6 bg-gray-200 mb-6 shadow-lg w-full lg:mb-0"
    >
        <WeatherBlockGeneral
            :weather="weather.list[0]"
            :town="town"
            :full="true"
        />
    </div>
</template>

<script setup lang="ts">
import { onMounted, defineProps, ref } from "vue";
import { useWeatherStore } from "../../store/weather.ts";
const weatherStore = useWeatherStore();
const props = defineProps<{
    town: string;
}>();
const weather = ref(null);
onMounted(async () => {
    const data = await weatherStore.getWeather(props.town, false);
    weather.value = data;
});
watch(
    async () => props.town,
    async (first) => {
        const data = await weatherStore.getWeather(props.town, false);
        weather.value = data;
    }
);
</script>

<style scoped lang="scss"></style>
