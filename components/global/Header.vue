<template>
  <div class="flex flex-col md:flex-row items-center gap-3 lg:justify-between">
    <div>
      <NuxtLink to="/" class="text-3xl">
        <span class="text-red-400 font-bold">MEGA</span>.news
      </NuxtLink>
    </div>
    <div class="flex w-full gap-2 lg:w-fit">
      <button
        @click="isMobileNavVisible = true"
        class="bg-gray-100 rounded-lg w-fit p-2 mr-auto lg:hidden"
      >
        <Icon name="radix-icons:hamburger-menu" size="24px" />
      </button>
      <div class="hidden lg:block">
        <GlobalNavItems />
      </div>
      <div
        class="flex bg-gray-100 rounded-lg p-2 items-center w-full gap-2 lg:max-w-[300px]"
      >
        <button class="pb-1">
          <Icon name="ph:dots-three-outline-vertical-fill" />
        </button>
        <input
          type="text"
          class="bg-gray-100 w-full"
          placeholder="Search antything"
        />
        <button>
          <Icon name="ic:sharp-search" size="20px" />
        </button>
      </div>
    </div>
    <GlobalNavMobile
      :visible="isMobileNavVisible"
      @hide="isMobileNavVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isMobileNavVisible = ref(false);
</script>

<style scoped>
</style>