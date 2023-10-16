import { defineStore } from 'pinia'
export const useIndexStore = defineStore('index', {
  state: () => {
    return { lang: '' }
  },
  actions: {
    setLang(lang:string) {
      this.lang = lang;
    },
  },
})