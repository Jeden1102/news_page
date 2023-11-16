
<template>
  <section
    id="testimontals"
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"
    ></div>
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    ></div>
    <swiper :slides-per-view="1" :space-between="20" class="min-h-[400px]">
      <swiper-slide v-for="testimontal in testimontals">
        <AboutTestimontal
          :companyImage="testimontal.companyImage"
          :personImage="testimontal.personImage"
          :companyName="testimontal.companyName"
          :personName="testimontal.personName"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
const testimontals = [
  {
    companyImage: "netflix.png",
    personImage: "/person.avif",
    companyName: "Netflix",
    personName: "John Doe",
  },
  {
    companyImage: "google.png",
    personImage: "/person.avif",
    companyName: "Google",
    personName: "Mark Gracynski",
  },
];
</script>