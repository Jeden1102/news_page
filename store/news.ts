import { defineStore } from "pinia";
export const useNewsStore = defineStore("news", {
  state: () => {
    return { recent: null as any };
  },
  actions: {
    async getRecentNews() {
      const response = (await useFetch(`/api/recent`)) as any;
      this.recent = response.data.value;
    },
  },
});
