<template>
  <div class="menu-item--wrapper relative">
    <button
      @click="indexStore.setToggledMenu(props.label)"
      v-if="hasChildren"
      class="menu-item"
      :class="{ active: indexStore.toggledMenu === props.label }"
    >
      <span class="w-full"> {{ props.label }} </span>
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
        v-if="indexStore.toggledMenu === props.label"
        class="menu-item--childrens grid grid-cols-2 gap-2 flex-col mt-2 lg:absolute lg:top-8 lg:left-0 lg:shadow-lg lg:p-4 z-10 bg-white lg:grid lg:grid-cols-4 lg:min-w-[700px] rounded-lg"
      >
        <template v-if="objectKey">
          <NuxtLink
            v-for="child in props.children"
            class="menu-item pl-3 text-gray-500 hover:text-gray-700"
            :to="'/regions/' + child.value"
          >
            <span>{{ child[objectKey] }} </span>
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink
            v-for="child in props.children"
            class="menu-item pl-3 text-gray-500 hover:text-gray-700"
            :to="'/articles/' + child"
          >
            <span>{{ child }}</span>
          </NuxtLink>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, onMounted } from "vue";
import { useIndexStore } from "../../store";
const indexStore = useIndexStore();
const props = defineProps<{
  label: string;
  objectKey?: string;
  url?: string;
  children?: string[];
}>();
const hasChildren = computed(() => {
  if (!props.children) return false;
  return props.children.length > 0;
});
const watchOutsideMenuClick = () => {
  window.addEventListener("click", (ev) => {
    const target = ev.target as Element;
    if (
      target.classList.contains("menu-item--childrens") ||
      (target.parentElement &&
        target.parentElement.classList.contains("menu-item"))
    ) {
      return;
    }
    if (indexStore.toggledMenu !== "") {
      indexStore.setToggledMenu("");
    }
  });
};
onMounted(() => {
  watchOutsideMenuClick();
});
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
