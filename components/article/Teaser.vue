<template>
  <div
    class="teaser flex flex-col gap-2 shadow-d h-full p-3 rounded-md bg-gray-100"
    v-if="!isLoading"
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
  <div
    class="w-full h-[350px] flex flex-col gap-2 shadow-d p-3 rounded-md bg-gray-50"
    v-else
  >
    <div class="h-40 skeleton"></div>
    <p class="mt-2 h-16 skeleton"></p>
    <div class="mt-auto h-12 skeleton"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  n: object;
  isLoading: boolean;
}>();
const formatDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  return `${dateObject.toLocaleDateString()} ${dateObject.toLocaleTimeString()}`;
};
</script>

<style lang="scss">
.teaser {
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
.skeleton {
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}
@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
</style>