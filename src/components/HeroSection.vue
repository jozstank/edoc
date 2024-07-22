<template>
  <div
    :class="{
      hero: true,
      'min-h-screen': true,
      'w-4/5': true,
      'md:w-full': true,
      'px-10': true,
      'm-auto': true,
      'bg-[#1d2942]': !generalStore.isSun,
      'text-white': !generalStore.isSun,
    }"
  >
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="https://media.istockphoto.com/id/1189158362/photo/female-dentist.jpg?s=612x612&w=0&k=20&c=mUBDPHxYnK8kVptlCsDwKh_CAc5pg_rUba9I4eDtQU0="
        class="w-2/4 rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">Rediscover Your Natural Beauty</h1>
        <p class="py-6 text-lg">
          "Beauty has always been a fascinating and sought-after quality. People
          from all walks of life desire to look their best and maintain a
          youthful appearance. While natural beauty is indeed a gift,
          advancements in aesthetics have made it possible for individuals to
          enhance their features and achieve timeless beauty.
          <b>Aesthetic</b> clinics play a pivotal role in this journey, offering
          various treatments and procedures that cater to various beauty needs.
          Aesthetics clinic is a healthcare facility that is primarily focused
          on the care of outpatients. An aesthetic skin care clinic may also
          offer pampering treatments, but their primary focus is on anti-aging
          treatment. They offer treatments such as Botox & Fillers, skin
          rejuvenation therapies, facial and chemical skin peels, laser hair
          removal and several other such services. The trained therapists at an
          aesthetic skin care clinic will be able to offer you a far more
          comprehensive range of treatments."
        </p>
        <a
          href="#treatments"
          class="btn btn-primary"
          @click="scrollToSection('treatments')"
          >Browse Our Treatments</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import useGeneralStore from "@/generalStore.js";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
    };
  },
  emits: ["scroll"],
  methods: {
    scrollToSection(section) {
      this.$emit("scroll", section);
    },
  },
};
</script>
