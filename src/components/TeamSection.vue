<template>
  <section
    :class="{
      'mt-5': true,
      'pt-10': true,
      'bg-[#0f172a]': !generalStore.isSun,
      'text-white': !generalStore.isSun,
    }"
  >
    <div class="w-3/6 m-auto flex flex-col justify-center items-center">
      <h3 class="text-3xl font-bold">Our Expert Team</h3>
      <p class="mt-5 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolor
        fugiat ullam aliquam asperiores! Dignissimos ipsum accusamus sunt quae
        ab tempora ea perferendis, fuga, quo velit corporis aliquid. Debitis,
        maiores.
      </p>
    </div>

    <div class="flex flex-wrap justify-center items-center gap-2 mt-10">
      <SingleTeamMemberCard
        v-for="(member, index) in teamMembers"
        :key="index"
        :member="member"
      />
    </div>
  </section>
</template>
<script>
import SingleTeamMemberCard from "./SingleTeamMemberCard.vue";
import useGeneralStore from "@/generalStore.js";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
      teamMembers: [
        {
          name: "Dr. Nan May",
          profile: "/images/d1.jpg",
          phone: "+959777360240",
          mail: "nanmaynu90@gmail.com",
          bio: "lorem...",
        },
        {
          name: "Dr. Aung Thiha",
          profile: "/images/d2.jpg",
          phone: "+959940991988",
          mail: "mailto:doctoraluxuryaesthetic@gmail.com",
          bio: "thsi is aung thiha...",
        },
        {
          name: "Dr. Sandy Kyaw",
          profile: "/images/d3.jpg",
          phone: "+959987546766",
          mail: "sandykyaw.umm@gmail.com",
          bio: "lorem...",
        },
        {
          name: "Dr. Wai Phyo Aung",
          profile: "/images/d4.jpg",
          phone: "+959965031567",
          mail: "drwai@gmail.com",
          bio: "lorem...",
        },
        {
          name: "Dr. Laurel",
          profile: "/images/d5.jpg",
          phone: "+959770013077",
          mail: "dr.laurel21@gmail.com",
          bio: "lorem...",
        },
      ],
    };
  },
  components: {
    SingleTeamMemberCard,
  },
};
</script>
