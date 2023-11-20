<template>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <nuxt-img
      quality="80"
      format="webp"
      class="mx-auto h-12"
      :src="companyImage"
      alt=""
    />
    <figure class="mt-10">
      <blockquote
        class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"
      >
        <p>
          “Company {{ companyName }} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo expedita voluptas culpa sapiente alias
          molestiae. Numquam corrupti in laborum sed rerum et corporis.”
        </p>
      </blockquote>
      <figcaption class="mt-10">
        <nuxt-img
          quality="80"
          format="webp"
          class="mx-auto h-10 w-10 rounded-full"
          :src="personImage"
          alt="Member image."
        />
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">{{ personName }}</div>
          <svg
            viewBox="0 0 2 2"
            width="3"
            height="3"
            aria-hidden="true"
            class="fill-gray-900"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">CEO of {{ companyName }}</div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  companyImage: string;
  personImage: string;
  companyName: string;
  personName: string;
}>();
</script>