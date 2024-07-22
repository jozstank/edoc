<template>
  <div
    class="text-white hover:text-red-400 hover:bg-slate-200 px-2 py-2"
    @click="emitChoose"
  >
    <span class="px-3 py-2 cursor-pointer">{{ searchRes.title }}</span>
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
  props: {
    searchRes: {
      type: Object,
      required: true,
    },
  },
  emits: ["choose"],
  methods: {
    emitChoose() {
      this.generalStore.searchInputValue = this.searchRes.title;
      this.generalStore.isDropdownOpen = false;
    },
  },
};
</script>
