<template>
  <div
    :class="{
      'bg-[#0F172A]': !generalStore.isSun,
    }"
  >
    <Navbar @scroll="scrollToSection" class="animate-fadeInLeft" />

    <div class="animate-fadeInDown" ref="carousel"><Carousel /></div>
    <Hero @scroll="scrollToSection" class="animate-fadeInDown" />
    <div ref="treatments">
      <CardSection />
    </div>
    <div ref="about">
      <AboutSection />
    </div>
    <div ref="team">
      <TeamSection />
    </div>
    <div ref="blogs">
      <BlogsSection />
    </div>
    <div ref="contact">
      <ContactSection />
    </div>
    <svg
      @click="scrollToSection('carousel')"
      class="fixed bottom-8 right-20 cursor-pointer hover:scale-150 ease-out duration-300 opacity-35 hover:opacity-100 animate-bounce"
      id="Scroll_Up_24"
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="24" height="24" stroke="none" fill="#000000" opacity="0" />

      <g transform="matrix(0.42 0 0 0.42 12 12)">
        <g style="">
          <g transform="matrix(1 0 0 1 0 0)">
            <path
              style="
                stroke: none;
                stroke-width: 1;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-dashoffset: 0;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                fill: #fe7865;
                fill-rule: nonzero;
                opacity: 1;
              "
              transform=" translate(-24, -24)"
              d="M 24 8 C 32.822 8 40 15.178 40 24 C 40 32.822 32.822 40 24 40 C 15.178 40 8 32.822 8 24 C 8 15.178 15.178 8 24 8 M 24 4 C 12.957 4 4 12.954 4 24 C 4 35.046 12.956 44 24 44 C 35.044 44 44 35.046 44 24 C 44 12.954 35.045 4 24 4 L 24 4 z"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 0 -6)">
            <path
              style="
                stroke: none;
                stroke-width: 1;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-dashoffset: 0;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                fill: rgb(33, 150, 243);
                fill-rule: nonzero;
                opacity: 1;
              "
              transform=" translate(-24, -18)"
              d="M 24 13 L 32 23 L 16 23 z"
              stroke-linecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 0 3.5)">
            <path
              style="
                stroke: none;
                stroke-width: 1;
                stroke-dasharray: none;
                stroke-linecap: butt;
                stroke-dashoffset: 0;
                stroke-linejoin: miter;
                stroke-miterlimit: 4;
                fill: rgb(33, 150, 243);
                fill-rule: nonzero;
                opacity: 1;
              "
              transform=" translate(-24, -27.5)"
              d="M 22 20 L 26 20 L 26 35 L 22 35 z"
              stroke-linecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
    <FooterSection @scroll="scrollToSection" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/HeroSection.vue";
import Carousel from "@/components/Carousel.vue";
import CardSection from "@/components/CardSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import BlogsSection from "@/components/BlogsSection.vue";
import useGeneralStore from "@/generalStore.js";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
    };
  },

  components: {
    Navbar,
    Hero,
    Carousel,
    CardSection,
    AboutSection,
    TeamSection,
    BlogsSection,
    ContactSection,
    FooterSection,
  },
  watch: {
    scrollPosition(newValue) {
      console.log("Scroll position changed to:", newValue);
    },
  },

  methods: {
    scrollToSection(data) {
      this.$refs[data].scrollIntoView();
    },
  },
};
</script>
