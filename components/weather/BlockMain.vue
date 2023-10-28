<template>
    <div>main {{ town }} {{weather}}</div>
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
</script>

<style scoped></style>
