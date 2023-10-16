import { defineStore } from "pinia";

export const useRegionsStore = defineStore("regions", {
  state: () => {
    return { regions: null as any };
  },
  actions: {
    async getRegions() {
      const runtimeConfig = useRuntimeConfig();
      const categories = (await useFetch(
        `${runtimeConfig.public.API_URL}/available/regions`
      )) as any;
      const transformedRegions = Object.entries(
        categories.data.value.regions
      ).map(([label, value]) => ({ label, value }));
      this.regions = transformedRegions;
    },
  },
});
