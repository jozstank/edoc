<template>
  <section class="mt-5">
    <span class="mx-auto mb-4 block w-fit text-3xl text-[#FE7865] font-bold"
      >Treatments</span
    >
    <div class="w-full h-1 rounded-lg bg-[#fe7865]"></div>
    <div class="mt-10 flex justify-center gap-3 m-auto flex-wrap">
      <SingleCard
        v-for="(treatment, index) in generalStore.treatments"
        :key="index"
        :treatment="treatment"
      />
    </div>
  </section>
</template>

<script>
import SingleCard from "./SingleCard.vue";
import useGeneralStore from "@/generalStore.js";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
    };
  },
  components: {
    SingleCard,
  },
};
</script>
