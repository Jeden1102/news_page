<template>
  <div id="stats" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">
            {{ $t("about.news") }}
          </dt>
          <dd
            class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            44 million
          </dd>
        </div>
        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">
            {{ $t("categories") }}
          </dt>
          <dd
            class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            57
          </dd>
        </div>
        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">{{ $t("regions") }}</dt>
          <dd
            class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            28
          </dd>
        </div>
        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">
            {{ $t("about.users") }}
          </dt>
          <dd
            class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            22 milion
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>