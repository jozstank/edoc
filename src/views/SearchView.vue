<template>
  <section
    :class="{
      'bg-white': generalStore.isSun,
      'bg-[#0F172A]': !generalStore.isSun,
      'h-fit': true,
      'min-h-full': true,
    }"
  >
    <SearchNavbar />
    <h3
      :class="{
        'text-center': true,
        'mb-32': true,
        'mt-20': true,
        'text-5xl': true,
        'font-bold': true,
        'text-white': !generalStore.isSun,
      }"
    >
      Search Result
    </h3>
    <div class="mt-10 flex justify-center gap-3 m-auto flex-wrap">
      <SingleCard
        v-if="generalStore.searchArr.length > 0"
        v-for="(treatment, index) in generalStore.searchArr"
        :key="index"
        :treatment="treatment"
      />
      <h1
        v-else
        :class="{ 'text-lg': true, 'text-white': !generalStore.isSun }"
      >
        No search result found !!
      </h1>
    </div>
  </section>
</template>
<script>
import useGeneralStore from "@/generalStore.js";
import SearchNavbar from "@/components/SearchNavbar.vue";
import SingleCard from "@/components/SingleCard.vue";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
    };
  },
  components: {
    SingleCard,
    SearchNavbar,
  },
};
</script>
