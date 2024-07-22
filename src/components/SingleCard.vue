<template>
  <div
    :class="{
      card: true,
      'w-80': true,
      'shadow-xl': true,
      'bg-[#1d2942]': !generalStore.isSun,
      'text-white': !generalStore.isSun,
    }"
  >
    <figure>
      <img
        class="hover:scale-110 ease-out duration-300"
        :src="imgSrc"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-2xl font-semibold">{{ treatment.title }}</h2>
      <p class="text-lg">{{ treatment.body }}</p>
      <div class="card-actions justify-end">
        <span
          v-show="treatment.price.length > 2"
          class="badge badge-outline hover:border-blue-400 py-5 px-3"
        >
          {{ treatment.price }}
        </span>
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
  computed: {
    imgSrc() {
      return `@/../public/images/t${this.treatment.id}.png`;
    },
  },
  props: {
    treatment: {
      type: Object,
      required: true,
    },
  },
};
</script>
