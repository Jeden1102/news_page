<template>
    <div>
        <div class="flex">
            <h5>{{ town }}</h5>
            {{getLocalTime}}
            <img :src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png'"/>
        </div>
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
    const data = await weatherStore.getWeather(props.town);
    weather.value = data;
});
const getLocalTime = computed(()=>{
    if(!weather.value) return;
    return new Date((weather.value.dt + weather.value.timezone) * 1000);
})
</script>

<style scoped></style>
