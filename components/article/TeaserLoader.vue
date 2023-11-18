<template>
  <div
    class="w-full h-[350px] flex flex-col gap-2 shadow-d p-3 rounded-md bg-gray-50 loader"
  >
    <div class="h-40 skeleton"></div>
    <p class="mt-2 h-16 skeleton"></p>
    <div class="mt-auto h-12 skeleton"></div>
  </div>
</template>

<style lang="scss">
.skeleton {
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}
@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
</style>