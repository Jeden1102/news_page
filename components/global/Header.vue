<template>
  <div
    class="flex flex-col md:flex-row items-center gap-3 lg:justify-between pt-4 mx-auto"
  >
    <div>
      <NuxtLink to="/" class="text-3xl">
        <span class="text-red-400 font-bold">MEGA</span>.news
      </NuxtLink>
    </div>
    <div class="flex w-full gap-2 lg:w-fit">
      <button
        @click="toggleMobileNav"
        class="bg-gray-100 rounded-lg w-fit p-2 mr-auto lg:hidden absolute left-4 top-6 md:static"
      >
        <Icon name="radix-icons:hamburger-menu" size="24px" />
      </button>
      <div class="hidden lg:block">
        <GlobalNavItems />
      </div>
      <div
        class="flex bg-gray-100 rounded-lg p-2 items-center w-full gap-2 lg:w-[200px] xl:w-[300px]"
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
      <button class="bg-gray-100 rounded-lg w-fit p-2 mr-auto">
        <Icon name="material-symbols:bookmark-outline-rounded" size="24px" />
      </button>
      <Multiselect
        v-model="locale"
        :options="options"
        :canClear="false"
        :canDeselect="false"
        @change="setGlobalLocale"
      />
    </div>
    <GlobalNavMobile :visible="isMobileNavVisible" @hide="toggleMobileNav" />
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import Multiselect from "@vueform/multiselect";
import { ref } from "vue";
import { useIndexStore } from "../../store/index";
const indexStore = useIndexStore();
const runtimeConfig = useRuntimeConfig();
const { locale } = useI18n();
const isMobileNavVisible = ref(false);
const toggleMobileNav = () => {
  isMobileNavVisible.value = !isMobileNavVisible.value;
  if (isMobileNavVisible.value) {
    applyBodyOverflow("hidden");
  } else {
    applyBodyOverflow("visible");
  }
};
const setGlobalLocale = (val: string) => {
  indexStore.setLang(val);
};
const applyBodyOverflow = (overflow: string) => {
  if (window.innerWidth > 1024) {
    return;
  }
  document.body.style.overflow = overflow;
};
const getLanguages = async () => {
  const languages = await axios.get(
    `${runtimeConfig.public.NEWS_API_URL}/available/languages`
  );
  const rawLanguages = languages.data.languages;
  const transformedLanguages = Object.entries(rawLanguages).map(
    ([label, value]) => ({ label, value })
  );
  return transformedLanguages;
};
const options = await getLanguages();
</script>
<style src="@vueform/multiselect/themes/default.css"></style>