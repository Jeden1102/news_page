<template>
  <div>
    <ClientOnly>
      <apexchart
        :key="series"
        height="230"
        width="100%"
        :options="options"
        :series="series"
      ></apexchart>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { defineProps, watch } from "vue";
import { Forecast } from "../../interface";
const props = defineProps<{
  forecast: Forecast[];
}>();
const options = ref({
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderRadiusApplication: "around",
    },
  },
});
watch(
  () => props.forecast,
  () => {
    updateChart();
  }
);
const dt_txtArray = computed(() => {
  return props.forecast.map((obj) => {
    const dt_txt = obj.dt_txt.split(" ")[1].slice(0, -3);
    return dt_txt;
  });
});
const dt_tempArray = computed(() => {
  return props.forecast.map((obj) => {
    const dt_temp = obj.main.temp.toFixed();
    return dt_temp;
  });
});
const series = ref([
  {
    name: "Score",
    data: [],
  },
]);
const updateChart = () => {
  const data = dt_tempArray;
  options.value = {
    ...options.value,
    xaxis: {
      categories: dt_txtArray,
    },
  };
  series.value = [
    {
      name: "Tempareture",
      data: data,
    },
  ];
};
onMounted(() => {
  updateChart();
});
</script>