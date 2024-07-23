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
      <h3 class="text-3xl font-bold">Our Blogs & Articles</h3>
      <p class="mt-5 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dolor
        fugiat ullam aliquam asperiores! Dignissimos ipsum accusamus sunt quae
        ab tempora ea perferendis, fuga, quo velit corporis aliquid. Debitis,
        maiores.
      </p>
    </div>

    <div class="flex flex-wrap justify-center items-start gap-2 mt-10">
      <SingleBlogCard
        v-for="(blog, index) in blogs"
        :key="index"
        :blog="blog"
      />
    </div>
  </section>
</template>
<script>
import SingleBlogCard from "./SingleBlogCard.vue";
import useGeneralStore from "@/generalStore.js";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
      blogs: [
        {
          id: 1,
          title: "Shoes!",
          body: "If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores incidunt cupiditate asperiores a dolorum, sed ut ab perspiciatis reprehenderit suscipit.",
          pic: "https://media.istockphoto.com/id/1048875936/photo/rejuvenating-facial-therapy-treatment-at-spa-salon-clinic-young-beautiful-asian-woman-getting.jpg?s=612x612&w=0&k=20&c=dmWGokgQDW7cItx4PP3R64cbKHWnP-oTN2zpWBPxPiA=",
        },
        {
          id: 2,
          title: "Shoes!",
          body: "If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores incidunt cupiditate asperiores a dolorum, sed ut ab perspiciatis reprehenderit suscipit.",
          pic: "https://media.istockphoto.com/id/1434508434/photo/happy-beautiful-asian-woman-is-getting-facial-skin-and-against-wrinkle-treatment-by.jpg?s=612x612&w=0&k=20&c=yhBWCASUNcfy-nhY79jMRnrxcMhY0KkldMufpLLThJM=",
        },
        {
          id: 3,
          title: "Shoes!",
          body: "If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores incidunt cupiditate asperiores a dolorum, sed ut ab perspiciatis reprehenderit suscipit.",
          pic: "https://media.istockphoto.com/id/1189482058/photo/asian-young-woman-gets-injection-in-her-lips-woman-in-beauty-salon-plastic-surgery-clinic.jpg?s=612x612&w=0&k=20&c=QLNRBIvoG0PXZ19kzxZN0aXczkc3AsaGKu3I1ml8NrU=",
        },
        {
          id: 4,
          title: "Shoes!",
          body: "If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores incidunt cupiditate asperiores a dolorum, sed ut ab perspiciatis reprehenderit suscipit.",
          pic: "https://media.istockphoto.com/id/1488062353/photo/wash-hands-with-soap-and-wash-with-running-water-close-up-of-women-scrub-hand-soap-with-wash.jpg?s=612x612&w=0&k=20&c=zXqs3G5o8yKs73Sm_gnpoIu5b1IXLR8sCgrp9gMOCi4=",
        },
      ],
    };
  },
  components: {
    SingleBlogCard,
  },
};
</script>
