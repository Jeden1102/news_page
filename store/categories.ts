import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => {
    return { categories: null as any };
  },
  actions: {
    async getCategories() {
      const runtimeConfig = useRuntimeConfig();
      const categories = (await useFetch(
        `${runtimeConfig.public.API_URL}/available/categories`
      )) as any;
      this.categories = categories.data.value.categories;
    },
  },
});
