<template>
  <div
    :class="{
      card: true,
      'w-64': true,
      'shadow-xl': true,
      'py-5': true,
      'bg-[#0f172a]': !generalStore.isSun,
      'text-white': !generalStore.isSun,
      'border-[#FE7865]': !generalStore.isSun,
      'border-solid': !generalStore.isSun,
      'border-2': !generalStore.isSun,
      'hover:scale-110': true,
      'ease-out': true,
      'duration-300': true,
    }"
  >
    <figure class="px-10 pt-5">
      <img class="mask mask-squircle" :src="member.profile" />
    </figure>
    <div class="card-body items-center text-center p-0">
      <h2 class="card-title">{{ member.name }}</h2>
      <p class="">
        {{ member.bio }}
      </p>
      <div
        class="card-actions flex justify-center items-center gap-3 border-solid border-2 rounded-xl p-3"
      >
        <a href="#"
          ><img class="w-7" src="@/../public/icons/facebook.png" alt=""
        /></a>
        <a href="#"
          ><img class="w-7" src="@/../public/icons/instagram.png" alt=""
        /></a>
        <a :href="`tel:${member.phone}`"
          ><img class="w-7" src="@/../public/icons/phone.png" alt=""
        /></a>
        <a :href="`mailto:${member.mail}`"
          ><img class="w-7" src="@/../public/icons/mail.png" alt=""
        /></a>
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
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>
