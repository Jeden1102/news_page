import { defineStore } from "pinia";
export const useIndexStore = defineStore("index", {
  state: () => {
    return { lang: "", toggledMenu: "" };
  },
  actions: {
    setLang(lang: string) {
      this.lang = lang;
    },
    setToggledMenu(menuName: string) {
      // Collapse menu.
      if (this.toggledMenu === menuName) {
        this.toggledMenu = "";
        return;
      }
      // Show menu.
      this.toggledMenu = menuName;
    },
  },
});
