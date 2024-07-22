<template>
  <div
    :class="{
      card: true,
      'card-compact': true,
      'w-96': true,
      'shadow-xl': true,
      'bg-[#0f172a]': !generalStore.isSun,
      'text-white': !generalStore.isSun,
      'border-[#FE7865]': !generalStore.isSun,
      'border-solid': !generalStore.isSun,
      'border-2': !generalStore.isSun,
    }"
  >
    <figure>
      <img :src="blog.pic" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ blog.title }}</h2>
      <p>
        {{ blog.body }}
      </p>
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
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>
