<template>
  <router-view></router-view>
</template>
<script>
import useGeneralStore from "@/generalStore.js";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
    };
  },
  mounted() {
    const data = localStorage.getItem("mode");
    if (data && data === "moon") {
      this.generalStore.isSun = false;
      document.getElementById("app").style.background = "#0F172A";
    } else {
      this.generalStore.isSun = true;
      document.getElementById("app").style.background = "white";
    }
  },
};
</script>
