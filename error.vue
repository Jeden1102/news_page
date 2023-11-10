<template>
  <NuxtLayout name="404">
    <div class="py-2 mx-auto px-2 max-w-[1400px]">
      <GlobalHeader />
      <div class="py-12 flex flex-col gap-8 justify-center items-center">
        <img class="w-full h-72" src="/404.svg" alt="" />
        <h1 class="text-3xl">Page not found</h1>
        <p>Are you lost?</p>
        <NuxtLink
          class="p-4 rounded-md shadow-sm bg-red-400 text-white"
          href="/"
          >Take me home</NuxtLink
        >
      </div>
      <GlobalFooter />
    </div>
  </NuxtLayout>
</template>
  
  <script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
  
  <style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;
}
</style>