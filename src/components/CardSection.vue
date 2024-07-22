<template>
  <section class="mt-5">
    <span class="ml-5 text-xl text-[#FE7865] font-bold" id="treatmentsSection"
      >Treatments & Products</span
    >
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

<style scoped>
#treatmentsSection {
  position: relative;
  padding-left: 370px;
}

#treatmentsSection:before {
  content: "";
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 300px;
  height: 2px;
  background: #fe7865;
  transform: translateY(50%);
}
</style>
