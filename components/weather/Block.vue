<template>
    <div>
        <!-- <WeatherBlockMain :town="towns[0]"/> -->
        <WeatherBlockTeaser v-for="town in towns" :town="town" />
    </div>
</template>

<script setup lang="ts">
const towns = ["Warsaw", "New York", "Paris", "Sydney"];
</script>