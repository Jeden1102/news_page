<template>
  <div
    class="teaser flex flex-col gap-2 shadow-d h-full p-3 rounded-md bg-gray-100"
  >
    <img
      :src="n.image"
      alt="Article image"
      class="h-40 w-full object-cover rounded-xl"
    />
    <p class="font-light text-gray-600 my-2">
      {{ n.description }}
    </p>
    <div
      class="flex bg-gray-200 py-2 px-4 rounded-md items-center gap-4 justify-between mt-auto"
    >
      <div class="flex flex-col">
        <p class="font-bold">{{ n.author }}</p>
        <p class="font-light text-sm text-gray-700">
          {{ formatDate(n.published) }}
        </p>
      </div>
      <Icon
        name="material-symbols:bookmark-outline-rounded"
        class="text-2xl cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  n: object;
}>();
const formatDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
};
</script>

<style lang="scss" scoped>
.teaser {
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>