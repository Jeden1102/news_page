<template>
  <div class="menu-item--wrapper relative">
    <button
      @click="toggled = !toggled"
      v-if="hasChildren"
      class="menu-item"
      :class="{ active: toggled }"
    >
      <span> {{ props.label }} </span>
      <Icon
        v-if="hasChildren"
        class="pb-2"
        size="24px"
        name="carbon:chevron-sort-down"
      />
    </button>
    <NuxtLink v-else class="menu-item" :to="props.url">{{
      props.label
    }}</NuxtLink>
    <Transition name="slide-fade">
      <div
        v-if="toggled"
        class="menu-item--childrens flex gap-2 flex-col mt-2 lg:absolute lg:top-8 lg:left-0 lg:shadow-md lg:p-4 z-10 bg-white"
      >
        <NuxtLink
          v-for="child in props.children"
          class="menu-item pl-3 text-gray-500"
          to="/contact"
        >
          <span>{{ objectKey ? child[objectKey] : child }}</span>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from "vue";
const props = defineProps<{
  label: String;
  objectKey?: String;
  url?: String;
  children?: String[];
}>();
const hasChildren = computed(() => {
  if (!props.children) return false;
  return props.children.length > 0;
});
const toggled = ref(false);
</script>

<style scoped lang="scss">
.menu-item {
  border-left: 5px solid;
  @apply w-full font-bold text-left flex items-center justify-between min-w-[100px] pl-2 border-white;
  svg {
    transition: all 0.3s;
  }
  &.active {
    border-left: 5px solid;
    @apply border-red-400;
    svg {
      transform: rotate(-180deg);
      transform-origin: center;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
