<template>
  <div id="team" class="bg-white py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
    >
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ $t("team.leadership") }}
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
          elementum enim vitae ullamcorper suspendisse.
        </p>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li v-for="member in teamMembers">
          <div class="flex items-center gap-x-6">
            <nuxt-img
              quality="80"
              format="webp"
              width="64"
              height="64"
              alt="Team member"
              loading="lazy"
              class="h-16 w-16 rounded-full"
              src="/person.avif"
            />
            <div>
              <h3
                class="text-base font-semibold leading-7 tracking-tight text-gray-900"
              >
                {{ member.name }}
              </h3>
              <p class="text-sm font-semibold leading-6 text-red-400">
                {{ $t(member.position) }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
const teamMembers = [
  { name: "Alice Johnson", position: "team.manager" },
  { name: "Bob Smith", position: "team.developer" },
  { name: "Eva Brown", position: "team.designer" },
  { name: "John Doe", position: "team.marketing" },
  { name: "Jane Doe", position: "team.ceo" },
  { name: "Charlie White", position: "team.manager" },
];
</script>
